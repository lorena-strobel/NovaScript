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
            // Detecta se o argumento é uma operação de soma com string " "
        if (node.arguments.length === 1 && node.arguments[0].type === 'BinaryExpression') {
            const arg = node.arguments[0];
            // Verifica se é valor + " " (concatenação com espaço)
            if ((arg.left.type === 'Identifier' || arg.left.type === 'Literal') &&
                arg.right.type === 'Literal' &&
                arg.right.value === ' ') {
                const left = this.visit(arg.left);
                return `io.write(string.format("%d ", ${left}))`;
            }
        }
            // caso normal de console.log
            const args = node.arguments.map(arg => this.visit(arg)).join(', ');
            return `print(${args})`;
        }

        // Tradução Number(x) -> tonumber(x)
        if (functionName === "Number") {
            if (node.arguments.length !== 1) {
                throw new Error("Gerador Lua: Number() requer exatamente 1 argumento");
            }
            const arg = this.visit(node.arguments[0]);
            return `tonumber(${arg})`;
        }

        // Tradução de prompt() → io.write() + io.read()
        if (functionName === 'prompt') {
            // O primeiro argumento é a mensagem a ser exibida
            if (node.arguments.length > 0) {
                const message = this.visit(node.arguments[0]);
                
                // Em Lua, 'io.write' não adiciona quebra de linha, e 'io.read()' lê a entrada
                return `(function() io.write(${message}); return io.read() end)()`;
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
    let currentIf = node;
    let isFirst = true;

    while (currentIf) {
        const test = this.visit(currentIf.test);

        if (isFirst) {
            code += `${this.indent()}if ${test} then\n`;
            isFirst = false;
        } else {
            code += `${this.indent()}elseif ${test} then\n`;
        }

        this.increaseIndent();
        code += this.visit(currentIf.consequent);
        this.decreaseIndent();

        // caso em que alternate é outro IfStatement (else if)
        if (currentIf.alternate && currentIf.alternate.type === 'IfStatement') {
            currentIf = currentIf.alternate;
            continue;
        }

        // else simples
        if (currentIf.alternate && currentIf.alternate.type === 'BlockStatement') {
            code += `${this.indent()}else\n`;
            this.increaseIndent();
            code += this.visit(currentIf.alternate);
            this.decreaseIndent();
        }

        break; // fim
    }

    code += `${this.indent()}end\n`;
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

    visitUpdateExpression(node) {
        if (node.operator === "++") {
            return `${node.argument.name} = ${node.argument.name} + 1`;
        }
        else if (node.operator === "--") {
            return `${node.argument.name} = ${node.argument.name} - 1`;
        }
        else {
            throw new Error("Operador de UpdateExpression não suportado: " + node.operator);
        }
    }

    visitWhileStatement(node) {
        const test = this.visit(node.test);
        let code = `${this.indent()}while ${test} do\n`;

        this.increaseIndent();
        code += this.visit(node.body);
        this.decreaseIndent();

        code += `${this.indent()}end\n`;
        return code;
    }

    // em lua a condição mais parecida com o "Do while" executa enquanto a condição for verdadeira
    visitDoWhileStatement(node) {
        let code = `repeat\n`;

        this.increaseIndent();
        code += this.visit(node.body);
        this.decreaseIndent();

        const test = this.visit(node.test);
        code += `until not (${test})\n`;

        return code;
    }

    // Em lua o for funciona com uma sintaxe difernte sem inicialização, condição e atualização na mesma linha
    // em visitForStatement é usado primeiro um while e ao final de cada iteração um for
    visitForStatement(node) {
    let code = `do\n`;
    this.increaseIndent();

    // init (pode ser declaração ou atribuição)
    if (node.init) {
        code += this.indent() + this.visit(node.init) + '\n';
    }

    // while, condicao de repeticao
    const test = node.test ? this.visit(node.test) : "true";
    code += this.indent() + `while ${test} do\n`;

    this.increaseIndent();
    code += this.visit(node.body);

    // update (i++, i--, ou i = i + 1)
    if (node.update) {
        code += this.indent() + this.visit(node.update) + '\n';
    }

    this.decreaseIndent();
    code += this.indent() + `end\n`;  // fim do while

    this.decreaseIndent();
    code += `end\n`; // fim do bloco

    return code;
}



}
