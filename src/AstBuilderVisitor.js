import { type } from 'os';
import NovaScriptVisitor from '../NovaScriptVisitor.js';

// Classe principal que constrói a AST com base no arquivo Parser gerado
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
            body: statement.filter(s => s !== null)   // filtra statements nulos (ex: ';')
        };
    }


    // Visita 'statement' genérico
    visitStatement(ctx) {

        if (ctx.declaracao()) {
            return this.visit(ctx.declaracao());
        }
        if (ctx.escrever()) {
            return this.visit(ctx.escrever());
        }
        if (ctx.atribuicao()) {
            return this.visit(ctx.atribuicao());
        }
        if (ctx.condicional()) {
            return this.visit(ctx.condicional());
        }
        if (ctx.laco()) {
            return this.visit(ctx.laco());
        }
        if (ctx.ler()) {
            return this.visit(ctx.ler());
        }

        if (ctx.expressionStatement()) {
            return this.visit(ctx.expressionStatement());
        }

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
        // AST para o comando 'ler'
        const funcaoConvCtx = ctx.funcao_conversao();
        const promptText = ctx.STRING() ? this._text(ctx.STRING()).slice(1, -1) : "";

        // Nó da chamada da função 'prompt()' que aparece na AST
        const promptNode = {
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
        };
        // Se tem função de conversão, envolve o prompt nela
    let initNode = promptNode;
    if (funcaoConvCtx) {
        initNode = {
            type: 'CallExpression',
            callee: {
                type: 'Identifier',
                name: funcaoConvCtx.getText()
            },
            arguments: [promptNode]
        };
    }

        /* Se a gramática usou 'let', cria-se uma declaração
         * Senão, criamos uma atribuição (caso a variável já existe)
         */
        // Verifica se tem ID (variável) para atribuir

        if (ctx.getText().startsWith('let')) {
            return {
                type: 'VariableDeclaration',
                kind: 'let',
                declarations: [
                    {
                        type: 'VariableDeclarator',
                        id: {
                            type: 'Identifier',
                            name: varName
                        },
                        init: initNode
                    }
                ]
            };
        }

        /* Caso de 'prompt' sem 'let' (atribuição a variável existente) */ // <- aplicação futura?
         const varName = ctx.ID().getText();       
        return {
            type: 'ExpressionStatement',
            expression: {
                type: 'AssignmentExpression',
                operator: '=',
                left: {
                    type: 'Identifier',
                    name: varName
                },
                right: callNode
            }
        };
    }

    visitExpressionStatement(ctx) {
        if (ctx.atribuicao()) {
            return this.visit(ctx.atribuicao());
        }
        // Tenta visitar diretamente os children
        for (let child of ctx.children) {
            const result = this.visit(child);
            if (result) {
                return {
                    type: 'ExpressionStatement',
                    expression: result
                };
            }
        }
        return null;
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
                arguments: this.visit(ctx.concatenacao_log())
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
            const text = ctx.getText();
    console.log("DEBUG visitExpressao:", text);
    
    // Se for prompt, trata como CallExpression
    if (text.startsWith('prompt(')) {
        const promptMatch = text.match(/prompt\(["']([^"']*)["']\)/);
        const promptText = promptMatch ? promptMatch[1] : "";
        return {
            type: 'CallExpression',
            callee: { type: 'Identifier', name: 'prompt' },
            arguments: [{ type: 'Literal', value: promptText }]
        };
    }

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


    visitFator(ctx) {
const atomoCtx = ctx.atomo();
    if (!atomoCtx) return null;

    // Número, ID ou literal
    if (atomoCtx.numero()) return this.visit(atomoCtx.numero());
    if (atomoCtx.STRING()) return { type: 'Literal', value: this._text(atomoCtx.STRING()).slice(1, -1) };

    // Expressão entre parênteses
    if (atomoCtx.expmat()) return this.visit(atomoCtx.expmat());

    // Função de conversão (Number, parseInt, parseFloat)
    if (atomoCtx.funcao_conversao()) {
        // Pegamos o argumento do atomo (que pode ser prompt ou outra expressão)
        const argAtomo = atomoCtx.atomo(0);
        let argValue = null;

        if (argAtomo) {
            // Se for prompt dentro da função
            if (argAtomo.getText().startsWith('prompt')) {
                const promptText = argAtomo.STRING() ? argAtomo.STRING().getText().slice(1, -1) : "";
                argValue = {
                    type: 'CallExpression',
                    callee: { type: 'Identifier', name: 'prompt' },
                    arguments: [{ type: 'Literal', value: promptText }]
                };
            } else {
                argValue = this.visit(argAtomo);
            }
        }

        return {
            type: 'CallExpression',
            callee: { type: 'Identifier', name: atomoCtx.funcao_conversao().getText() },
            arguments: [argValue]
        };
    }

    // Prompt sozinho
    if (atomoCtx.getText().startsWith('prompt')) {
        const promptText = atomoCtx.STRING() ? atomoCtx.STRING().getText().slice(1, -1) : "";
        return {
            type: 'CallExpression',
            callee: { type: 'Identifier', name: 'prompt' },
            arguments: [{ type: 'Literal', value: promptText }]
        };
    }

    return null;

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
        if (ctx.ID()) {
            return {
                type: 'Identifier',
                name: this._text(ctx.ID())
            };
        }
    }



    // --- Estruturas de Controle ---

    visitCondicional(ctx) {

        const seCtx = ctx.se();

        // pega o nó/valor retornado pelo visitor da condicao
        const rawTest = this.visit(seCtx.condicao());

        // normaliza: se por algum motivo vier um array, usa o primeiro elemento
        const condicao = Array.isArray(rawTest) ? rawTest[0] : rawTest;

        const consequent = this.visit(seCtx.bloco(0));

        // trata else / else if
        let alternate = null;
        if (seCtx.bloco(1)) {
            alternate = this.visit(seCtx.bloco(1));
        } else if (seCtx.se()) {
            alternate = this.visit(seCtx.se());
        }

        return {
            type: "IfStatement",
            test: condicao,
            consequent,
            alternate
        };
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
            const finalNode = typeof ctx.final_ === 'function'
                ? ctx.final_()
                : (typeof ctx.final === 'function' ? ctx.final() : null);

            return {
                type: 'ForStatement',
                init: this.visit(ctx.inicio()),
                test: this.visit(ctx.condicao()),
                update: finalNode ? this.visit(finalNode) : null,
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
        if (ctx.getChild(0).getText() === 'let') {
            return {
                type: 'VariableDeclaration',
                kind: 'let',
                declarations: [{
                    type: 'VariableDeclarator',
                    id: {
                        type: 'Identifier',
                        name: ctx.ID().getText()
                    },
                    init: this.visit(ctx.expressao())
                }]
            };
        } else {
            return {
                type: 'AssignmentExpression',
                operator: '=',
                left: {
                    type: 'Identifier',
                    name: ctx.ID().getText()
                },
                right: this.visit(ctx.expressao())
            };
        }
    }



    visitFinal(ctx) {
        if (ctx.expressao()) {
            return {
                type: 'AssignmentExpression',
                operator: '=',
                left: {
                    type: 'Identifier',
                    name: ctx.ID().getText()
                },
                right: this.visit(ctx.expressao())
            };
        }
        else {
            return {
                type: 'UpdateExpression',
                operator: this._text(ctx.getChild(1)),
                argument: { type: 'Identifier', name: ctx.ID().getText() },
                prefix: false
            };
        }
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
        return this.visit(ctx.condicao_par());
    }


    visitCondicao_par(ctx) {
        if (ctx.condicao()) return this.visit(ctx.condicao());
        const leftExpr = ctx.expressao?.(0) || ctx.expmat?.(0);
        const rightExpr = ctx.expressao?.(1) || ctx.expmat?.(1);
        return {
            type: 'BinaryExpression',
            operator: this._text(ctx.getChild(1)),
            left: this.visit(leftExpr),
            right: this.visit(rightExpr)
        };
    }
}