import NovaScriptVisitor from './NovaScriptVisitor.js';

// Classe principal que constrói a AST
export default class AstBuilderVisitor extends NovaScriptVisitor {
    

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
        if (ctx.declaracao()) {
            return this.visit(ctx.declaracao());
        }
        if (ctx.escrever()) {
            return this.visit(ctx.escrever());
        }
        // ...
        return null;
    }


    // Visita declaração variável: let a = 10
    visitDeclaracao(ctx) {
        const declarations = ctx.lista_atrib().children.map(child => {
            if (child.constructor.name === 'IdContext') {
                return {
                    type: 'VariableDeclarator',
                    id: { type: 'Identifier', name: child.getText() },
                    init: null
                };
            }
            if (child.constructor.name === 'AtribuicaoContext') {
                return this.visit(child);
            }
            return null;
        }).filter(d => d);

        // 'let a = 1, b = 2'
        const varDeclarations = ctx.lista_atrib().ID().map((idNode, index) => {
            const id = idNode.getText();
            const exprNode = ctx.lista_atrib().expressao(index);
            const init = exprNode ? this.visit(exprNode) : null;
            return {
                type: 'VariableDeclarator',
                id: { type: 'Identifier', name: id },
                init: init
            };
        });

        return {
            type: 'VariableDeclaration',
            declarations: varDeclarations,
            kind: 'let'
        };
    }


    // Visita comando de escrita: console.log("Hello World");
    visitEscrever(ctx) {
        return {
            type: 'ExpressionStatement',
            expression: {
                type: 'CallExpression',
                callee: { type: 'Identifier', name: 'console.log' },
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
                value: ctx.STRING().getText().slice(1, -1),     // remove aspas
                raw: ctx.STRING().getText()
            };
        }
        return this.visit(ctx.expressao());
    }


    // --- Tratamento de Expressões ---

    visitExpressao(ctx) {
        if (ctx.expmat()) return this.visit(ctx.expmat());
        if (ctx.STRING()) return {
            type: 'Literal',
            value: ctx.STRING().getText().slice(1, -1),
            raw: ctx.STRING().getText()
        };
    }


    // Trata expressões matemáticas + e -
    visitExpmat(ctx) {
        let left = this.visit(ctx.termo(0));

        for (let i = 1; i < ctx.termo().length; i++) {
            const operator = ctx.children[i * 2 - 1].getText();
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
            const operator = ctx.children[i * 2 - 1].getText();
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
        if (ctx.numero()) {
            return this.visit(ctx.numero());
        }
        if (ctx.expmat()) {     // para parêntses: (expmat)
            return this.visit(ctx.expmat());
        }
    }


    visitNumero(ctx) {
        if (ctx.INT()) {
            return {
                type: 'Literal',
                value: parseInt(ctx.INT().getText(), 10),
                raw: ctx.INT().getText()
            };
        }
        if (ctx.DECIMAL()) {
            return {
                type: 'Literal',
                value: parseFloat(ctx.DECIMAL().getText()),
                raw: ctx.DECIMAL().getText()
            };
        }
        if (ctx.ID())  {
            return {
                type: 'Identifier',
                name: ctx.ID().getText()
            };
        }
    }
}
