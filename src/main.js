import fs from 'fs';
import path from 'path';
import antlr4 from 'antlr4';                // -> o runtime
import { Graphviz } from '@hpcc-js/wasm';   // -> para gerar as imagens SVG da AST construída

import NovaScriptLexer from '../NovaScriptLexer.js';
import NovaScriptParser from '../NovaScriptParser.js';
import NovaScriptErrorListener from './NovaScriptErrorListener.js';
import AstBuilderVisitor from './AstBuilderVisitor.js';
import InterpreterVisitor from './interpreter/InterpreterVisitor.js';


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
    
    // Leitura arquivo e configuração Parser
    const filePath = process.argv[2];
    if (!filePath) {
        console.log("Por favor, forneça o caminho para o arquivo .ns");
        process.exit(1);
    }

    console.log(`Lendo o arquivo: ${filePath}`);
    const input = fs.readFileSync(filePath, 'utf-8');
    
    const chars = new antlr4.InputStream(input);
    const lexer = new NovaScriptLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new NovaScriptParser(tokens);
    
    lexer.removeErrorListeners();
    parser.removeErrorListeners();
    const errorListener = new NovaScriptErrorListener();
    lexer.addErrorListener(errorListener);
    parser.addErrorListener(errorListener);
    
    parser.buildParseTrees = true;      // <- conecta o listener ao Parser


    // Inicia a análise
    try {
        console.log("Iniciando análise...");
        const tree = parser.programa();     // <- Árvore de Parse Concreta vinda do arquivo gerado
        console.log("Análise concluída com sucesso.");
    
        // --- CONSTRUÇÃO DA AST ---
        
        console.log("Construindo a Árvore Sintática Abstrata (AST)...");
        const AstBuilder = new AstBuilderVisitor();
        const ast = AstBuilder.visit(tree); // AST
        console.log("AST construída com sucesso.");
        
        // Gera e salva o arquivo .dot
        const dotOutput = generateDot(ast);
        const outputDir = 'output';
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir);
        }
        
        const baseName = path.basename(filePath, '.ns');
        const dotFilePath = path.join(outputDir, `${baseName}.ast.dot`);
        fs.writeFileSync(dotFilePath, dotOutput);
        console.log(`Arquivo .dot da AST salvo em: ${dotFilePath}`);
        
        
        // --- Geração AST em Imagem SVG ---
        console.log("Gerando imagem da AST...");
        const graphviz = await Graphviz.load();
        const svg = graphviz.dot(dotOutput);
        const svgFilePath = path.join(outputDir, `${baseName}.ast.svg`);
        fs.writeFileSync(svgFilePath, svg);
        console.log(`Imagem SVG da AST salva em: ${svgFilePath}`);


        // --- Interpretação ---
        console.log("\nIniciando execução do programa...");
        console.log("-----------------------------------");

        const interpreter = new InterpreterVisitor();
        interpreter.visit(ast);     // <- executa o código

        console.log("-----------------------------------");
        console.log("Execução concluída.");


        
        // Imprime AST em formato JSON no terminal
        console.log(JSON.stringify(ast, null, 4));

    } catch (e) {
        console.error("Uma exceção interrompeu a análise.", e);
    }
}


main();     // <- executa a função principal
