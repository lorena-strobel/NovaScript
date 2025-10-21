### **Roadmap Completo para Desenvolvimento de Compilador (JavaScript + ANTLR4)**

* **Projeto:** Compilador Pedagógico para subconjunto de JavaScript.
* **Tecnologias:** JavaScript/Node.js e ANTLR4.
* **Prazo Total:** 14 dias (Início: 15 de Outubro | Entrega: 29 de Outubro).
* **Objetivo Final:** Entregar um analisador léxico, sintático e um interpretador funcional que processe e execute programas escritos na linguagem definida, passando nos casos de teste obrigatórios.

***

### **Fase 1: Planejamento, Ambiente e Definição da Gramática**

* **Período:** Dias 1-4 (15/10 a 18/10)
* **Meta da Fase:** Estabelecer um ambiente de desenvolvimento robusto e criar uma gramática ANTLR4 completa que formalize a sintaxe da linguagem.
* **Dia 1-2 (15/10 - 16/10): Configuração do Ambiente e Esboço da Gramática**
  * **Tarefa Principal:** Preparar todo o ferramental necessário e definir as regras léxicas e sintáticas fundamentais.
  * **Passos Detalhados:**
1. **Configuração do Ambiente de Desenvolvimento (Responsável A):**
   
            * **Versionamento:** Criar um repositório no Git e realizar o commit inicial.
            * **Projeto Node.js:** Inicializar um projeto com `npm init -y`.
            * **Dependências:** Instalar o runtime do ANTLR4 para JavaScript (`npm install antlr4`) e a biblioteca `readline-sync` para facilitar a implementação do comando `leia()`.
            * **Ferramental ANTLR4:** Fazer o download do JAR do ANTLR4 e garantir que o Java Development Kit (JDK) está instalado e configurado no `PATH` do sistema.
            * **Scripts NPM:** Configurar `scripts` no `package.json` para automatizar a geração do parser (ex: `"antlr:generate"`) e a execução do compilador (ex: `"start"`).
2. **Definição da Gramática (Responsável B):**
   
            * Criar o arquivo `MinhaLinguagem.g4` no diretório `grammar/`.
            * **Regras Léxicas (Tokens):** Definir os tokens para palavras-chave (`se`, `entao`, `senao`, `enquanto`, `faca`, `leia`, `escreva`), tipos (`int`, `string`), operadores (`+`, `-`, `*`, `/`, `&&`, `||`, `!`, `==`), identificadores (`ID`), números (`INT`), literais de string (`STRING`) e tratamento de espaços em branco e comentários.
            * **Regras Sintáticas Iniciais:** Escrever as regras de parser para a estrutura básica do programa (ex: `programa`), declarações de variáveis e os comandos simples `leia` e `escreva`.
* **Dia 3-4 (17/10 - 18/10): Expansão e Refinamento da Gramática**
  * **Tarefa Principal:** Completar a gramática com estruturas complexas e garantir que ela seja LL(1), livre de ambiguidades.
  * **Passos Detalhados (Trabalho em Dupla):**
1. **Expressões Complexas:** Implementar as regras para expressões aritméticas e lógicas, definindo a ordem de precedência e a associatividade dos operadores para evitar ambiguidades. Ex: `expr: expr ('*'|'/') expr | expr ('+'|'-') expr | ...`.
2. **Estruturas de Controle:** Adicionar as regras de parser para as estruturas `se...entao...senao` e `enquanto...faca`.
3. **Tratamento de Ambiguidade:** Revisar a gramática para eliminar recursões à esquerda e aplicar fatoração, se necessário, seguindo as sugestões do PDF da atividade. Testar com o ANTLR4 para garantir que não há conflitos.

***

### **Fase 2: Implementação do Analisador e Geração da AST**

* **Período:** Dias 5-8 (19/10 a 22/10)
* **Meta da Fase:** Desenvolver um analisador que leia um código-fonte, valide sua sintaxe, reporte erros de forma clara e gere uma Árvore Sintática Abstrata (AST) precisa como saída.
* **Dia 5-6 (19/10 - 20/10): Análise Léxica e Estrutura Principal**
  * **Tarefa Principal:** Construir o "driver" do compilador e validar a saída do analisador léxico.
  * **Passos Detalhados:**
1. **Script Principal (`main.js`):** Implementar o ponto de entrada que lê o nome do arquivo de código-fonte da linha de comando, carrega seu conteúdo e o passa para o analisador léxico.
2. **Integração do Lexer:** Instanciar o `Lexer` gerado pelo ANTLR4 e iterar sobre os tokens, imprimindo-os no formato exigido: `<Tipo do Token, Lexema, Linha, Coluna>`.
3. **Tratamento de Erros Léxicos:** Implementar um `ErrorListener` customizado para o lexer que captura símbolos inválidos e formata a mensagem de erro conforme a especificação: `ERRO LÉXICO [Linha X, Coluna Y]: Símbolo 'Z' inválido`.
* **Dia 7-8 (21/10 - 22/10): Análise Sintática e Construção da AST**
  * **Tarefa Principal:** Integrar o parser para validar a estrutura sintática e construir a AST usando o padrão Visitor.
  * **Passos Detalhados:**
