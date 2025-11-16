# Perguntas Frequentes (FAQ): Arquitetura do NovaScript

Este documento responde a perguntas comuns sobre a arquitetura interna, o fluxo de execução e as ferramentas usadas no interpretador NovaScript.

---

### Q: O que é o projeto NovaScript e qual seu objetivo?

**R:** O NovaScript é um projeto acadêmico que constrói um **interpretador** para uma nova linguagem de programação, também chamada `NovaScript`. O objetivo principal é pedagógico: aplicar os conceitos da disciplina de Compiladores na prática.

Tecnicamente, o projeto lê arquivos de código `.ns`, analisa sua sintaxe, executa as instruções e gera visualizações gráficas da estrutura do código.

### Q: O que são os "Visitantes" (`AstBuilderVisitor` e `InterpreterVisitor`)?

**R:** Eles são a implementação de um Padrão de Design (Visitor Pattern) que separa a lógica da estrutura de dados.

Imagine a estrutura do código (a Árvore) como uma "cidade" com diferentes tipos de "prédios" (um prédio `IfStatement`, um prédio `VariableDeclaration`, etc.). Os "Visitantes" são especialistas que enviamos para fazer trabalhos nessa cidade:

1.  **`AstBuilderVisitor.js` (O Arquiteto):**
    * **Trabalho:** Visita a "Árvore de Parse" (Parse Tree) detalhada gerada pelo ANTLR4.
    * **Resultado:** Constrói uma árvore mais simples e limpa, focada na lógica: a **Árvore Sintática Abstrata (AST)**.

2.  **`InterpreterVisitor.js` (O Executor / "Eletricista"):**
    * **Trabalho:** Visita a **AST** (a árvore que o arquiteto acabou de construir).
    * **Resultado:** "Liga a energia" de cada prédio, ou seja, **executa** a lógica do programa passo a passo (armazenando variáveis, imprimindo no console, etc.).

### Q: Como o `InterpreterVisitor.js` "entende" e "executa" o código da AST?

**R:** Ele combina três conceitos principais:

1.  **A "Central de Distribuição" (Método `visit`):**
    O método principal `visit(node)` olha o campo `type` de cada nó (ex: `'IfStatement'`). Usando um `switch`, ele "despacha" o nó para o método especialista correto (ex: `this.visitIfStatement(node)`).

2.  **A "Memória" (Tabela de Símbolos):**
    O interpretador usa uma variável `this.symbolTable = new Map()` para funcionar como a memória do programa.
    * Quando ele visita um `VariableDeclaration` (`let a = 10`), ele armazena o valor: `symbolTable.set('a', 10)`.
    * Quando ele visita um `Identifier` (uso da variável `a`), ele busca o valor: `symbolTable.get('a')`.

3.  **A "Execução Recursiva" (De baixo para cima):**
    Para executar uma operação complexa como `if (a > 10)`, o interpretador resolve a árvore de baixo para cima:
    1.  `visitIfStatement` é chamado.
    2.  Ele pausa e chama `visit(node.test)` para resolver a condição `a > 10`.
    3.  `visitBinaryExpression` é chamado.
    4.  Ele pausa e chama `visit(node.left)` para resolver `a`.
    5.  `visitIdentifier` é chamado e retorna o valor de `a` (ex: `20`) da `symbolTable`.
    6.  `visitBinaryExpression` chama `visit(node.right)` para resolver `10`.
    7.  `visitLiteral` é chamado e retorna o valor `10`.
    8.  `visitBinaryExpression` agora tem os valores `20` e `10`. Ele calcula `20 > 10` e retorna `true`.
    9.  `visitIfStatement` recebe `true` e decide executar o bloco de código dentro do `if`.

### Q: O que acontece quando um arquivo com erro léxico (ex: `erro_lexico.ns`) é executado?

**R:** O `InterpreterVisitor.js` **nunca chega a ser executado**. O erro acontece na primeira fase do processo e interrompe tudo.

