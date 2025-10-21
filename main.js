import fs from 'fs';
import antlr4 from 'antlr4';
import NovaScriptLexer from './NovaScriptLexer.js';
import NovaScriptParser from './NovaScriptParser.js';
import NovaScriptErrorListener from './NovaScriptErrorListener.js';


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
    const tree = parser.programa();
    console.log("Análise concluída com sucesso.");
    console.log(tree.toStringTree(parser.ruleNames));
} catch (e) {
    console.error("Uma exceção interrompeu a análise.");
}
