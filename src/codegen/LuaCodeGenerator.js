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

    visitExpressionStatement(node) {
        return this.visit(node.expression);
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
}
