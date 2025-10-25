import fs from 'fs';
import path from 'path';
import antlr4 from 'antlr4';
import NovaScriptLexer from './NovaScriptLexer.js';
import NovaScriptParser from './NovaScriptParser.js';
import NovaScriptErrorListener from './NovaScriptErrorListener.js';
import AstBuilderVisitor from './AstBuilderVisitor.js';


// --- Função para gerar o arquivo .dot (Graphviz)
function generateDot(ast) {
    let dot = 'digraph AST {\n';
    let counter = 0;

    function traverse(node) {
        if (!node || typeof node !== 'object') return;

        const parentId = counter;
        const nodeLabel = node.type + 
            (node.name ?` (${node.name})` : '') +
            (node.operator ? ` (${node.operator})` : '') +
            (node.value !== undefined ? ` (${node.value})` : '');
        dot += `  ${parentId} [label="${nodeLabel}"];\n`;

        for (const key in node) {
            if (key === 'type') continue;
            const child = node[key];

            if (Array.isArray(child)) {
                child.forEach(item => {
                    const childId = ++counter;
                    dot += `  ${parentId} -> ${childId};\n`;
                    traverse(item, childId);
                });
            } else if (typeof child === 'object' && child !== null) {
                const childId = ++counter;
                dot += `  ${parentId} -> ${childId};\n`;
                traverse(child, childId);
            }
        }
    }

    traverse(ast);
    dot += '}';
    return dot;
}


// Leitura arquivo e configuração Parser
const filePath = process.argv[2];
if (!filePath) {
    console.log("Por favor, forneça o caminha para o arquivo .ns");
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
parser.addErrorListener(errorListener);     // <- conecta o listener ao Parser

parser.buildParseTrees = true;


// Inicia a análise
try {
    console.log("Iniciando análise...");
    const tree = parser.programa();     // Árvore de Parse Concreta
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

    console.log(JSON.stringify(ast, null, 4));
} catch (e) {
    console.error("Uma exceção interrompeu a análise.", e);
}
