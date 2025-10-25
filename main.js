import fs from 'fs';
import antlr4 from 'antlr4';
import NovaScriptLexer from './NovaScriptLexer.js';
import NovaScriptParser from './NovaScriptParser.js';
import NovaScriptErrorListener from './NovaScriptErrorListener.js';
import AstBuilderVisitor from './AstBuilderVisitor.js';


// Leitura arquivo e configuração Parser
const filePath = process.argv[2];
if (!filePath) {
    console.log("Por favor, forneça o caminha para o arquivo .ns");
    process.exit(1);
}

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

    console.log(JSON.stringify(ast, null, 4));
} catch (e) {
    console.error("Uma exceção interrompeu a análise.", e);
}
