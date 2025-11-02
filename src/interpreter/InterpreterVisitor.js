import { error } from 'console';
import { type } from 'os';
import readlineSync from 'readline-sync';


export default class InterpreterVisitor {
    constructor() {
        // Tabela de Símbolos: armazena variáveis ("memória")
        this.symbolTable = new Map();
    }

    visit(node) {
        // Defesa: node nulo / primitivo / sem type
        if (node === null || node === undefined) {
            // nó ausente — simplesmente devolve undefined (normal em alguns casos)
            return undefined;
        }
        // se for primitivo (número/string/boolean) — devolve direto
        if (typeof node !== 'object') {
            return node;
        }
        // se for objeto mas não tiver campo type — log e devolve o próprio objeto
        if (!('type' in node) || node.type === null || node.type === undefined) {
            return node; // pode ser um literal mal formado; funções que chamarem visit devem tratar isso
        }

        switch (node.type) {
            case 'Program':
                return this.visitProgram(node);
            case 'VariableDeclaration':
                return this.visitVariableDeclaration(node);
            case 'ExpressionStatement':
                return this.visitExpressionStatement(node);
            case 'CallExpression':
                return this.visitCallExpression(node);
            case 'AssignmentExpression':
                return this.visitAssignmentExpression(node);
            case 'BinaryExpression':
                return this.visitBinaryExpression(node);
            case 'Identifier':
                return this.visitIdentifier(node);
            case 'Literal':
                return this.visitLiteral(node);
            case 'LogicalExpression':
                return this.visitLogicalExpression(node);
            case 'UnaryExpression':
                return this.visitUnaryExpression(node);
            case 'UpdateExpression':
                return this.visitUpdateExpression(node);
            case 'IfStatement':
                return this.visitIfStatement(node);
            case 'WhileStatement':
                return this.visitWhileStatement(node);
            case 'ForStatement':
                return this.visitForStatement(node);
            case 'DoWhileStatement':
                return this.visitDoWhileStatement(node);
            case 'BlockStatement':
                return this.visitBlockStatement(node);
            default:
                throw new Error(`Runtime Error: Tipo de nó desconhecido '${node.type}'`);
        }
    }

    visitProgram(node) {
        // Executa cada 'statement' no corpo do programa
        for (const statement of node.body) {
            this.visit(statement);
        }
    }

    visitVariableDeclaration(node) {
        // EX: 'let a = 10, b = 10'
        for (const declaration of node.declarations) {
            const varName = declaration.id.name;
            let value = undefined;

            if (declaration.init) {
                value = this.visit(declaration.init);   // <- visita nó da expressão (ex: a + b) e pega o valor retornado
            }

            this.symbolTable.set(varName, value);   // <- armazena variável na memória
        }
    }

    visitExpressionStatement(node) {
        return this.visit(node.expression);
    }

    visitAssignmentExpression(node) {
        const varName = node.left.name;
        if (!this.symbolTable.has(varName)) {
            throw new Error(`Runtime Error: Variável '${varName}' não foi declarada.`);
        }
        if (node.right === null || node.right === undefined) {
            return this.symbolTable.get(varName);
        }
        const value = this.visit(node.right);
        this.symbolTable.set(varName, value);
        return value;
    }

    visitCallExpression(node) {
        // Lógica para 'console.log('
        if (node.callee.name === 'console.log') {
            const args = node.arguments.map(arg => this.visit(arg));
            console.log(...args);
            return;
        }

        // Lógica para 'prompt()'
        if (node.callee.name === 'prompt') {
            const question = node.arguments[0] ? this.visit(node.arguments[0]) : '';
            const answer = readlineSync.question(question + ' ');

            const num = parseFloat(answer);     // <- tenta converter a resposta para número, se falhar, retorna como string

            return isNaN(num) ? answer : num;
        }
        // conversões de tipo
        if (['Number', 'parseInt', 'parseFloat'].includes(node.callee.name)) {
            const argValue = this.visit(node.arguments[0]);
            switch (node.callee.name) {
                case 'Number': return Number(argValue);
                case 'parseInt': return parseInt(argValue, 10);
                case 'parseFloat': return parseFloat(argValue);
            }

            throw new Error(`Runtime Error: Função '${node.callee.name}' não reconhecida.`);
        }
    }

    visitBinaryExpression(node) {
        if (!node.left || !node.right) {
            throw new Error(`Runtime Error: BinaryExpression mal formada.`);
        }
        const left = this.visit(node.left);
        const right = this.visit(node.right);

        switch (node.operator) {
            case '+': return left + right;
            case '-': return left - right;
            case '*': return left * right;
            case '/': return left / right;
            case '%': return left % right;
            case '==': return left == right;
            case '!=': return left != right;
            case '<': return left < right;
            case '<=': return left <= right;
            case '>': return left > right;
            case '>=': return left >= right;

            default:
                throw new Error(`Runtime Error: Operador binário desconhecido '${node.operator}'`);
        }
    }

