import { type } from 'os';
import NovaScriptVisitor from './NovaScriptVisitor.js';

// Classe principal que constrói a AST
export default class AstBuilderVisitor extends NovaScriptVisitor {
    
    // Helper extrair o texto do terminal ou nome Identificador
    _text(ctx) {
        return ctx.getText();
    }
    
    
    // Visita regra 'programa' e retorna uma lista 'statements'
    visitPrograma(ctx) {
        const statement = ctx.statement().map(stmt => this.visit(stmt));
        return {
            type: 'Program',
            body: statement.filter(s => s !== null)         // filtra statements nulos (ex: ';')
        };
    }


    // Visita 'statement' genérico
    visitStatement(ctx) {
        if (ctx.declaracao()) return this.visit(ctx.declaracao());
        if (ctx.escrever()) return this.visit(ctx.escrever());
        if (ctx.atribuicao()) return this.visit(ctx.atribuicao());
        if (ctx.condicional()) return this.visit(ctx.condicional());
        if (ctx.laco()) return this.visit(ctx.laco());
        if (ctx.ler()) return this.visit(ctx.ler());
        return null;
    }


    // Visita declaração variável: let a = 10
    visitDeclaracao(ctx) {

        // 'let a = 1, b = 2'
        const varDeclarations = ctx.lista_atrib().ID().map((idNode, index) => {
            const exprNode = ctx.lista_atrib().expressao(index);
            const init = exprNode ? this.visit(exprNode) : null;
            return {
                type: 'VariableDeclarator',
                id: { type: 'Identifier', name: this._text(idNode) },
                init: init
            };
        });

        return {
            type: 'VariableDeclaration',
            declarations: varDeclarations,
            kind: 'let'
        };
    }


    visitAtribuicao(ctx) {
        if (ctx.expressao()) {
            return {
                type: 'ExpressionStatement',
                expression: {
                    type: 'AssignmentExpression',
                    operator: '=',
                    left: {
                        type: 'Identifier',
                        name: this._text(ctx.ID())
                    },
                    right: this.visit(ctx.expressao())
                }
            };
        }

        return {
            type: 'ExpressionStatement',
            expression: {
                type: 'UpdateExpression',
                operator: this._text(ctx.getChild(1)),
                argument: {
                    type: 'Identifier',
                    name: this._text(ctx.ID())
                },
                prefix: false
            }
        };
    }


    visitLer(ctx) {
        // Simplificando a AST para o comando 'ler'
        const promptText = ctx.STRING() ? this._text(ctx.STRING()).slice(1, -1) : "";
        return {
            type: 'ExpressionStatement',
            expression: {
                type: 'AssignmentExpression',
                operator: '=',
                left: {
                    type: 'Identifier',
                    name: this._text(ctx.ID())
                },
                right: {
                    type: 'CallExpression',
                    callee: {
                        type: 'Identifier',
                        name: 'prompt'
                    },
                    arguments: [
                        {
                            type: 'Literal',
                            value: promptText
                        }
                    ]
                }
            }
        };
    }


    // Visita comando de escrita: console.log("Hello World");
    visitEscrever(ctx) {
        return {
            type: 'ExpressionStatement',
            expression: {
                type: 'CallExpression',
                callee: {
                    type: 'Identifier',
                    name: 'console.log'
                },
                arguments: [this.visit(ctx.concatenacao_log())]
            }
        };
    }


    // Trata concatenação 'console.log()'
    visitConcatenacao_log(ctx) {
        let left = this.visit(ctx.elemento_log(0));

        for (let i = 1; i < ctx.elemento_log().length; i++) {
            const right = this.visit(ctx.elemento_log(i));
            left = {
                type: 'BinaryExpression',
                operator: '+',
                left: left,
                right: right
            };
        }
        return left;
    }


    visitElemento_log(ctx) {
        if (ctx.STRING()) {
            return {
                type: 'Literal',
                value: this._text(ctx.STRING()).slice(1, -1)     // remove aspas
            };
        }
        return this.visit(ctx.expressao());
    }



    // --- Tratamento de Expressões ---

    visitExpressao(ctx) {
        if (ctx.expmat()) return this.visit(ctx.expmat());
        if (ctx.STRING()) return {
            type: 'Literal',
            value: this._text(ctx.STRING()).slice(1, -1)
        };
    }


    // Trata expressões matemáticas + e -
    visitExpmat(ctx) {
        let left = this.visit(ctx.termo(0));

        for (let i = 1; i < ctx.termo().length; i++) {
            const operator = this._text(ctx.getChild(i * 2 - 1));
            const right = this.visit(ctx.termo(i));
            left = {
                type: 'BinaryExpression',
                operator: operator,
                left: left,
                right: right
            };
        }
        return left;
    }


