export default class InterpreterVisitor {
    constructor() {
        // Tabela de Símbolos: armazena variáveis ("memória")
        this.symbolTable = new Map();
    }

    visit(node) {
        if (node.type === null || node.type === undefined) {
            console.log("teste");
            return; // <- ignora nós nulos/indefinidos que podem vir de 'statements' vazios
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
        const value = this.visit(node.right);
        this.symbolTable.set(varName, value);

        return value;
    }

    visitCallExpression(node) {
        if (node.callee.name === 'console.log') {
            const args = node.arguments.map(arg => this.visit(arg));
            console.log(...args);
            return;
        }
        throw new Error(`Runtime Error: Função '${node.callee.name}' não reconhecida.`);
    }

    visitBinaryExpression(node) {
        const left = this.visit(node.left);
        const right = this.visit(node.right);

        switch (node.operator) {
            case '+': return left + right;
            case '-': return left - right;
            case '*': return left * right;
            case '/': return left / right;
            
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
}
