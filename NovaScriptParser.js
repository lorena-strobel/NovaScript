// Generated from NovaScript.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import NovaScriptListener from './NovaScriptListener.js';
import NovaScriptVisitor from './NovaScriptVisitor.js';

const serializedATN = [4,1,39,317,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,1,0,5,0,60,8,0,10,0,12,0,63,9,0,1,1,1,1,1,1,1,1,1,1,3,1,70,
8,1,1,1,3,1,73,8,1,1,1,1,1,3,1,77,8,1,1,2,1,2,1,3,1,3,1,3,1,4,1,4,1,4,3,
4,87,8,4,1,4,1,4,1,4,1,4,3,4,93,8,4,5,4,95,8,4,10,4,12,4,98,9,4,1,5,1,5,
1,5,1,5,5,5,104,8,5,10,5,12,5,107,9,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,
6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,131,8,6,1,7,1,
7,1,8,1,8,1,8,5,8,138,8,8,10,8,12,8,141,9,8,1,8,1,8,1,9,1,9,1,9,5,9,148,
8,9,10,9,12,9,151,9,9,1,10,1,10,3,10,155,8,10,1,11,1,11,3,11,159,8,11,1,
12,1,12,1,12,5,12,164,8,12,10,12,12,12,167,9,12,1,13,1,13,1,13,5,13,172,
8,13,10,13,12,13,175,9,13,1,14,3,14,178,8,14,1,14,1,14,1,15,1,15,1,15,1,
15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,3,15,196,8,15,1,16,
1,16,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,
18,1,18,3,18,215,8,18,3,18,217,8,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,
19,1,19,3,19,228,8,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,3,19,237,8,19,1,
19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,3,19,252,
8,19,1,20,1,20,1,20,1,20,1,20,1,20,1,20,3,20,261,8,20,1,21,1,21,1,21,1,21,
1,21,3,21,268,8,21,1,22,5,22,271,8,22,10,22,12,22,274,9,22,1,23,1,23,1,23,
1,23,1,23,3,23,281,8,23,1,24,1,24,1,25,1,25,1,25,5,25,288,8,25,10,25,12,
25,291,9,25,1,26,1,26,1,26,5,26,296,8,26,10,26,12,26,299,9,26,1,27,1,27,
1,27,3,27,304,8,27,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,3,28,315,
8,28,1,28,0,0,29,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,
40,42,44,46,48,50,52,54,56,0,7,1,0,8,10,1,0,12,13,1,0,14,16,2,0,12,13,17,
17,1,0,35,37,1,0,25,26,1,0,29,34,327,0,61,1,0,0,0,2,76,1,0,0,0,4,78,1,0,
0,0,6,80,1,0,0,0,8,83,1,0,0,0,10,105,1,0,0,0,12,130,1,0,0,0,14,132,1,0,0,
0,16,134,1,0,0,0,18,144,1,0,0,0,20,154,1,0,0,0,22,158,1,0,0,0,24,160,1,0,
0,0,26,168,1,0,0,0,28,177,1,0,0,0,30,195,1,0,0,0,32,197,1,0,0,0,34,199,1,
0,0,0,36,201,1,0,0,0,38,251,1,0,0,0,40,260,1,0,0,0,42,267,1,0,0,0,44,272,
1,0,0,0,46,275,1,0,0,0,48,282,1,0,0,0,50,284,1,0,0,0,52,292,1,0,0,0,54,303,
1,0,0,0,56,314,1,0,0,0,58,60,3,2,1,0,59,58,1,0,0,0,60,63,1,0,0,0,61,59,1,
0,0,0,61,62,1,0,0,0,62,1,1,0,0,0,63,61,1,0,0,0,64,70,3,6,3,0,65,70,3,4,2,
0,66,70,3,16,8,0,67,70,3,12,6,0,68,70,3,46,23,0,69,64,1,0,0,0,69,65,1,0,
0,0,69,66,1,0,0,0,69,67,1,0,0,0,69,68,1,0,0,0,70,72,1,0,0,0,71,73,5,1,0,
0,72,71,1,0,0,0,72,73,1,0,0,0,73,77,1,0,0,0,74,77,3,34,17,0,75,77,3,38,19,
0,76,69,1,0,0,0,76,74,1,0,0,0,76,75,1,0,0,0,77,3,1,0,0,0,78,79,3,46,23,0,
79,5,1,0,0,0,80,81,5,2,0,0,81,82,3,8,4,0,82,7,1,0,0,0,83,86,5,35,0,0,84,
85,5,3,0,0,85,87,3,22,11,0,86,84,1,0,0,0,86,87,1,0,0,0,87,96,1,0,0,0,88,
89,5,4,0,0,89,92,5,35,0,0,90,91,5,3,0,0,91,93,3,22,11,0,92,90,1,0,0,0,92,
93,1,0,0,0,93,95,1,0,0,0,94,88,1,0,0,0,95,98,1,0,0,0,96,94,1,0,0,0,96,97,
1,0,0,0,97,9,1,0,0,0,98,96,1,0,0,0,99,100,5,4,0,0,100,101,5,35,0,0,101,102,
5,3,0,0,102,104,3,22,11,0,103,99,1,0,0,0,104,107,1,0,0,0,105,103,1,0,0,0,
105,106,1,0,0,0,106,108,1,0,0,0,107,105,1,0,0,0,108,109,5,1,0,0,109,11,1,
0,0,0,110,111,5,2,0,0,111,112,5,35,0,0,112,113,5,3,0,0,113,114,3,14,7,0,
114,115,5,5,0,0,115,116,5,6,0,0,116,117,5,38,0,0,117,118,5,7,0,0,118,131,
1,0,0,0,119,120,5,2,0,0,120,121,5,35,0,0,121,122,5,3,0,0,122,123,5,5,0,0,
123,124,5,6,0,0,124,125,5,38,0,0,125,131,5,7,0,0,126,127,5,5,0,0,127,128,
5,6,0,0,128,129,5,38,0,0,129,131,5,7,0,0,130,110,1,0,0,0,130,119,1,0,0,0,
130,126,1,0,0,0,131,13,1,0,0,0,132,133,7,0,0,0,133,15,1,0,0,0,134,135,5,
11,0,0,135,139,5,6,0,0,136,138,3,18,9,0,137,136,1,0,0,0,138,141,1,0,0,0,
139,137,1,0,0,0,139,140,1,0,0,0,140,142,1,0,0,0,141,139,1,0,0,0,142,143,
5,7,0,0,143,17,1,0,0,0,144,149,3,20,10,0,145,146,5,12,0,0,146,148,3,20,10,
0,147,145,1,0,0,0,148,151,1,0,0,0,149,147,1,0,0,0,149,150,1,0,0,0,150,19,
1,0,0,0,151,149,1,0,0,0,152,155,5,38,0,0,153,155,3,22,11,0,154,152,1,0,0,
0,154,153,1,0,0,0,155,21,1,0,0,0,156,159,3,24,12,0,157,159,5,38,0,0,158,
156,1,0,0,0,158,157,1,0,0,0,159,23,1,0,0,0,160,165,3,26,13,0,161,162,7,1,
0,0,162,164,3,26,13,0,163,161,1,0,0,0,164,167,1,0,0,0,165,163,1,0,0,0,165,
166,1,0,0,0,166,25,1,0,0,0,167,165,1,0,0,0,168,173,3,28,14,0,169,170,7,2,
0,0,170,172,3,28,14,0,171,169,1,0,0,0,172,175,1,0,0,0,173,171,1,0,0,0,173,
174,1,0,0,0,174,27,1,0,0,0,175,173,1,0,0,0,176,178,7,3,0,0,177,176,1,0,0,
0,177,178,1,0,0,0,178,179,1,0,0,0,179,180,3,30,15,0,180,29,1,0,0,0,181,196,
3,32,16,0,182,183,5,6,0,0,183,184,3,24,12,0,184,185,5,7,0,0,185,196,1,0,
0,0,186,187,3,14,7,0,187,188,5,6,0,0,188,189,3,30,15,0,189,190,5,7,0,0,190,
196,1,0,0,0,191,192,5,5,0,0,192,193,5,6,0,0,193,194,5,38,0,0,194,196,5,7,
0,0,195,181,1,0,0,0,195,182,1,0,0,0,195,186,1,0,0,0,195,191,1,0,0,0,196,
31,1,0,0,0,197,198,7,4,0,0,198,33,1,0,0,0,199,200,3,36,18,0,200,35,1,0,0,
0,201,202,5,18,0,0,202,203,5,6,0,0,203,204,3,48,24,0,204,205,5,7,0,0,205,
206,5,19,0,0,206,207,3,44,22,0,207,216,5,20,0,0,208,214,5,21,0,0,209,215,
3,36,18,0,210,211,5,19,0,0,211,212,3,44,22,0,212,213,5,20,0,0,213,215,1,
0,0,0,214,209,1,0,0,0,214,210,1,0,0,0,215,217,1,0,0,0,216,208,1,0,0,0,216,
217,1,0,0,0,217,37,1,0,0,0,218,219,5,22,0,0,219,220,5,19,0,0,220,221,3,44,
22,0,221,222,5,20,0,0,222,223,5,23,0,0,223,224,5,6,0,0,224,225,3,48,24,0,
225,227,5,7,0,0,226,228,5,1,0,0,227,226,1,0,0,0,227,228,1,0,0,0,228,252,
1,0,0,0,229,230,5,24,0,0,230,231,5,6,0,0,231,232,3,40,20,0,232,233,5,1,0,
0,233,234,3,48,24,0,234,236,5,1,0,0,235,237,3,42,21,0,236,235,1,0,0,0,236,
237,1,0,0,0,237,238,1,0,0,0,238,239,5,7,0,0,239,240,5,19,0,0,240,241,3,44,
22,0,241,242,5,20,0,0,242,252,1,0,0,0,243,244,5,23,0,0,244,245,5,6,0,0,245,
246,3,48,24,0,246,247,5,7,0,0,247,248,5,19,0,0,248,249,3,44,22,0,249,250,
5,20,0,0,250,252,1,0,0,0,251,218,1,0,0,0,251,229,1,0,0,0,251,243,1,0,0,0,
252,39,1,0,0,0,253,254,5,2,0,0,254,255,5,35,0,0,255,256,5,3,0,0,256,261,
3,22,11,0,257,258,5,35,0,0,258,259,5,3,0,0,259,261,3,22,11,0,260,253,1,0,
0,0,260,257,1,0,0,0,261,41,1,0,0,0,262,263,5,35,0,0,263,264,5,3,0,0,264,
268,3,22,11,0,265,266,5,35,0,0,266,268,7,5,0,0,267,262,1,0,0,0,267,265,1,
0,0,0,268,43,1,0,0,0,269,271,3,2,1,0,270,269,1,0,0,0,271,274,1,0,0,0,272,
270,1,0,0,0,272,273,1,0,0,0,273,45,1,0,0,0,274,272,1,0,0,0,275,280,5,35,
0,0,276,277,5,3,0,0,277,281,3,22,11,0,278,281,5,25,0,0,279,281,5,26,0,0,
280,276,1,0,0,0,280,278,1,0,0,0,280,279,1,0,0,0,281,47,1,0,0,0,282,283,3,
50,25,0,283,49,1,0,0,0,284,289,3,52,26,0,285,286,5,27,0,0,286,288,3,52,26,
0,287,285,1,0,0,0,288,291,1,0,0,0,289,287,1,0,0,0,289,290,1,0,0,0,290,51,
1,0,0,0,291,289,1,0,0,0,292,297,3,54,27,0,293,294,5,28,0,0,294,296,3,54,
27,0,295,293,1,0,0,0,296,299,1,0,0,0,297,295,1,0,0,0,297,298,1,0,0,0,298,
53,1,0,0,0,299,297,1,0,0,0,300,301,5,17,0,0,301,304,3,54,27,0,302,304,3,
56,28,0,303,300,1,0,0,0,303,302,1,0,0,0,304,55,1,0,0,0,305,306,5,6,0,0,306,
307,3,48,24,0,307,308,5,7,0,0,308,315,1,0,0,0,309,310,3,24,12,0,310,311,
7,6,0,0,311,312,3,24,12,0,312,315,1,0,0,0,313,315,3,24,12,0,314,305,1,0,
0,0,314,309,1,0,0,0,314,313,1,0,0,0,315,57,1,0,0,0,30,61,69,72,76,86,92,
96,105,130,139,149,154,158,165,173,177,195,214,216,227,236,251,260,267,272,
280,289,297,303,314];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class NovaScriptParser extends antlr4.Parser {

    static grammarFileName = "NovaScript.g4";
    static literalNames = [ null, "';'", "'let'", "'='", "','", "'prompt'", 
                            "'('", "')'", "'Number'", "'parseInt'", "'parseFloat'", 
                            "'console.log'", "'+'", "'-'", "'*'", "'/'", 
                            "'%'", "'!'", "'if'", "'{'", "'}'", "'else'", 
                            "'do'", "'while'", "'for'", "'++'", "'--'", 
                            "'||'", "'&&'", "'=='", "'!='", "'>'", "'<'", 
                            "'>='", "'<='" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, "ID", "INT", "DECIMAL", "STRING", 
                             "WS" ];
    static ruleNames = [ "programa", "statement", "expressionStatement", 
                         "declaracao", "lista_atrib", "lista_id", "ler", 
                         "funcao_conversao", "escrever", "concatenacao_log", 
                         "elemento_log", "expressao", "expmat", "termo", 
                         "fator", "atomo", "numero", "condicional", "se", 
                         "laco", "inicio", "final", "bloco", "atribuicao", 
                         "condicao", "condicao_or", "condicao_and", "condicao_not", 
                         "condicao_par" ];

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
	        this.state = 61;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 29624356) !== 0) || _la===35) {
	            this.state = 58;
	            this.statement();
	            this.state = 63;
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
	        this.state = 76;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	        case 5:
	        case 11:
	        case 35:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 69;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 64;
	                this.declaracao();
	                break;

	            case 2:
	                this.state = 65;
	                this.expressionStatement();
	                break;

	            case 3:
	                this.state = 66;
	                this.escrever();
	                break;

	            case 4:
	                this.state = 67;
	                this.ler();
	                break;

	            case 5:
	                this.state = 68;
	                this.atribuicao();
	                break;

	            }
	            this.state = 72;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===1) {
	                this.state = 71;
	                this.match(NovaScriptParser.T__0);
	            }

	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 74;
	            this.condicional();
	            break;
	        case 22:
	        case 23:
	        case 24:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 75;
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



	expressionStatement() {
	    let localctx = new ExpressionStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, NovaScriptParser.RULE_expressionStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.atribuicao();
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
	        this.state = 80;
	        this.match(NovaScriptParser.T__1);
	        this.state = 81;
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
	        this.state = 83;
	        this.match(NovaScriptParser.ID);
	        this.state = 86;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 84;
	            this.match(NovaScriptParser.T__2);
	            this.state = 85;
	            this.expressao();
	        }

	        this.state = 96;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 88;
	            this.match(NovaScriptParser.T__3);
	            this.state = 89;
	            this.match(NovaScriptParser.ID);
	            this.state = 92;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===3) {
	                this.state = 90;
	                this.match(NovaScriptParser.T__2);
	                this.state = 91;
	                this.expressao();
	            }

	            this.state = 98;
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
	        this.state = 105;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 99;
	            this.match(NovaScriptParser.T__3);
	            this.state = 100;
	            this.match(NovaScriptParser.ID);
	            this.state = 101;
	            this.match(NovaScriptParser.T__2);
	            this.state = 102;
	            this.expressao();
	            this.state = 107;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 108;
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
	        this.state = 130;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 110;
	            this.match(NovaScriptParser.T__1);
	            this.state = 111;
	            this.match(NovaScriptParser.ID);
	            this.state = 112;
	            this.match(NovaScriptParser.T__2);
	            this.state = 113;
	            this.funcao_conversao();
	            this.state = 114;
	            this.match(NovaScriptParser.T__4);
	            this.state = 115;
	            this.match(NovaScriptParser.T__5);
	            this.state = 116;
	            this.match(NovaScriptParser.STRING);
	            this.state = 117;
	            this.match(NovaScriptParser.T__6);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 119;
	            this.match(NovaScriptParser.T__1);
	            this.state = 120;
	            this.match(NovaScriptParser.ID);
	            this.state = 121;
	            this.match(NovaScriptParser.T__2);
	            this.state = 122;
	            this.match(NovaScriptParser.T__4);
	            this.state = 123;
	            this.match(NovaScriptParser.T__5);
	            this.state = 124;
	            this.match(NovaScriptParser.STRING);
	            this.state = 125;
	            this.match(NovaScriptParser.T__6);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 126;
	            this.match(NovaScriptParser.T__4);
	            this.state = 127;
	            this.match(NovaScriptParser.T__5);
	            this.state = 128;
	            this.match(NovaScriptParser.STRING);
	            this.state = 129;
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
	        this.state = 132;
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
	        this.state = 134;
	        this.match(NovaScriptParser.T__10);
	        this.state = 135;
	        this.match(NovaScriptParser.T__5);
	        this.state = 139;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 145248) !== 0) || ((((_la - 35)) & ~0x1f) === 0 && ((1 << (_la - 35)) & 15) !== 0)) {
	            this.state = 136;
	            this.concatenacao_log();
	            this.state = 141;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 142;
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
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 144;
	        this.elemento_log();
	        this.state = 149;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 145;
	                this.match(NovaScriptParser.T__11);
	                this.state = 146;
	                this.elemento_log(); 
	            }
	            this.state = 151;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
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
	        this.state = 154;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 152;
	            this.match(NovaScriptParser.STRING);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 153;
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
	        this.state = 158;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	        case 6:
	        case 8:
	        case 9:
	        case 10:
	        case 12:
	        case 13:
	        case 17:
	        case 35:
	        case 36:
	        case 37:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 156;
	            this.expmat();
	            break;
	        case 38:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 157;
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
	        this.state = 160;
	        this.termo();
	        this.state = 165;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 161;
	                _la = this._input.LA(1);
	                if(!(_la===12 || _la===13)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 162;
	                this.termo(); 
	            }
	            this.state = 167;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
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
	        this.state = 168;
	        this.fator();
	        this.state = 173;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 114688) !== 0)) {
	            this.state = 169;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 114688) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 170;
	            this.fator();
	            this.state = 175;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 177;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 143360) !== 0)) {
	            this.state = 176;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 143360) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 179;
	        this.atomo();
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



	atomo() {
	    let localctx = new AtomoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, NovaScriptParser.RULE_atomo);
	    try {
	        this.state = 195;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 35:
	        case 36:
	        case 37:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 181;
	            this.numero();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 182;
	            this.match(NovaScriptParser.T__5);
	            this.state = 183;
	            this.expmat();
	            this.state = 184;
	            this.match(NovaScriptParser.T__6);
	            break;
	        case 8:
	        case 9:
	        case 10:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 186;
	            this.funcao_conversao();
	            this.state = 187;
	            this.match(NovaScriptParser.T__5);
	            this.state = 188;
	            this.atomo();
	            this.state = 189;
	            this.match(NovaScriptParser.T__6);
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 191;
	            this.match(NovaScriptParser.T__4);
	            this.state = 192;
	            this.match(NovaScriptParser.T__5);
	            this.state = 193;
	            this.match(NovaScriptParser.STRING);
	            this.state = 194;
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
	    this.enterRule(localctx, 32, NovaScriptParser.RULE_numero);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 197;
	        _la = this._input.LA(1);
	        if(!(((((_la - 35)) & ~0x1f) === 0 && ((1 << (_la - 35)) & 7) !== 0))) {
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
	    this.enterRule(localctx, 34, NovaScriptParser.RULE_condicional);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 199;
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
	    this.enterRule(localctx, 36, NovaScriptParser.RULE_se);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 201;
	        this.match(NovaScriptParser.T__17);
	        this.state = 202;
	        this.match(NovaScriptParser.T__5);
	        this.state = 203;
	        this.condicao();
	        this.state = 204;
	        this.match(NovaScriptParser.T__6);
	        this.state = 205;
	        this.match(NovaScriptParser.T__18);
	        this.state = 206;
	        this.bloco();
	        this.state = 207;
	        this.match(NovaScriptParser.T__19);
	        this.state = 216;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 208;
	            this.match(NovaScriptParser.T__20);
	            this.state = 214;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 18:
	                this.state = 209;
	                this.se();
	                break;
	            case 19:
	                this.state = 210;
	                this.match(NovaScriptParser.T__18);
	                this.state = 211;
	                this.bloco();
	                this.state = 212;
	                this.match(NovaScriptParser.T__19);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
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
	    this.enterRule(localctx, 38, NovaScriptParser.RULE_laco);
	    var _la = 0;
	    try {
	        this.state = 251;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 22:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 218;
	            this.match(NovaScriptParser.T__21);
	            this.state = 219;
	            this.match(NovaScriptParser.T__18);
	            this.state = 220;
	            this.bloco();
	            this.state = 221;
	            this.match(NovaScriptParser.T__19);
	            this.state = 222;
	            this.match(NovaScriptParser.T__22);
	            this.state = 223;
	            this.match(NovaScriptParser.T__5);
	            this.state = 224;
	            this.condicao();
	            this.state = 225;
	            this.match(NovaScriptParser.T__6);
	            this.state = 227;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===1) {
	                this.state = 226;
	                this.match(NovaScriptParser.T__0);
	            }

	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 229;
	            this.match(NovaScriptParser.T__23);
	            this.state = 230;
	            this.match(NovaScriptParser.T__5);
	            this.state = 231;
	            this.inicio();
	            this.state = 232;
	            this.match(NovaScriptParser.T__0);
	            this.state = 233;
	            this.condicao();
	            this.state = 234;
	            this.match(NovaScriptParser.T__0);
	            this.state = 236;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===35) {
	                this.state = 235;
	                this.final_();
	            }

	            this.state = 238;
	            this.match(NovaScriptParser.T__6);
	            this.state = 239;
	            this.match(NovaScriptParser.T__18);
	            this.state = 240;
	            this.bloco();
	            this.state = 241;
	            this.match(NovaScriptParser.T__19);
	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 243;
	            this.match(NovaScriptParser.T__22);
	            this.state = 244;
	            this.match(NovaScriptParser.T__5);
	            this.state = 245;
	            this.condicao();
	            this.state = 246;
	            this.match(NovaScriptParser.T__6);
	            this.state = 247;
	            this.match(NovaScriptParser.T__18);
	            this.state = 248;
	            this.bloco();
	            this.state = 249;
	            this.match(NovaScriptParser.T__19);
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
	    this.enterRule(localctx, 40, NovaScriptParser.RULE_inicio);
	    try {
	        this.state = 260;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 253;
	            this.match(NovaScriptParser.T__1);
	            this.state = 254;
	            this.match(NovaScriptParser.ID);
	            this.state = 255;
	            this.match(NovaScriptParser.T__2);
	            this.state = 256;
	            this.expressao();
	            break;
	        case 35:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 257;
	            this.match(NovaScriptParser.ID);
	            this.state = 258;
	            this.match(NovaScriptParser.T__2);
	            this.state = 259;
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
	    this.enterRule(localctx, 42, NovaScriptParser.RULE_final);
	    var _la = 0;
	    try {
	        this.state = 267;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 262;
	            this.match(NovaScriptParser.ID);
	            this.state = 263;
	            this.match(NovaScriptParser.T__2);
	            this.state = 264;
	            this.expressao();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 265;
	            this.match(NovaScriptParser.ID);
	            this.state = 266;
	            _la = this._input.LA(1);
	            if(!(_la===25 || _la===26)) {
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
	    this.enterRule(localctx, 44, NovaScriptParser.RULE_bloco);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 272;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 29624356) !== 0) || _la===35) {
	            this.state = 269;
	            this.statement();
	            this.state = 274;
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
	    this.enterRule(localctx, 46, NovaScriptParser.RULE_atribuicao);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 275;
	        this.match(NovaScriptParser.ID);
	        this.state = 280;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.state = 276;
	            this.match(NovaScriptParser.T__2);
	            this.state = 277;
	            this.expressao();
	            break;
	        case 25:
	            this.state = 278;
	            this.match(NovaScriptParser.T__24);
	            break;
	        case 26:
	            this.state = 279;
	            this.match(NovaScriptParser.T__25);
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
	    this.enterRule(localctx, 48, NovaScriptParser.RULE_condicao);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 282;
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
	    this.enterRule(localctx, 50, NovaScriptParser.RULE_condicao_or);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 284;
	        this.condicao_and();
	        this.state = 289;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===27) {
	            this.state = 285;
	            this.match(NovaScriptParser.T__26);
	            this.state = 286;
	            this.condicao_and();
	            this.state = 291;
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
	    this.enterRule(localctx, 52, NovaScriptParser.RULE_condicao_and);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 292;
	        this.condicao_not();
	        this.state = 297;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 293;
	            this.match(NovaScriptParser.T__27);
	            this.state = 294;
	            this.condicao_not();
	            this.state = 299;
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
	    this.enterRule(localctx, 54, NovaScriptParser.RULE_condicao_not);
	    try {
	        this.state = 303;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 300;
	            this.match(NovaScriptParser.T__16);
	            this.state = 301;
	            this.condicao_not();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 302;
	            this.condicao_par();
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



	condicao_par() {
	    let localctx = new Condicao_parContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, NovaScriptParser.RULE_condicao_par);
	    var _la = 0;
	    try {
	        this.state = 314;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 305;
	            this.match(NovaScriptParser.T__5);
	            this.state = 306;
	            this.condicao();
	            this.state = 307;
	            this.match(NovaScriptParser.T__6);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 309;
	            this.expmat();
	            this.state = 310;
	            _la = this._input.LA(1);
	            if(!(((((_la - 29)) & ~0x1f) === 0 && ((1 << (_la - 29)) & 63) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 311;
	            this.expmat();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 313;
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
NovaScriptParser.T__33 = 34;
NovaScriptParser.ID = 35;
NovaScriptParser.INT = 36;
NovaScriptParser.DECIMAL = 37;
NovaScriptParser.STRING = 38;
NovaScriptParser.WS = 39;

NovaScriptParser.RULE_programa = 0;
NovaScriptParser.RULE_statement = 1;
NovaScriptParser.RULE_expressionStatement = 2;
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
NovaScriptParser.RULE_atomo = 15;
NovaScriptParser.RULE_numero = 16;
NovaScriptParser.RULE_condicional = 17;
NovaScriptParser.RULE_se = 18;
NovaScriptParser.RULE_laco = 19;
NovaScriptParser.RULE_inicio = 20;
NovaScriptParser.RULE_final = 21;
NovaScriptParser.RULE_bloco = 22;
NovaScriptParser.RULE_atribuicao = 23;
NovaScriptParser.RULE_condicao = 24;
NovaScriptParser.RULE_condicao_or = 25;
NovaScriptParser.RULE_condicao_and = 26;
NovaScriptParser.RULE_condicao_not = 27;
NovaScriptParser.RULE_condicao_par = 28;

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

	expressionStatement() {
	    return this.getTypedRuleContext(ExpressionStatementContext,0);
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



class ExpressionStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NovaScriptParser.RULE_expressionStatement;
    }

	atribuicao() {
	    return this.getTypedRuleContext(AtribuicaoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.enterExpressionStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.exitExpressionStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NovaScriptVisitor ) {
	        return visitor.visitExpressionStatement(this);
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

	atomo() {
	    return this.getTypedRuleContext(AtomoContext,0);
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



class AtomoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NovaScriptParser.RULE_atomo;
    }

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	expmat() {
	    return this.getTypedRuleContext(ExpmatContext,0);
	};

	funcao_conversao() {
	    return this.getTypedRuleContext(Funcao_conversaoContext,0);
	};

	atomo() {
	    return this.getTypedRuleContext(AtomoContext,0);
	};

	STRING() {
	    return this.getToken(NovaScriptParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.enterAtomo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NovaScriptListener ) {
	        listener.exitAtomo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NovaScriptVisitor ) {
	        return visitor.visitAtomo(this);
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

	condicao() {
	    return this.getTypedRuleContext(CondicaoContext,0);
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

	se() {
	    return this.getTypedRuleContext(SeContext,0);
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
NovaScriptParser.ExpressionStatementContext = ExpressionStatementContext; 
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
NovaScriptParser.AtomoContext = AtomoContext; 
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