    // Trata expressões matemáticas * e /
    visitTermo(ctx) {
        let left = this.visit(ctx.fator(0));

        for (let i = 1; i < ctx.fator().length; i++) {
            const operator = this._text(ctx.getChild(i * 2 - 1));
            const right = this.visit(ctx.fator(i));
            left = {
                type: 'BinaryExpression',
                operator: operator,
                left: left,
                right: right
            };
        }
        return left;
    }


    // Trata fatores (números, IDs, expr entre parênteses)
    visitFator(ctx) {
        if (ctx.numero()) return this.visit(ctx.numero());
        if (ctx.expmat()) return this.visit(ctx.expmat());    // para parêntses: (expmat)
    }


    visitNumero(ctx) {
        if (ctx.INT()) {
            return {
                type: 'Literal',
                value: parseInt(this._text(ctx.INT()), 10)
            };
        }
        if (ctx.DECIMAL()) {
            return {
                type: 'Literal',
                value: parseFloat(this._text(ctx.DECIMAL())),
            };
        }
        if (ctx.ID())  {
            return {
                type: 'Identifier',
                name: this._text(ctx.ID())
            };
        }
    }



    // --- Estruturas de Controle ---

    visitCondicional(ctx) {
        return this.visit(ctx.se());
    }


    visitSe(ctx) {
        const test = this.visit(ctx.condicao());
        const consequent = this.visit(ctx.bloco(0));
        let alternate = null;

        if (ctx.bloco(1)) {         // se existe um block 'else'
            alternate = this.visit(ctx.bloco(1));
        } else if (ctx.se()) {      // se existe um 'else if'
            alternate = this.visit(ctx.se());
        }
        
        return {
            type: 'IfStatement', test, consequent, alternate
        };
    }


    visitLaco(ctx) {
        if (this._text(ctx.getChild(0)) === 'while') {
            return {
                type: 'WhileStatement',
                test: this.visit(ctx.condicao()),
                body: this.visit(ctx.bloco())
            };
        }
        if (this._text(ctx.getChild(0)) === 'do') {
            return {
                type: 'DoWhileStatement',
                test: this.visit(ctx.condicao()),
                body: this.visit(ctx.bloco())
            };
        }
        if (this._text(ctx.getChild(0)) === 'for') {
            return {
                type: 'ForStatement',
                init: this.visit(ctx.inicio()),
                test: this.visit(ctx.condicao()),
                update: ctx.final() ? this.visit(ctx.final()) : null,
                body: this.visit(ctx.bloco())
            };
        }
    }


    visitBloco(ctx) {
        return {
            type: 'BlockStatement',
            body: ctx.statement().map(stmt => this.visit(stmt)).filter(s => s !== null)
        };
    }


    visitInicio(ctx) {
        if (ctx.declaracao()) return this.visit(ctx.declaracao());
        if (ctx.atribuicao()) return this.visit(ctx.atribuicao()).expression;
    }


    visitFinal(ctx) {
        return this.visit(ctx.atribuicao()).expression;
    }



    // --- Condições ---
    visitCondicao(ctx) {
        return this.visit(ctx.condicao_or());
    }


    visitCondicao_or(ctx) {
        let left = this.visit(ctx.condicao_and(0));

        for (let i = 1; i < ctx.condicao_and().length; i++) {
            left = {
                type: 'LogicalExpression',
                operator: '||',
                left,
                right: this.visit(ctx.condicao_and(i))
            };
        }

        return left;
    }


    visitCondicao_and(ctx) {
        let left = this.visit(ctx.condicao_not(0));

        for (let i = 1; i < ctx.condicao_not().length; i++) {
            left = {
                type: 'LogicalExpression',
                operator: '&&',
                left,
                right: this.visit(ctx.condicao_not(i))
            };
        }

        return left;
    }


    visitCondicao_not(ctx) {
        if (ctx.condicao_not()) {
            return {
                type: 'UnaryExpression',
                operator: '!',
                argument: this.visit(ctx.condicao_not()),
                prefix: true
            };
        }
    }


    visitCondicao_par(ctx) {
        if (ctx.condicao()) return this.visit(ctx.condicao());
        return {
            type: 'BinaryExpression',
            operator: this._text(ctx.getChild(1)),
            left: this.visit(ctx.expmat(0)),
            right: this.visit(ctx.expmat(1))
        };
    }
}