1.  O `main.js` inicia o processo e pede ao `Parser` para analisar o código.
2.  O `Parser` pede "tokens" ao `Lexer`.
3.  O `Lexer` lê o código e encontra um símbolo que não conhece (ex: `@`).
4.  O `Lexer` imediatamente reporta um erro ao `NovaScriptErrorListener`.
5.  O `NovaScriptErrorListener` identifica que é um erro "LÉXICO", imprime a mensagem de erro formatada (ex: "O símbolo '@' não é reconhecido...").
6.  O Listener chama **`process.exit(1)`**, o que **encerra imediatamente** todo o programa.

Como o programa é encerrado, as linhas de código em `main.js` que criam o `AstBuilderVisitor` e o `InterpreterVisitor` nunca são alcançadas.

### Q: Qual o propósito do Node.js e do Python no projeto?

**R:** Eles têm papéis totalmente diferentes: Node.js é o "Motor" e Python é a "Oficina".

* **Node.js (O Motor):** É o ambiente que **executa** o seu interpretador. Todo o código do interpretador (`main.js`, `InterpreterVisitor.js`, etc.) é escrito em JavaScript e o Node.js é o programa que o entende e executa. Ele também gerencia as dependências de *runtime* (como `antlr4` e `readline-sync`).

* **Python (A Oficina):** É usado **apenas** como um ambiente de *ferramentas* para o ANTLR4. O `requirements.txt` instala o `antlr4-tools`, que é uma ferramenta usada para **gerar** os arquivos (`NovaScriptLexer.js`, `NovaScriptParser.js`) a partir da gramática `NovaScript.g4`.

### Q: Por que usar a ferramenta Python (`antlr4-tools`) em vez do `.jar` oficial do ANTLR4 com Java?

**R:** A vantagem é a **conveniência na configuração do ambiente**.

O método tradicional exige que o desenvolvedor baixe manualmente o `.jar` do ANTLR4 e garanta que o Java (JDK) esteja instalado e configurado.

O pacote Python `antlr4-tools` é um **invólucro (wrapper)** que esconde essa complexidade. O desenvolvedor apenas cria um ambiente virtual Python e usa `pip install -r requirements.txt`. Essa ferramenta cuida de tudo e fornece comandos de terminal mais simples (como `antlr4` e `antlr4-parse`) que o `package.json` pode usar diretamente.

### Q: Como o interpretador lida com lógicas complexas como `Number(prompt(...))` e `if (a || b || c)`?

**R:** Ele lida com isso em duas fases, quebrando a complexidade:

1.  **Fase 2: Construção da AST (`AstBuilderVisitor`)**
    O `AstBuilderVisitor` transforma a sintaxe em uma árvore hierárquica que representa a lógica:
    * `Number(prompt(...))` torna-se um nó `CallExpression (Number)` que contém, como argumento, outro nó `CallExpression (prompt)`.
    * `a <= 0 || b <= 0 || c <= 0` torna-se uma árvore de nós `LogicalExpression (||)`, onde um `||` está aninhado dentro do outro.

2.  **Fase 3: Execução da AST (`InterpreterVisitor`)**
    O interpretador resolve essa árvore recursivamente, de dentro para fora e de baixo para cima.
    * **Para `Number(prompt(...))`:**
        1.  Ele visita o `CallExpression (Number)`.
        2.  Ele pausa para resolver o argumento, visitando o `CallExpression (prompt)`.
        3.  O `prompt` é executado e retorna uma *string* (ex: `"10"`).
        4.  A execução retorna para o `CallExpression (Number)`, que agora executa a função nativa `Number("10")` do JavaScript.
        5.  O resultado é o *número* `10`, que é então armazenado na `symbolTable`.
    * **Para `a <= 0 || b <= 0`:**
        1.  Ele visita o `LogicalExpression (||)`.
        2.  Ele pausa e visita o nó da esquerda (`a <= 0`).
        3.  Ele visita `a` (retorna `10`), visita `0` (retorna `0`), calcula `10 <= 0` (retorna `false`).
        4.  Ele visita o nó da direita (`b <= 0`), que também retorna `false`.
        5.  O `LogicalExpression` finalmente executa `false || false` e retorna `false`.