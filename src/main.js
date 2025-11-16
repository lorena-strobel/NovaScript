import fs from 'fs';
import path from 'path';
import antlr4 from 'antlr4';                // -> o runtime
import { Graphviz } from '@hpcc-js/wasm';   // -> para gerar as imagens SVG da AST construída

import NovaScriptLexer from '../NovaScriptLexer.js';
import NovaScriptParser from '../NovaScriptParser.js';
import NovaScriptErrorListener from './NovaScriptErrorListener.js';
import AstBuilderVisitor from './AstBuilderVisitor.js';
import InterpreterVisitor from './interpreter/InterpreterVisitor.js';
import LuaCodeGenerator from './codegen/LuaCodeGenerator.js';


// --- Função para gerar o arquivo .dot (Graphviz)
function generateDot(ast) {
    let dot = 'digraph AST {\n  node [shape=box, style="rounded"];\n';
    let counter = 0;

    function traverse(node, parentId) {
        
        if (!node || typeof node !== 'object') return;

        const id = counter++;
        const nodeLabel = node.type +
            (node.name ? ` (${node.name})` : '') +
            (node.operator ? ` (${node.operator})` : '') +
            (node.value !== undefined ? ` (${node.value})` : '');
        
        dot += `  ${id} [label="${nodeLabel}"];\n`;

        if (parentId !== undefined) {
            dot += `  ${parentId} -> ${id};\n`;
        }

        for (const key in node) {
            if (key === 'type' || key === 'raw' || key === 'loc') continue;
            const child = node[key];

            if (Array.isArray(child)) {
                child.forEach(item => traverse(item, id));
            } else if (typeof child === 'object' && child !== null) {
                traverse(child, id);
            }
        }
    }

    traverse(ast);
    dot += '}';

    return dot;
}



// --- Lógica principal assíncrona ---
async function main() {
    
    // Verificar argumentos da linha de comando (Terminal)
    const args = process.argv.slice(2);
    const mode = args.find(arg => arg.startsWith('--')) || '--interpret';
    const filePath = args.find(arg => !arg.startsWith('--'));

    if (!filePath) {
        console.log("Uso: node src/main.js [--interpret|--transpile] <arquivo.ns>");
        process.exit(1);
    }

    console.log(`\nLendo o arquivo: ${filePath}`);
    const input = fs.readFileSync(filePath, 'utf-8');

    // Análise Léxica e Sintática
    const chars = new antlr4.InputStream(input);
    const lexer = new NovaScriptLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new NovaScriptParser(tokens);
    
    lexer.removeErrorListeners();
    parser.removeErrorListeners();
    const errorListener = new NovaScriptErrorListener();
    lexer.addErrorListener(errorListener);
    parser.addErrorListener(errorListener);     // <- conecta o listener ao Parser

    parser.buildParseTrees = true;


    // Inicia a análise
    try {
        console.log("Iniciando análise...");
        const tree = parser.programa();
        console.log("Análise sintática concluída.");

        console.log("Construindo a Árvore Sintática Abstrata (AST)...");
        const astBuilder = new AstBuilderVisitor();
        const ast = astBuilder.visit(tree);
        console.log("AST construída com sucesso.");

        // Gerar arquivo .dot e imagem SVG
        const dotOutput = generateDot(ast);
        const outputDir = 'output';
        if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

        const baseName = path.basename(filePath, '.ns');
        const dotFilePath = path.join(outputDir, `${baseName}.ast.dot`);
        fs.writeFileSync(dotFilePath, dotOutput);
        console.log(`Arquivo .dot da AST salvo em: ${dotFilePath}`);

        console.log("Gerando imagem da AST...");
        const graphviz = await Graphviz.load();
        const svg = graphviz.dot(dotOutput);
        const svgFilePath = path.join(outputDir, `${baseName}.ast.svg`);
        fs.writeFileSync(svgFilePath, svg);
        console.log(`Imagem SVG da AST salva em: ${svgFilePath}`);


        // === MODO DE EXECUÇÃO ===
        if (mode === '--interpret') {
            console.log("\nIniciando execução do programa (Interpretador)...");
            console.log("---------------------------------");

            const interpreter = new InterpreterVisitor();
            interpreter.visit(ast);

            console.log("---------------------------------");
            console.log("Execução concluída.");

        } else if (mode === '--transpile') {
            console.log("\nGerando código Lua...");
            console.log("---------------------------------");
            
            const luaGenerator = new LuaCodeGenerator();
            const luaCode = luaGenerator.generate(ast);

            // Salva código Lua
            const luaOutputDir = 'output/lua';
            if (!fs.existsSync(luaOutputDir)) {
                fs.mkdirSync(luaOutputDir, { recursive: true });
            }

            const luaFilePath = path.join(luaOutputDir, `${baseName}.lua`);
            fs.writeFileSync(luaFilePath, luaCode);

            console.log("Código Lua gerado:");
            console.log(luaCode);
            console.log("---------------------------------");
            console.log(`Arquivo Lua salvo em: ${luaFilePath}`);
        }

        // Imprime AST em formato JSON no terminal
        console.log(JSON.stringify(ast, null, 4));
    
    } catch (e) {
        console.error("\nUma exceção interrompeu o processo.", e);
    }
}


main();     // <- executa a função principal
