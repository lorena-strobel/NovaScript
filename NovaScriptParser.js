// Generated from NovaScript.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import NovaScriptListener from './NovaScriptListener.js';
import NovaScriptVisitor from './NovaScriptVisitor.js';

const serializedATN = [4,1,38,311,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,1,0,5,0,58,8,0,10,0,12,0,61,9,0,1,1,1,1,1,1,1,1,3,1,67,8,1,1,1,3,1,
70,8,1,1,1,1,1,3,1,74,8,1,1,2,1,2,1,2,1,2,1,2,1,2,3,2,82,8,2,1,3,1,3,1,3,
1,4,1,4,1,4,3,4,90,8,4,1,4,1,4,1,4,1,4,3,4,96,8,4,5,4,98,8,4,10,4,12,4,101,
9,4,1,5,1,5,1,5,1,5,5,5,107,8,5,10,5,12,5,110,9,5,1,5,1,5,1,6,1,6,1,6,1,
6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,134,
8,6,1,7,1,7,1,8,1,8,1,8,5,8,141,8,8,10,8,12,8,144,9,8,1,8,1,8,1,9,1,9,1,
9,5,9,151,8,9,10,9,12,9,154,9,9,1,10,1,10,3,10,158,8,10,1,11,1,11,3,11,162,
8,11,1,12,1,12,1,12,5,12,167,8,12,10,12,12,12,170,9,12,1,13,1,13,1,13,5,
13,175,8,13,10,13,12,13,178,9,13,1,14,1,14,1,14,1,14,1,14,3,14,185,8,14,
1,15,1,15,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,
17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,3,17,212,8,17,1,18,
1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,223,8,18,1,18,1,18,1,18,1,18,
1,18,1,18,1,18,3,18,232,8,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
1,18,1,18,1,18,1,18,3,18,247,8,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,3,19,
256,8,19,1,20,1,20,1,20,1,20,1,20,3,20,263,8,20,1,21,5,21,266,8,21,10,21,
12,21,269,9,21,1,22,1,22,1,22,1,22,1,22,3,22,276,8,22,1,23,1,23,1,24,1,24,
1,24,5,24,283,8,24,10,24,12,24,286,9,24,1,25,1,25,1,25,5,25,291,8,25,10,
25,12,25,294,9,25,1,26,1,26,1,26,3,26,299,8,26,1,27,1,27,1,27,1,27,1,27,
1,27,1,27,1,27,3,27,309,8,27,1,27,0,0,28,0,2,4,6,8,10,12,14,16,18,20,22,
24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,0,6,1,0,8,10,1,0,12,13,1,
0,14,15,1,0,34,36,1,0,23,24,1,0,28,33,322,0,59,1,0,0,0,2,73,1,0,0,0,4,81,
1,0,0,0,6,83,1,0,0,0,8,86,1,0,0,0,10,108,1,0,0,0,12,133,1,0,0,0,14,135,1,
0,0,0,16,137,1,0,0,0,18,147,1,0,0,0,20,157,1,0,0,0,22,161,1,0,0,0,24,163,
1,0,0,0,26,171,1,0,0,0,28,184,1,0,0,0,30,186,1,0,0,0,32,188,1,0,0,0,34,190,
1,0,0,0,36,246,1,0,0,0,38,255,1,0,0,0,40,262,1,0,0,0,42,267,1,0,0,0,44,270,
1,0,0,0,46,277,1,0,0,0,48,279,1,0,0,0,50,287,1,0,0,0,52,298,1,0,0,0,54,308,
1,0,0,0,56,58,3,2,1,0,57,56,1,0,0,0,58,61,1,0,0,0,59,57,1,0,0,0,59,60,1,
0,0,0,60,1,1,0,0,0,61,59,1,0,0,0,62,67,3,6,3,0,63,67,3,16,8,0,64,67,3,12,
6,0,65,67,3,44,22,0,66,62,1,0,0,0,66,63,1,0,0,0,66,64,1,0,0,0,66,65,1,0,
0,0,67,69,1,0,0,0,68,70,5,1,0,0,69,68,1,0,0,0,69,70,1,0,0,0,70,74,1,0,0,
0,71,74,3,32,16,0,72,74,3,36,18,0,73,66,1,0,0,0,73,71,1,0,0,0,73,72,1,0,
0,0,74,3,1,0,0,0,75,82,3,6,3,0,76,82,3,16,8,0,77,82,3,12,6,0,78,82,3,32,
16,0,79,82,3,36,18,0,80,82,3,44,22,0,81,75,1,0,0,0,81,76,1,0,0,0,81,77,1,
0,0,0,81,78,1,0,0,0,81,79,1,0,0,0,81,80,1,0,0,0,82,5,1,0,0,0,83,84,5,2,0,
0,84,85,3,8,4,0,85,7,1,0,0,0,86,89,5,34,0,0,87,88,5,3,0,0,88,90,3,22,11,
0,89,87,1,0,0,0,89,90,1,0,0,0,90,99,1,0,0,0,91,92,5,4,0,0,92,95,5,34,0,0,
93,94,5,3,0,0,94,96,3,22,11,0,95,93,1,0,0,0,95,96,1,0,0,0,96,98,1,0,0,0,
97,91,1,0,0,0,98,101,1,0,0,0,99,97,1,0,0,0,99,100,1,0,0,0,100,9,1,0,0,0,
101,99,1,0,0,0,102,103,5,4,0,0,103,104,5,34,0,0,104,105,5,3,0,0,105,107,
3,22,11,0,106,102,1,0,0,0,107,110,1,0,0,0,108,106,1,0,0,0,108,109,1,0,0,
0,109,111,1,0,0,0,110,108,1,0,0,0,111,112,5,1,0,0,112,11,1,0,0,0,113,114,
5,2,0,0,114,115,5,34,0,0,115,116,5,3,0,0,116,117,3,14,7,0,117,118,5,5,0,
0,118,119,5,6,0,0,119,120,5,37,0,0,120,121,5,7,0,0,121,134,1,0,0,0,122,123,
5,2,0,0,123,124,5,34,0,0,124,125,5,3,0,0,125,126,5,5,0,0,126,127,5,6,0,0,
127,128,5,37,0,0,128,134,5,7,0,0,129,130,5,5,0,0,130,131,5,6,0,0,131,132,
5,37,0,0,132,134,5,7,0,0,133,113,1,0,0,0,133,122,1,0,0,0,133,129,1,0,0,0,
134,13,1,0,0,0,135,136,7,0,0,0,136,15,1,0,0,0,137,138,5,11,0,0,138,142,5,
6,0,0,139,141,3,18,9,0,140,139,1,0,0,0,141,144,1,0,0,0,142,140,1,0,0,0,142,
143,1,0,0,0,143,145,1,0,0,0,144,142,1,0,0,0,145,146,5,7,0,0,146,17,1,0,0,
0,147,152,3,20,10,0,148,149,5,12,0,0,149,151,3,20,10,0,150,148,1,0,0,0,151,
154,1,0,0,0,152,150,1,0,0,0,152,153,1,0,0,0,153,19,1,0,0,0,154,152,1,0,0,
0,155,158,5,37,0,0,156,158,3,22,11,0,157,155,1,0,0,0,157,156,1,0,0,0,158,
21,1,0,0,0,159,162,3,24,12,0,160,162,5,37,0,0,161,159,1,0,0,0,161,160,1,
0,0,0,162,23,1,0,0,0,163,168,3,26,13,0,164,165,7,1,0,0,165,167,3,26,13,0,
166,164,1,0,0,0,167,170,1,0,0,0,168,166,1,0,0,0,168,169,1,0,0,0,169,25,1,
0,0,0,170,168,1,0,0,0,171,176,3,28,14,0,172,173,7,2,0,0,173,175,3,28,14,
0,174,172,1,0,0,0,175,178,1,0,0,0,176,174,1,0,0,0,176,177,1,0,0,0,177,27,
1,0,0,0,178,176,1,0,0,0,179,185,3,30,15,0,180,181,5,6,0,0,181,182,3,24,12,
0,182,183,5,7,0,0,183,185,1,0,0,0,184,179,1,0,0,0,184,180,1,0,0,0,185,29,
1,0,0,0,186,187,7,3,0,0,187,31,1,0,0,0,188,189,3,34,17,0,189,33,1,0,0,0,
190,191,5,16,0,0,191,192,5,6,0,0,192,193,3,46,23,0,193,194,5,7,0,0,194,195,
5,17,0,0,195,196,3,42,21,0,196,211,5,18,0,0,197,198,5,19,0,0,198,199,5,17,
0,0,199,200,3,42,21,0,200,201,5,18,0,0,201,212,1,0,0,0,202,203,5,19,0,0,
203,204,5,16,0,0,204,205,5,6,0,0,205,206,3,46,23,0,206,207,5,7,0,0,207,208,
5,17,0,0,208,209,3,42,21,0,209,210,5,18,0,0,210,212,1,0,0,0,211,197,1,0,
0,0,211,202,1,0,0,0,211,212,1,0,0,0,212,35,1,0,0,0,213,214,5,20,0,0,214,
215,5,17,0,0,215,216,3,42,21,0,216,217,5,18,0,0,217,218,5,21,0,0,218,219,
5,6,0,0,219,220,3,46,23,0,220,222,5,7,0,0,221,223,5,1,0,0,222,221,1,0,0,
0,222,223,1,0,0,0,223,247,1,0,0,0,224,225,5,22,0,0,225,226,5,6,0,0,226,227,
3,38,19,0,227,228,5,1,0,0,228,229,3,46,23,0,229,231,5,1,0,0,230,232,3,40,
20,0,231,230,1,0,0,0,231,232,1,0,0,0,232,233,1,0,0,0,233,234,5,7,0,0,234,
235,5,17,0,0,235,236,3,42,21,0,236,237,5,18,0,0,237,247,1,0,0,0,238,239,
5,21,0,0,239,240,5,6,0,0,240,241,3,46,23,0,241,242,5,7,0,0,242,243,5,17,
0,0,243,244,3,42,21,0,244,245,5,18,0,0,245,247,1,0,0,0,246,213,1,0,0,0,246,
224,1,0,0,0,246,238,1,0,0,0,247,37,1,0,0,0,248,249,5,2,0,0,249,250,5,34,
0,0,250,251,5,3,0,0,251,256,3,22,11,0,252,253,5,34,0,0,253,254,5,3,0,0,254,
256,3,22,11,0,255,248,1,0,0,0,255,252,1,0,0,0,256,39,1,0,0,0,257,258,5,34,
0,0,258,259,5,3,0,0,259,263,3,22,11,0,260,261,5,34,0,0,261,263,7,4,0,0,262,
257,1,0,0,0,262,260,1,0,0,0,263,41,1,0,0,0,264,266,3,2,1,0,265,264,1,0,0,
0,266,269,1,0,0,0,267,265,1,0,0,0,267,268,1,0,0,0,268,43,1,0,0,0,269,267,
1,0,0,0,270,275,5,34,0,0,271,272,5,3,0,0,272,276,3,22,11,0,273,276,5,23,
0,0,274,276,5,24,0,0,275,271,1,0,0,0,275,273,1,0,0,0,275,274,1,0,0,0,276,
45,1,0,0,0,277,278,3,48,24,0,278,47,1,0,0,0,279,284,3,50,25,0,280,281,5,
25,0,0,281,283,3,50,25,0,282,280,1,0,0,0,283,286,1,0,0,0,284,282,1,0,0,0,
284,285,1,0,0,0,285,49,1,0,0,0,286,284,1,0,0,0,287,292,3,52,26,0,288,289,
5,26,0,0,289,291,3,52,26,0,290,288,1,0,0,0,291,294,1,0,0,0,292,290,1,0,0,
0,292,293,1,0,0,0,293,51,1,0,0,0,294,292,1,0,0,0,295,296,5,27,0,0,296,299,
3,52,26,0,297,299,3,54,27,0,298,295,1,0,0,0,298,297,1,0,0,0,299,53,1,0,0,
0,300,301,5,6,0,0,301,302,3,46,23,0,302,303,5,7,0,0,303,309,1,0,0,0,304,
305,3,24,12,0,305,306,7,5,0,0,306,307,3,24,12,0,307,309,1,0,0,0,308,300,
1,0,0,0,308,304,1,0,0,0,309,55,1,0,0,0,29,59,66,69,73,81,89,95,99,108,133,
142,152,157,161,168,176,184,211,222,231,246,255,262,267,275,284,292,298,
308];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class NovaScriptParser extends antlr4.Parser {

    static grammarFileName = "NovaScript.g4";
    static literalNames = [ null, "';'", "'let'", "'='", "','", "'prompt'", 
                            "'('", "')'", "'Number'", "'parseInt'", "'parseFloat'", 
                            "'console.log'", "'+'", "'-'", "'*'", "'/'", 
                            "'if'", "'{'", "'}'", "'else'", "'do'", "'while'", 
                            "'for'", "'++'", "'--'", "'||'", "'&&'", "'!'", 
                            "'=='", "'!='", "'>'", "'<'", "'>='", "'<='" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, "ID", "INT", "DECIMAL", "STRING", 
                             "WS" ];
    static ruleNames = [ "programa", "statement", "lista", "declaracao", 
                         "lista_atrib", "lista_id", "ler", "funcao_conversao", 
                         "escrever", "concatenacao_log", "elemento_log", 
                         "expressao", "expmat", "termo", "fator", "numero", 
                         "condicional", "se", "laco", "inicio", "final", 
                         "bloco", "atribuicao", "condicao", "condicao_or", 
                         "condicao_and", "condicao_not", "condicao_par" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = NovaScriptParser.ruleNames;
        this.literalNames = NovaScriptParser.literalNames;
        this.symbolicNames = NovaScriptParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, NovaScriptParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 7407652) !== 0) || _la===34) {
	            this.state = 56;
	            this.statement();
	            this.state = 61;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, NovaScriptParser.RULE_statement);
	    var _la = 0;
	    try {
	        this.state = 73;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	        case 5:
	        case 11:
	        case 34:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 66;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 62;
	                this.declaracao();
	                break;

	            case 2:
	                this.state = 63;
	                this.escrever();
	                break;

	            case 3:
	                this.state = 64;
	                this.ler();
	                break;

	            case 4:
	                this.state = 65;
	                this.atribuicao();
	                break;

	            }
	            this.state = 69;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===1) {
	                this.state = 68;
	                this.match(NovaScriptParser.T__0);
	            }

	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 71;
	            this.condicional();
	            break;
	        case 20:
	        case 21:
	        case 22:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 72;
	            this.laco();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lista() {
	    let localctx = new ListaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, NovaScriptParser.RULE_lista);
	    try {
	        this.state = 81;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 75;
	            this.declaracao();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 76;
	            this.escrever();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 77;
	            this.ler();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 78;
	            this.condicional();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 79;
	            this.laco();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 80;
	            this.atribuicao();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaracao() {
	    let localctx = new DeclaracaoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, NovaScriptParser.RULE_declaracao);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83;
	        this.match(NovaScriptParser.T__1);
	        this.state = 84;
	        this.lista_atrib();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lista_atrib() {
	    let localctx = new Lista_atribContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, NovaScriptParser.RULE_lista_atrib);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this.match(NovaScriptParser.ID);
	        this.state = 89;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 87;
	            this.match(NovaScriptParser.T__2);
	            this.state = 88;
	            this.expressao();
	        }

	        this.state = 99;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 91;
	            this.match(NovaScriptParser.T__3);
	            this.state = 92;
	            this.match(NovaScriptParser.ID);
	            this.state = 95;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===3) {
	                this.state = 93;
	                this.match(NovaScriptParser.T__2);
	                this.state = 94;
	                this.expressao();
	            }

	            this.state = 101;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lista_id() {
	    let localctx = new Lista_idContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, NovaScriptParser.RULE_lista_id);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 108;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 102;
	            this.match(NovaScriptParser.T__3);
	            this.state = 103;
	            this.match(NovaScriptParser.ID);
	            this.state = 104;
	            this.match(NovaScriptParser.T__2);
	            this.state = 105;
	            this.expressao();
	            this.state = 110;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 111;
	        this.match(NovaScriptParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ler() {
	    let localctx = new LerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, NovaScriptParser.RULE_ler);
	    try {
	        this.state = 133;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 113;
	            this.match(NovaScriptParser.T__1);
	            this.state = 114;
	            this.match(NovaScriptParser.ID);
	            this.state = 115;
	            this.match(NovaScriptParser.T__2);
	            this.state = 116;
	            this.funcao_conversao();
	            this.state = 117;
	            this.match(NovaScriptParser.T__4);
	            this.state = 118;
	            this.match(NovaScriptParser.T__5);
	            this.state = 119;
	            this.match(NovaScriptParser.STRING);
	            this.state = 120;
	            this.match(NovaScriptParser.T__6);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 122;
	            this.match(NovaScriptParser.T__1);
	            this.state = 123;
	            this.match(NovaScriptParser.ID);
	            this.state = 124;
	            this.match(NovaScriptParser.T__2);
	            this.state = 125;
	            this.match(NovaScriptParser.T__4);
	            this.state = 126;
	            this.match(NovaScriptParser.T__5);
	            this.state = 127;
	            this.match(NovaScriptParser.STRING);
	            this.state = 128;
	            this.match(NovaScriptParser.T__6);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 129;
	            this.match(NovaScriptParser.T__4);
	            this.state = 130;
	            this.match(NovaScriptParser.T__5);
	            this.state = 131;
	            this.match(NovaScriptParser.STRING);
	            this.state = 132;
	            this.match(NovaScriptParser.T__6);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcao_conversao() {
	    let localctx = new Funcao_conversaoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, NovaScriptParser.RULE_funcao_conversao);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 135;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1792) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	escrever() {
	    let localctx = new EscreverContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, NovaScriptParser.RULE_escrever);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 137;
	        this.match(NovaScriptParser.T__10);
	        this.state = 138;
	        this.match(NovaScriptParser.T__5);
	        this.state = 142;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 6)) & ~0x1f) === 0 && ((1 << (_la - 6)) & 4026531841) !== 0)) {
	            this.state = 139;
	            this.concatenacao_log();
	            this.state = 144;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 145;
	        this.match(NovaScriptParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	concatenacao_log() {
	    let localctx = new Concatenacao_logContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, NovaScriptParser.RULE_concatenacao_log);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 147;
	        this.elemento_log();
	        this.state = 152;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===12) {
	            this.state = 148;
	            this.match(NovaScriptParser.T__11);
	            this.state = 149;
	            this.elemento_log();
	            this.state = 154;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elemento_log() {
	    let localctx = new Elemento_logContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, NovaScriptParser.RULE_elemento_log);
	    try {
	        this.state = 157;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 155;
	            this.match(NovaScriptParser.STRING);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 156;
	            this.expressao();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expressao() {
	    let localctx = new ExpressaoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, NovaScriptParser.RULE_expressao);
	    try {
	        this.state = 161;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	        case 34:
	        case 35:
	        case 36:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 159;
	            this.expmat();
	            break;
	        case 37:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 160;
	            this.match(NovaScriptParser.STRING);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expmat() {
	    let localctx = new ExpmatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, NovaScriptParser.RULE_expmat);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 163;
	        this.termo();
	        this.state = 168;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 164;
	                _la = this._input.LA(1);
	                if(!(_la===12 || _la===13)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 165;
	                this.termo(); 
	            }
	            this.state = 170;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	termo() {
	    let localctx = new TermoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, NovaScriptParser.RULE_termo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 171;
	        this.fator();
	        this.state = 176;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===14 || _la===15) {
	            this.state = 172;
	            _la = this._input.LA(1);
	            if(!(_la===14 || _la===15)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 173;
	            this.fator();
	            this.state = 178;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fator() {
	    let localctx = new FatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, NovaScriptParser.RULE_fator);
	    try {
	        this.state = 184;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 34:
	        case 35:
	        case 36:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 179;
	            this.numero();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 180;
	            this.match(NovaScriptParser.T__5);
	            this.state = 181;
	            this.expmat();
	            this.state = 182;
	            this.match(NovaScriptParser.T__6);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, NovaScriptParser.RULE_numero);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 186;
	        _la = this._input.LA(1);
	        if(!(((((_la - 34)) & ~0x1f) === 0 && ((1 << (_la - 34)) & 7) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicional() {
	    let localctx = new CondicionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, NovaScriptParser.RULE_condicional);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 188;
	        this.se();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	se() {
	    let localctx = new SeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, NovaScriptParser.RULE_se);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 190;
	        this.match(NovaScriptParser.T__15);
	        this.state = 191;
	        this.match(NovaScriptParser.T__5);
	        this.state = 192;
	        this.condicao();
	        this.state = 193;
	        this.match(NovaScriptParser.T__6);
	        this.state = 194;
	        this.match(NovaScriptParser.T__16);
	        this.state = 195;
	        this.bloco();
	        this.state = 196;
	        this.match(NovaScriptParser.T__17);
	        this.state = 211;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        if(la_===1) {
	            this.state = 197;
	            this.match(NovaScriptParser.T__18);
	            this.state = 198;
	            this.match(NovaScriptParser.T__16);
	            this.state = 199;
	            this.bloco();
	            this.state = 200;
	            this.match(NovaScriptParser.T__17);

	        } else if(la_===2) {
	            this.state = 202;
	            this.match(NovaScriptParser.T__18);
	            this.state = 203;
	            this.match(NovaScriptParser.T__15);
	            this.state = 204;
	            this.match(NovaScriptParser.T__5);
	            this.state = 205;
	            this.condicao();
	            this.state = 206;
	            this.match(NovaScriptParser.T__6);
	            this.state = 207;
	            this.match(NovaScriptParser.T__16);
	            this.state = 208;
	            this.bloco();
	            this.state = 209;
	            this.match(NovaScriptParser.T__17);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	laco() {
	    let localctx = new LacoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, NovaScriptParser.RULE_laco);
	    var _la = 0;
	    try {
	        this.state = 246;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 20:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 213;
	            this.match(NovaScriptParser.T__19);
	            this.state = 214;
	            this.match(NovaScriptParser.T__16);
	            this.state = 215;
	            this.bloco();
	            this.state = 216;
	            this.match(NovaScriptParser.T__17);
	            this.state = 217;
	            this.match(NovaScriptParser.T__20);
	            this.state = 218;
	            this.match(NovaScriptParser.T__5);
	            this.state = 219;
	            this.condicao();
	            this.state = 220;
	            this.match(NovaScriptParser.T__6);
	            this.state = 222;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===1) {
	                this.state = 221;
	                this.match(NovaScriptParser.T__0);
	            }

	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 224;
	            this.match(NovaScriptParser.T__21);
	            this.state = 225;
	            this.match(NovaScriptParser.T__5);
	            this.state = 226;
	            this.inicio();
	            this.state = 227;
	            this.match(NovaScriptParser.T__0);
	            this.state = 228;
	            this.condicao();
	            this.state = 229;
	            this.match(NovaScriptParser.T__0);
	            this.state = 231;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===34) {
	                this.state = 230;
	                this.final_();
	            }

	            this.state = 233;
	            this.match(NovaScriptParser.T__6);
	            this.state = 234;
	            this.match(NovaScriptParser.T__16);
	            this.state = 235;
	            this.bloco();
	            this.state = 236;
	            this.match(NovaScriptParser.T__17);
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 238;
	            this.match(NovaScriptParser.T__20);
	            this.state = 239;
	            this.match(NovaScriptParser.T__5);
	            this.state = 240;
	            this.condicao();
	            this.state = 241;
	            this.match(NovaScriptParser.T__6);
	            this.state = 242;
	            this.match(NovaScriptParser.T__16);
	            this.state = 243;
	            this.bloco();
	            this.state = 244;
	            this.match(NovaScriptParser.T__17);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	inicio() {
	    let localctx = new InicioContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, NovaScriptParser.RULE_inicio);
	    try {
	        this.state = 255;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 248;
	            this.match(NovaScriptParser.T__1);
	            this.state = 249;
	            this.match(NovaScriptParser.ID);
	            this.state = 250;
	            this.match(NovaScriptParser.T__2);
	            this.state = 251;
	            this.expressao();
	            break;
	        case 34:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 252;
	            this.match(NovaScriptParser.ID);
	            this.state = 253;
	            this.match(NovaScriptParser.T__2);
	            this.state = 254;
	            this.expressao();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	final_() {
	    let localctx = new FinalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, NovaScriptParser.RULE_final);
	    var _la = 0;
	    try {
	        this.state = 262;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 257;
	            this.match(NovaScriptParser.ID);
	            this.state = 258;
	            this.match(NovaScriptParser.T__2);
	            this.state = 259;
	            this.expressao();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 260;
	            this.match(NovaScriptParser.ID);
	            this.state = 261;
	            _la = this._input.LA(1);
	            if(!(_la===23 || _la===24)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bloco() {
	    let localctx = new BlocoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, NovaScriptParser.RULE_bloco);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 267;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 7407652) !== 0) || _la===34) {
	            this.state = 264;
	            this.statement();
	            this.state = 269;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atribuicao() {
	    let localctx = new AtribuicaoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, NovaScriptParser.RULE_atribuicao);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 270;
	        this.match(NovaScriptParser.ID);
	        this.state = 275;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.state = 271;
	            this.match(NovaScriptParser.T__2);
	            this.state = 272;
	            this.expressao();
	            break;
	        case 23:
	            this.state = 273;
	            this.match(NovaScriptParser.T__22);
	            break;
	        case 24:
	            this.state = 274;
	            this.match(NovaScriptParser.T__23);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicao() {
	    let localctx = new CondicaoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, NovaScriptParser.RULE_condicao);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 277;
	        this.condicao_or();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicao_or() {
	    let localctx = new Condicao_orContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, NovaScriptParser.RULE_condicao_or);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 279;
	        this.condicao_and();
	        this.state = 284;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===25) {
	            this.state = 280;
	            this.match(NovaScriptParser.T__24);
	            this.state = 281;
	            this.condicao_and();
	            this.state = 286;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicao_and() {
	    let localctx = new Condicao_andContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, NovaScriptParser.RULE_condicao_and);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 287;
	        this.condicao_not();
	        this.state = 292;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===26) {
	            this.state = 288;
	            this.match(NovaScriptParser.T__25);
	            this.state = 289;
	            this.condicao_not();
	            this.state = 294;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicao_not() {
	    let localctx = new Condicao_notContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, NovaScriptParser.RULE_condicao_not);
	    try {
	        this.state = 298;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 27:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 295;
	            this.match(NovaScriptParser.T__26);
	            this.state = 296;
	            this.condicao_not();
	            break;
	        case 6:
	        case 34:
	        case 35:
	        case 36:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 297;
	            this.condicao_par();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicao_par() {
	    let localctx = new Condicao_parContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, NovaScriptParser.RULE_condicao_par);
	    var _la = 0;
	    try {
	        this.state = 308;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 300;
	            this.match(NovaScriptParser.T__5);
	            this.state = 301;
	            this.condicao();
	            this.state = 302;
	            this.match(NovaScriptParser.T__6);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 304;
	            this.expmat();
	            this.state = 305;
	            _la = this._input.LA(1);
	            if(!(((((_la - 28)) & ~0x1f) === 0 && ((1 << (_la - 28)) & 63) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 306;
	            this.expmat();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

NovaScriptParser.EOF = antlr4.Token.EOF;
NovaScriptParser.T__0 = 1;
NovaScriptParser.T__1 = 2;
NovaScriptParser.T__2 = 3;
NovaScriptParser.T__3 = 4;
NovaScriptParser.T__4 = 5;
NovaScriptParser.T__5 = 6;
NovaScriptParser.T__6 = 7;
NovaScriptParser.T__7 = 8;
NovaScriptParser.T__8 = 9;
NovaScriptParser.T__9 = 10;
NovaScriptParser.T__10 = 11;
NovaScriptParser.T__11 = 12;
NovaScriptParser.T__12 = 13;
NovaScriptParser.T__13 = 14;
NovaScriptParser.T__14 = 15;
NovaScriptParser.T__15 = 16;
NovaScriptParser.T__16 = 17;
NovaScriptParser.T__17 = 18;
NovaScriptParser.T__18 = 19;
NovaScriptParser.T__19 = 20;
NovaScriptParser.T__20 = 21;
NovaScriptParser.T__21 = 22;
NovaScriptParser.T__22 = 23;
NovaScriptParser.T__23 = 24;
NovaScriptParser.T__24 = 25;
NovaScriptParser.T__25 = 26;
NovaScriptParser.T__26 = 27;
NovaScriptParser.T__27 = 28;
NovaScriptParser.T__28 = 29;
NovaScriptParser.T__29 = 30;
NovaScriptParser.T__30 = 31;
NovaScriptParser.T__31 = 32;
NovaScriptParser.T__32 = 33;
NovaScriptParser.ID = 34;
NovaScriptParser.INT = 35;
NovaScriptParser.DECIMAL = 36;
NovaScriptParser.STRING = 37;
NovaScriptParser.WS = 38;

NovaScriptParser.RULE_programa = 0;
NovaScriptParser.RULE_statement = 1;
NovaScriptParser.RULE_lista = 2;
NovaScriptParser.RULE_declaracao = 3;
NovaScriptParser.RULE_lista_atrib = 4;
NovaScriptParser.RULE_lista_id = 5;
NovaScriptParser.RULE_ler = 6;
NovaScriptParser.RULE_funcao_conversao = 7;
NovaScriptParser.RULE_escrever = 8;
NovaScriptParser.RULE_concatenacao_log = 9;
NovaScriptParser.RULE_elemento_log = 10;
NovaScriptParser.RULE_expressao = 11;
NovaScriptParser.RULE_expmat = 12;
NovaScriptParser.RULE_termo = 13;
NovaScriptParser.RULE_fator = 14;
NovaScriptParser.RULE_numero = 15;
NovaScriptParser.RULE_condicional = 16;
NovaScriptParser.RULE_se = 17;
NovaScriptParser.RULE_laco = 18;
NovaScriptParser.RULE_inicio = 19;
NovaScriptParser.RULE_final = 20;
NovaScriptParser.RULE_bloco = 21;
NovaScriptParser.RULE_atribuicao = 22;
NovaScriptParser.RULE_condicao = 23;
NovaScriptParser.RULE_condicao_or = 24;
NovaScriptParser.RULE_condicao_and = 25;
NovaScriptParser.RULE_condicao_not = 26;
NovaScriptParser.RULE_condicao_par = 27;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NovaScriptParser.RULE_programa;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NovaScriptVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NovaScriptParser.RULE_statement;
    }

	declaracao() {
	    return this.getTypedRuleContext(DeclaracaoContext,0);
	};

	escrever() {
	    return this.getTypedRuleContext(EscreverContext,0);
	};

	ler() {
	    return this.getTypedRuleContext(LerContext,0);
	};

	atribuicao() {
	    return this.getTypedRuleContext(AtribuicaoContext,0);
	};

	condicional() {
	    return this.getTypedRuleContext(CondicionalContext,0);
	};

	laco() {
	    return this.getTypedRuleContext(LacoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.exitStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NovaScriptVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ListaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NovaScriptParser.RULE_lista;
    }

	declaracao() {
	    return this.getTypedRuleContext(DeclaracaoContext,0);
	};

	escrever() {
	    return this.getTypedRuleContext(EscreverContext,0);
	};

	ler() {
	    return this.getTypedRuleContext(LerContext,0);
	};

	condicional() {
	    return this.getTypedRuleContext(CondicionalContext,0);
	};

	laco() {
	    return this.getTypedRuleContext(LacoContext,0);
	};

	atribuicao() {
	    return this.getTypedRuleContext(AtribuicaoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.enterLista(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.exitLista(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NovaScriptVisitor ) {
	        return visitor.visitLista(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclaracaoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NovaScriptParser.RULE_declaracao;
    }

	lista_atrib() {
	    return this.getTypedRuleContext(Lista_atribContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.enterDeclaracao(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.exitDeclaracao(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NovaScriptVisitor ) {
	        return visitor.visitDeclaracao(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Lista_atribContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NovaScriptParser.RULE_lista_atrib;
    }

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(NovaScriptParser.ID);
	    } else {
	        return this.getToken(NovaScriptParser.ID, i);
	    }
	};


	expressao = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressaoContext);
	    } else {
	        return this.getTypedRuleContext(ExpressaoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.enterLista_atrib(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.exitLista_atrib(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NovaScriptVisitor ) {
	        return visitor.visitLista_atrib(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Lista_idContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NovaScriptParser.RULE_lista_id;
    }

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(NovaScriptParser.ID);
	    } else {
	        return this.getToken(NovaScriptParser.ID, i);
	    }
	};


	expressao = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressaoContext);
	    } else {
	        return this.getTypedRuleContext(ExpressaoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.enterLista_id(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.exitLista_id(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NovaScriptVisitor ) {
	        return visitor.visitLista_id(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NovaScriptParser.RULE_ler;
    }

	ID() {
	    return this.getToken(NovaScriptParser.ID, 0);
	};

	funcao_conversao() {
	    return this.getTypedRuleContext(Funcao_conversaoContext,0);
	};

	STRING() {
	    return this.getToken(NovaScriptParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.enterLer(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.exitLer(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NovaScriptVisitor ) {
	        return visitor.visitLer(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Funcao_conversaoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NovaScriptParser.RULE_funcao_conversao;
    }


	enterRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.enterFuncao_conversao(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.exitFuncao_conversao(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NovaScriptVisitor ) {
	        return visitor.visitFuncao_conversao(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EscreverContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NovaScriptParser.RULE_escrever;
    }

	concatenacao_log = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Concatenacao_logContext);
	    } else {
	        return this.getTypedRuleContext(Concatenacao_logContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.enterEscrever(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.exitEscrever(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NovaScriptVisitor ) {
	        return visitor.visitEscrever(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Concatenacao_logContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NovaScriptParser.RULE_concatenacao_log;
    }

	elemento_log = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Elemento_logContext);
	    } else {
	        return this.getTypedRuleContext(Elemento_logContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.enterConcatenacao_log(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.exitConcatenacao_log(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NovaScriptVisitor ) {
	        return visitor.visitConcatenacao_log(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Elemento_logContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NovaScriptParser.RULE_elemento_log;
    }

	STRING() {
	    return this.getToken(NovaScriptParser.STRING, 0);
	};

	expressao() {
	    return this.getTypedRuleContext(ExpressaoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.enterElemento_log(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.exitElemento_log(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NovaScriptVisitor ) {
	        return visitor.visitElemento_log(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressaoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NovaScriptParser.RULE_expressao;
    }

	expmat() {
	    return this.getTypedRuleContext(ExpmatContext,0);
	};

	STRING() {
	    return this.getToken(NovaScriptParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.enterExpressao(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.exitExpressao(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NovaScriptVisitor ) {
	        return visitor.visitExpressao(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpmatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NovaScriptParser.RULE_expmat;
    }

	termo = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermoContext);
	    } else {
	        return this.getTypedRuleContext(TermoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.enterExpmat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.exitExpmat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NovaScriptVisitor ) {
	        return visitor.visitExpmat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TermoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NovaScriptParser.RULE_termo;
    }

	fator = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FatorContext);
	    } else {
	        return this.getTypedRuleContext(FatorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.enterTermo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.exitTermo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NovaScriptVisitor ) {
	        return visitor.visitTermo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NovaScriptParser.RULE_fator;
    }

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	expmat() {
	    return this.getTypedRuleContext(ExpmatContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.enterFator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.exitFator(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NovaScriptVisitor ) {
	        return visitor.visitFator(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NovaScriptParser.RULE_numero;
    }

	INT() {
	    return this.getToken(NovaScriptParser.INT, 0);
	};

	DECIMAL() {
	    return this.getToken(NovaScriptParser.DECIMAL, 0);
	};

	ID() {
	    return this.getToken(NovaScriptParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.exitNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NovaScriptVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NovaScriptParser.RULE_condicional;
    }

	se() {
	    return this.getTypedRuleContext(SeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.enterCondicional(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.exitCondicional(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NovaScriptVisitor ) {
	        return visitor.visitCondicional(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NovaScriptParser.RULE_se;
    }

	condicao = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CondicaoContext);
	    } else {
	        return this.getTypedRuleContext(CondicaoContext,i);
	    }
	};

	bloco = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BlocoContext);
	    } else {
	        return this.getTypedRuleContext(BlocoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.enterSe(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.exitSe(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NovaScriptVisitor ) {
	        return visitor.visitSe(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LacoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NovaScriptParser.RULE_laco;
    }

	bloco() {
	    return this.getTypedRuleContext(BlocoContext,0);
	};

	condicao() {
	    return this.getTypedRuleContext(CondicaoContext,0);
	};

	inicio() {
	    return this.getTypedRuleContext(InicioContext,0);
	};

	final_() {
	    return this.getTypedRuleContext(FinalContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.enterLaco(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.exitLaco(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NovaScriptVisitor ) {
	        return visitor.visitLaco(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InicioContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NovaScriptParser.RULE_inicio;
    }

	ID() {
	    return this.getToken(NovaScriptParser.ID, 0);
	};

	expressao() {
	    return this.getTypedRuleContext(ExpressaoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.enterInicio(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.exitInicio(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NovaScriptVisitor ) {
	        return visitor.visitInicio(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FinalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NovaScriptParser.RULE_final;
    }

	ID() {
	    return this.getToken(NovaScriptParser.ID, 0);
	};

	expressao() {
	    return this.getTypedRuleContext(ExpressaoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.enterFinal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.exitFinal(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NovaScriptVisitor ) {
	        return visitor.visitFinal(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlocoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NovaScriptParser.RULE_bloco;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.enterBloco(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.exitBloco(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NovaScriptVisitor ) {
	        return visitor.visitBloco(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AtribuicaoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NovaScriptParser.RULE_atribuicao;
    }

	ID() {
	    return this.getToken(NovaScriptParser.ID, 0);
	};

	expressao() {
	    return this.getTypedRuleContext(ExpressaoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.enterAtribuicao(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.exitAtribuicao(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NovaScriptVisitor ) {
	        return visitor.visitAtribuicao(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicaoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NovaScriptParser.RULE_condicao;
    }

	condicao_or() {
	    return this.getTypedRuleContext(Condicao_orContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.enterCondicao(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.exitCondicao(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NovaScriptVisitor ) {
	        return visitor.visitCondicao(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Condicao_orContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NovaScriptParser.RULE_condicao_or;
    }

	condicao_and = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Condicao_andContext);
	    } else {
	        return this.getTypedRuleContext(Condicao_andContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.enterCondicao_or(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.exitCondicao_or(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NovaScriptVisitor ) {
	        return visitor.visitCondicao_or(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Condicao_andContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NovaScriptParser.RULE_condicao_and;
    }

	condicao_not = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Condicao_notContext);
	    } else {
	        return this.getTypedRuleContext(Condicao_notContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.enterCondicao_and(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.exitCondicao_and(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NovaScriptVisitor ) {
	        return visitor.visitCondicao_and(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Condicao_notContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NovaScriptParser.RULE_condicao_not;
    }

	condicao_not() {
	    return this.getTypedRuleContext(Condicao_notContext,0);
	};

	condicao_par() {
	    return this.getTypedRuleContext(Condicao_parContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.enterCondicao_not(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.exitCondicao_not(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NovaScriptVisitor ) {
	        return visitor.visitCondicao_not(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Condicao_parContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NovaScriptParser.RULE_condicao_par;
    }

	condicao() {
	    return this.getTypedRuleContext(CondicaoContext,0);
	};

	expmat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpmatContext);
	    } else {
	        return this.getTypedRuleContext(ExpmatContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.enterCondicao_par(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.exitCondicao_par(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NovaScriptVisitor ) {
	        return visitor.visitCondicao_par(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




NovaScriptParser.ProgramaContext = ProgramaContext; 
NovaScriptParser.StatementContext = StatementContext; 
NovaScriptParser.ListaContext = ListaContext; 
NovaScriptParser.DeclaracaoContext = DeclaracaoContext; 
NovaScriptParser.Lista_atribContext = Lista_atribContext; 
NovaScriptParser.Lista_idContext = Lista_idContext; 
NovaScriptParser.LerContext = LerContext; 
NovaScriptParser.Funcao_conversaoContext = Funcao_conversaoContext; 
NovaScriptParser.EscreverContext = EscreverContext; 
NovaScriptParser.Concatenacao_logContext = Concatenacao_logContext; 
NovaScriptParser.Elemento_logContext = Elemento_logContext; 
NovaScriptParser.ExpressaoContext = ExpressaoContext; 
NovaScriptParser.ExpmatContext = ExpmatContext; 
NovaScriptParser.TermoContext = TermoContext; 
NovaScriptParser.FatorContext = FatorContext; 
NovaScriptParser.NumeroContext = NumeroContext; 
NovaScriptParser.CondicionalContext = CondicionalContext; 
NovaScriptParser.SeContext = SeContext; 
NovaScriptParser.LacoContext = LacoContext; 
NovaScriptParser.InicioContext = InicioContext; 
NovaScriptParser.FinalContext = FinalContext; 
NovaScriptParser.BlocoContext = BlocoContext; 
NovaScriptParser.AtribuicaoContext = AtribuicaoContext; 
NovaScriptParser.CondicaoContext = CondicaoContext; 
NovaScriptParser.Condicao_orContext = Condicao_orContext; 
NovaScriptParser.Condicao_andContext = Condicao_andContext; 
NovaScriptParser.Condicao_notContext = Condicao_notContext; 
NovaScriptParser.Condicao_parContext = Condicao_parContext; 
