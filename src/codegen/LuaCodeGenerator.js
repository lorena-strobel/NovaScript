// Esqueleto Inicial da Classe LuaCodeGenerator

export default class LuaCodeGenerator {
    constructor() {
        this.indentLevel = 0;
        this.indentString = '    '; // 4 espaços no código final (Lua)
    }


    /**
     * Método principal que gera código Lua a partir da AST
     * @param {Object} ast - Árvore Sintática Abstrata
     * @returns {string} - Código Lua gerado
     */
    generate(ast) {
        return this.visit(ast);
    }


    /**
     * Método despachante que chama o método visitor apropriado
     */
    visit(node) {
        if (!node || !node.type) {
            return '';
        }

        const methodName = `visit${node.type}`;
        if (typeof this[methodName] === 'function') {
            return this[methodName](node);
        }

        throw new Error(`Gerador Lua: Tipo de nó desconhecido '${node.type}`);
    }


    /**
     * Retorna a indentação atual
     */
    indent() {
        return this.indentString.repeat(this.indentLevel);
    }


    /**
     * Aumenta o nível de indentação
     */
    increaseIndent() {
        this.indentLevel++;
    }


    /**
     * Diminui o nível de indentação
     */
    decreaseIndent() {
        this.indentLevel--;
    }


    
    // === MÉTODOS VISITORS (serão implementados...) ===
    
    visitProgram(node) {
        let code = '-- Código Lua gerado pelo NovaScript\n\n';

        for (const statement of node.body) {
            const statementCode = this.visit(statement);
            if (statementCode) {
                code += this.indent() + statementCode + '\n';
            }
        }

        return code;
    }


    visitVariableDeclaration(node) {
        let code = '';

        for (const declaration of node.declarations) {
            const varName = declaration.id.name;

            if (declaration.init) {
                const value = this.visit(declaration.init);
                code += `local ${varName} = ${value}`;
            } else {
                code += `local ${varName}`;
            }
        }

        return code;
    }

    visitLiteral(node) {
        // Para Strings, mantém as aspas
        if (typeof node.value === 'string') {
            return `"${node.value}"`;
        }
        // Para Números e Booleanos, retorna como String
        return String(node.value);
    }

    visitIdentifier(node) {
        return node.name;
    }


    visitUnaryExpression(node) {
        const argument = this.visit(node.argument);

        // Mapeamento de operadores unários NovaScript → Lua
        const operatorMap = {
            '!': 'not ',    // -> Lua usa 'not' com espaço ' '
            '-': '-',
            '+': '+'
        };

        const luaOperator = operatorMap[node.operator] || node.operator;

        // Se for 'not', precisa de espaço ou parênteses
        if (node.operator === '!') {
            return `not (${argument})`;
        }

        return `${luaOperator}${argument}`;
    }
    
    visitBinaryExpression(node) {
        const left = this.visit(node.left);
        const right = this.visit(node.right);

        // Mapeamento de operadores NovaScript → Lua
        const operatorMap = {
            '+': '+',
            '-': '-',
            '*': '*',
            '/': '/',
            '==': '==',
            '!=': '~=',     // -> Lua usa ~= para 'diferente'
            '<': '<',
            '>': '>',
            '<=': '<=',
            '>=': '>=',
        };

        let luaOperator = operatorMap[node.operator] || node.operator;

        // Se o operador for '+' e pelo menos um dos lados for String, usar concatenação do Lua (..)
        if (node.operator === '+') {
            const isLeftString = node.left.type === 'Literal' && typeof node.left.value === 'string';
            const isRightString = node.right.type === 'Literal' && typeof node.right.value === 'string';

            if (isLeftString || isRightString) {
                luaOperator = '..';
            }
        }
        
        return `${left} ${luaOperator} ${right}`;
    }

    visitLogicalExpression(node) {
        const left = this.visit(node.left);
        const right = this.visit(node.right);

        // Mapeamento de operadores lógicos NovaScript → Lua
        const operatorMap = {
            '&&': 'and',
            '||': 'or'
        };

        const luaOperator = operatorMap[node.operator] || node.operator;

        return `${left} ${luaOperator} ${right}`;
    }

    visitAssignmentExpression(node) {
        const varName = this.visit(node.left);
        const value = this.visit(node.right);

        return `${varName} = ${value}`;
    }

    visitCallExpression(node) {
        const functionName = node.callee.name;

        // Tradução de 'console.log()' → 'print()'
        if (functionName === 'console.log') {
            const args = node.arguments.map(arg => this.visit(arg)).join(', ');
            return `print(${args})`;
        }

        // Tradução de prompt() → io.write() + io.read()
        if (functionName === 'prompt') {
            // O primeiro argumento é a mensagem a ser exibida
            if (node.arguments.length > 0) {
                const message = this.visit(node.arguments[0]);
                
                // Em Lua, 'io.write' não adiciona quebra de linha, e 'io.read()' lê a entrada
                return `(function() io.write(${message} .. " "); return io.read() end)()`;
            }
            return 'io.read()';
        }

        throw new Error(`Gerador Lua: Função '${functionName}' não reconhecida`);
    }


    visitExpressionStatement(node) {
        return this.visit(node.expression);
    }

    visitIfStatement(node) {
        let code = '';
        
        // Condição IF
        const test = this.visit(node.test);
        code += `if ${test} then\n`;

        // Corpo do IF (consequent)
        this.increaseIndent();
        if (node.consequent.type === 'BlockStatement') {
            code += this.visit(node.consequent);
        } else {
            code += this.indent() + this.visit(node.consequent) + '\n';
        }
        this.decreaseIndent();

        
        // Bloco ELSE (se existir)
        if (node.alternate) {

            // Verifica se 'alternate' é um 'IfStatement' (para 'ELSEIF')
            if (node.alternate.type === 'IfStatement') {

                // Remove o 'IF' do início, troque por 'ELSEIF'
                let elseIfCode = this.visitIfStatement(node.alternate).trim();
                elseIfCode = elseIfCode.replace(/^if/, 'elseif');
                code += this.indent() + elseIfCode + '\n';
            } else {
                code += this.indent() + 'else\n';
                this.increaseIndent();
                code += this.visit(node.alternate);
                this.decreaseIndent();
                code += this.indent();
            }
        }

        code += 'end';

        return code;
    }

    visitBlockStatement(node) {
        let code = '';

        for (const statement of node.body) {
            const statementCode = this.visit(statement);
            if (statementCode) {
                code += this.indent() + statementCode + '\n';
            }
        }

        return code;
    }

}