1. **Integração do Parser:** No `main.js`, criar um `CommonTokenStream` a partir dos tokens do lexer e passá-lo para o `Parser` gerado.
2. **Tratamento de Erros Sintáticos:** Implementar um `ErrorListener` para o parser que reporte erros no formato: `ERRO SINTÁTICO [Linha X, Coluna Y]: Esperado 'A', encontrado 'B'`.
3. **Implementação do Visitor para AST:** Criar a classe `AstBuilderVisitor` que herda do `Visitor` gerado pelo ANTLR4. Implementar os métodos `visit...()` para cada regra da gramática, construindo uma estrutura de dados aninhada (objetos JavaScript) que represente a AST.
4. **Visualização da AST:** Desenvolver uma função que percorra a AST gerada e produza uma saída no formato DOT, permitindo a visualização com Graphviz.

***

### **Fase 3: Implementação do Interpretador (Motor de Execução)**

* **Período:** Dias 9-12 (23/10 a 26/10)
* **Meta da Fase:** Criar um interpretador que percorra a AST e execute a lógica do programa, incluindo manipulação de variáveis, controle de fluxo e interação com o usuário (entrada/saída).
* **Dia 9-10 (23/10 - 24/10): Lógica Central do Interpretador e I/O**
  * **Tarefa Principal:** Desenvolver o núcleo do interpretador e implementar os comandos de entrada e saída.
  * **Passos Detalhados:**
1. **Classe `Interpretador`:** Criar uma nova classe `InterpreterVisitor` que também percorre a AST.
2. **Tabela de Símbolos:** Implementar uma tabela de símbolos (um `Map` ou objeto) dentro do interpretador para armazenar variáveis e seus valores durante a execução.
3. **Execução de Expressões e Atribuições:** Implementar os métodos `visit` para nós de expressão (avaliando operações aritméticas/lógicas) e nós de atribuição (atualizando a tabela de símbolos).
4. **Comandos de I/O:**
   
            * `visitEscrevaStatement`: Implementar para que use `console.log()` para imprimir o valor da expressão no terminal.
            * `visitLeiaStatement`: Implementar para que use `readline-sync` para pausar a execução e aguardar a entrada do usuário, armazenando o valor na variável especificada na tabela de símbolos.
* **Dia 11-12 (25/10 - 26/10): Controle de Fluxo e Execução dos Casos de Teste**
  * **Tarefa Principal:** Finalizar o interpretador com as estruturas de controle e validar toda a funcionalidade com os programas obrigatórios.
  * **Passos Detalhados:**
1. **Implementação de Controle de Fluxo:**
   
            * `visitSeStatement`: Avaliar a expressão condicional e visitar recursivamente apenas o bloco `then` ou o bloco `else`.
            * `visitEnquantoStatement`: Implementar um loop `while` que avalia a condição a cada iteração e, se verdadeira, visita o corpo do laço.
2. **Execução dos Programas de Teste:**
   
            * Escrever os códigos-fonte para "Triângulo de Pascal" e "Classificação de Triângulos" na sua linguagem.
            * Executar o compilador/interpretador completo com esses arquivos.
            * Depurar e refinar o interpretador e a tabela de símbolos até que a saída dos programas seja exatamente a esperada, incluindo o tratamento de casos de borda (ex: `n=0` ou lados de triângulo inválidos).

***

### **Fase 4: Refinamento, Documentação e Preparação para Entrega**

* **Período:** Dias 13-14 (27/10 a 29/10)
* **Meta da Fase:** Polir o projeto, documentá-lo completamente e preparar uma apresentação clara e profissional para a avaliação final.
* **Dia 13 (27/10): Polimento e Tratamento de Erros Semânticos**
  * **Tarefa Principal:** Realizar uma revisão completa da qualidade do código e adicionar verificações de erros de execução.
  * **Passos Detalhados:**
1. **Erros Semânticos/Runtime:** Adicionar verificações no interpretador para erros como "uso de variável não declarada" (verificar se a chave existe na tabela de símbolos) ou "divisão por zero".
2. **Revisão de Código (Code Review):** A dupla deve revisar o código um do outro para identificar bugs, melhorar a legibilidade e garantir a consistência do projeto.
3. **Documentação Interna:** Adicionar comentários claros (JSDoc) nas funções e classes mais complexas.
* **Dia 14 (28/10 - 29/10): Documentação Final e Preparação da Apresentação**
  * **Tarefa Principal:** Finalizar todos os artefatos do projeto e preparar-se para a apresentação.
  * **Passos Detalhados:**
1. **Elaboração do `README.md`:** Escrever um `README.md` detalhado, explicando a linguagem, a arquitetura do compilador (com o interpretador), como configurar o ambiente e como executar o projeto com exemplos.
2. **Preparação dos Slides:** Criar uma apresentação em slides que cubra os objetivos, a gramática, os desafios encontrados, a arquitetura final e, o mais importante, uma **demonstração ao vivo** da execução dos casos de teste.
3. **Ensaio Final:** Realizar um ensaio completo da apresentação para garantir que o tempo está adequado e que a comunicação é clara.
4. **Entrega (29/10):** Submeter o link do repositório Git contendo todo o projeto finalizado.