    visitIdentifier(node) {
        // Busca o valor da variável na memória
        if (!this.symbolTable.has(node.name)) {
            throw new Error(`Runtime Error: Variável '${node.name}' não encontrada.`);
        }

        return this.symbolTable.get(node.name);
    }

    visitLiteral(node) {
        // Retorna o valor literal (EX: 10, "olá", true)
        return node.value;
    }

    visitLogicalExpression(node) {
        const left = this.visit(node.left);
        const right = this.visit(node.right);
        switch (node.operator) {
            case '&&': return left && right;
            case '||': return left || right;
            default:
                throw new Error(`Runtime Error: Operador lógico desconhecido '${node.operator}'`);
        }
    }

    visitUnaryExpression(node) {
        const argument = this.visit(node.argument);
        switch (node.operator) {
            case '!': return !argument;
            default:
                throw new Error(`Runtime Error: Operador unário desconhecido '${node.operator}'`);
        }
    }

    visitUpdateExpression(node) {
        const varName = node.argument.name;
        if (!this.symbolTable.has(varName)) {
            throw new Error(`Runtime Error: Variável '${varName}' não foi declarada.`);
        }
        let currentValue = this.symbolTable.get(varName);

        if (typeof currentValue !== 'number') {
            throw new Error(`Runtime Error: Operador de atualização só é válido para números. Valor atual de '${varName}': ${currentValue}`);
        }
        let newValue;
        if (node.operator === '++') {
            newValue = currentValue + 1;
        }
        else if (node.operator === '--') {
            newValue = currentValue - 1;
        }
        else {
            throw new Error(`Runtime Error: Operador de atualização desconhecido '${node.operator}'`);
        }
        this.symbolTable.set(varName, newValue);

        return newValue;
    }

    _evaluateCondition(value) {
        if (value === undefined) {
            throw new Error(`Runtime Error: Valor 'undefined' não pode ser usado em condições. A variável pode não ter sido inicializada.`);
        }
        if (typeof value !== 'boolean' && typeof value !== 'number' && typeof value !== 'string') {
            throw new Error(`Runtime Error: Valor '${value}' deve ser booleano, número ou string.`);
        }
        if (typeof value === 'boolean') return value;
        if (typeof value === 'number') return value !== 0;
        if (typeof value === 'string') return value.length > 0;
        return !!value;
    }
    // Estruturas de controle

    visitIfStatement(node) {
        const test = this.visit(node.test);

        if (this._evaluateCondition(test)) {
            this.visit(node.consequent);
        }
        else if (node.alternate) {
            this.visit(node.alternate);
        }
    }

    visitWhileStatement(node) {
        let test = this.visit(node.test);

        if (!this._evaluateCondition(test)) {

            return; // condição inicial falsa, não entra no loop
        }
        let iteration = 0;

        while (this._evaluateCondition(test)) {
            iteration++;
            this.visit(node.body);

            // reavalia após executar o bloco
            test = this.visit(node.test);
            if (iteration > 10000) { // safety break
                break;
            }
        }
    }

    visitForStatement(node) {

        // --- Inicialização (ex: let i = 0 ou i = 0)
        if (node.init) {
            this.visit(node.init);
        } 
        let iteration = 0;

        while (true) {
            // --- Avalia condição
            let condition;

            if (node.test) {
                condition = this.visit(node.test);

                // se a condição não for booleana nem numérica, erro
                if (typeof condition !== 'boolean' && typeof condition !== 'number') {
                    throw new Error("Runtime Error: A condição do 'for' deve resultar em um valor booleano ou numérico.");
                }

                // Se a condição for falsa → sai do laço
                if (!this._evaluateCondition(condition)) {
                    break;
                }
            }
            this.visit(node.body);

            // --- Executa o update
            if (node.update) {
                const updateResult = this.visit(node.update);
            }

            // --- Limite de segurança
            iteration++;
            if (iteration > 10000) {
                throw new Error("Runtime Error: Loop 'for' excedeu 10.000 iterações — possível loop infinito.");
            }
        }

    }



    visitDoWhileStatement(node) {
        let condition;
        do {
            this.visit(node.body);
            condition = this.visit(node.test);
        } while (this._evaluateCondition(condition));
    }

    visitBlockStatement(node) {
        for (const statement of node.body) {
            this.visit(statement);
        }
    }

}