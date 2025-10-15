### **Roadmap para Desenvolvimento do Analisador (JavaScript + ANTLR4)**

**Objetivo:** Entregar um analisador léxico e sintático funcional que atenda a todos os requisitos do trabalho até o dia 29/10.

***

### **Fase 1: Planejamento e Estruturação (Dias 1-4 | 15/10 a 18/10)**

O foco aqui é definir a base do projeto: a gramática e o ambiente de desenvolvimento. Uma boa fundação evita retrabalho.

* **Dia 1-2 (15/10 - 16/10): Ambiente e Gramática Inicial**
  * **Tarefa Principal:** Configurar o ambiente de desenvolvimento e escrever a primeira versão da gramática.
  * **Passos:**
1. **Configuração do Ambiente (Responsável A):**
   
            * Criar um repositório no Git.
            * Inicializar um projeto Node.js (`npm init -y`).
            * Instalar as dependências: `npm install antlr4` (ou `antlr4ts` se preferirem TypeScript, o que é recomendado pela sua experiência prévia ).
            * Instalar o Java Development Kit (JDK), um pré-requisito para executar o ANTLR4.
            * Configurar os scripts no `package.json` para gerar o parser a partir da gramática (ex: `"antlr4": "antlr4 -Dlanguage=JavaScript MyGrammar.g4 -visitor"`).
2. **Escrita da Gramática (Responsável B):**
   
            * Criar o arquivo `MinhaLinguagem.g4`.
            * Definir as regras léxicas (tokens) para palavras-chave (`se`, `enquanto`, `leia`), operadores (`+`, `-`, `&&`), tipos (`int`, `string`), identificadores e números, conforme o PDF.
            * Escrever as regras sintáticas iniciais para os comandos básicos (`leia`, `escreva`) e declarações.
   * **Meta:** Ao final do dia 2, o ambiente deve estar 100% funcional, e o ANTLR4 deve conseguir gerar os arquivos do parser sem erros a partir de uma gramática simples.
* **Dia 3-4 (17/10 - 18/10): Refinamento da Gramática e Expressões**
  * **Tarefa Principal:** Expandir a gramática para incluir expressões complexas e estruturas de controle.
  * **Passos (Trabalho em Dupla):**
1. **Implementar Expressões:** Adicionar as regras para expressões aritméticas e lógicas, prestando atenção na precedência e associatividade dos operadores. O `BASIQuinho` serve de exemplo em como estruturar isso.
2. **Estruturas de Controle:** Implementar as regras para `se...entao...senao` e `enquanto...faca`.
3. **Ajustes LL(1):** Revisar a gramática para remover ambiguidades, recursões à esquerda e aplicar fatoração, conforme sugerido no PDF. A documentação do ANTLR e o material de `Analise-Sintatica.pdf` são cruciais aqui.
   * **Meta:** Ter uma gramática `.g4` completa e robusta, que define toda a linguagem especificada no trabalho.

***

### **Fase 2: Implementação e Validação (Dias 5-9 | 19/10 a 23/10)**

Com a gramática pronta, o foco muda para a implementação do código que usa o parser gerado para analisar os arquivos-fonte.

* **Dia 5-6 (19/10 - 20/10): Driver e Análise Léxica**
  * **Tarefa Principal:** Criar o script principal e validar a saída do analisador léxico.
  * **Passos:**
1. **Script Principal (Responsável A):**
   
            * Criar um `index.js` (ou `main.ts`) que lê um arquivo de código-fonte como argumento da linha de comando.
            * Instanciar o `Lexer` gerado pelo ANTLR4 e alimentá-lo com o conteúdo do arquivo.
            * Iterar sobre os tokens gerados e imprimi-los no console no formato `<Tipo do Token, Lexema, Linha, Coluna>`, conforme exigido.
2. **Tratamento de Erros Léxicos (Responsável B):**
   
            * Implementar um `ErrorListener` customizado para o lexer, capturando símbolos inválidos e formatando a mensagem de erro exatamente como no PDF: `ERRO LÉXICO [Linha X, Coluna Y]: Símbolo 'Z' inválido`.
            * Adicionar a funcionalidade de log detalhado em arquivo de texto.
   * **Meta:** Ter um analisador léxico funcional que processa um arquivo, lista os tokens corretamente e reporta erros léxicos.
* **Dia 7-9 (21/10 - 23/10): Análise Sintática e Construção da AST**
  * **Tarefa Principal:** Integrar o parser e construir a Árvore Sintática Abstrata (AST).
  * **Passos:**
1. **Integração do Parser (Responsável A):**
   
            * No script principal, passar o stream de tokens do lexer para o `Parser` gerado pelo ANTLR4.
            * Invocar a regra inicial da gramática para iniciar a análise sintática.
            * Implementar um `ErrorListener` customizado para o parser, formatando as mensagens como no PDF: `ERRO SINTÁTICO [Linha X, Coluna Y]: Esperado 'A', encontrado 'B'`.
2. **Visitor para AST (Responsável B):**
   
            * Criar uma classe `MyVisitor` que herda do `Visitor` gerado pelo ANTLR4.
            * Implementar os métodos `visit...()` para cada regra da gramática (ex: `visitSe`, `visitEnquanto`).
            * Dentro de cada método, construir nós para a AST. A estrutura pode ser simples objetos JavaScript: `{ type: 'IfStatement', condition: ..., thenBody: ... }`.
            * Implementar uma função que converte a AST gerada para o formato DOT (Graphviz).
   * **Meta:** O programa deve ser capaz de analisar um código, validar sua sintaxe, reportar erros sintáticos e gerar um arquivo `.dot` representando a AST.

***

### **Fase 3: Testes, Refinamento e Entrega (Dias 10-14 | 24/10 a 29/10)**

A última fase é dedicada a garantir que tudo funcione, documentar o código e preparar a apresentação.

* **Dia 10-11 (24/10 - 25/10): Casos de Teste e Funcionalidade**
  * **Tarefa Principal:** Implementar e testar os programas obrigatórios.
  * **Passos (Trabalho em Dupla):**
1. Criar os arquivos de teste: `pascal.lang` e `triangulo.lang`.
2. Escrever o código-fonte para o **Triângulo de Pascal** e a **Classificação de Triângulos** na linguagem que vocês criaram.
3. Executar o analisador sobre esses arquivos e verificar se a AST é gerada corretamente e sem erros.
4. Criar testes de erro (código com erros léxicos e sintáticos) para garantir que o tratamento de erros está funcionando.
   * **Meta:** Garantir 100% de funcionalidade nos casos de teste exigidos, validando a nota de "Funcionalidade" (40%).
* **Dia 12-13 (26/10 - 27/10): Revisão e Documentação**
  * **Tarefa Principal:** "Limpar a casa": revisar o código, adicionar comentários e preparar a documentação.
  * **Passos (Trabalho em Dupla):**
1. **Revisão de Código:** Façam um *code review* um do outro para encontrar bugs e pontos de melhoria.
2. **Documentação:** Adicionar comentários JSDoc/TSDoc no código, explicando as partes mais complexas.
3. **README:** Escrever um `README.md` excelente (como o do `BASIQuinho`), explicando como configurar e executar o projeto. Isso cobre a nota de "Qualidade do código" (10%).
   * **Meta:** Um projeto limpo, bem documentado e fácil de ser avaliado.
* **Dia 14 (28/10 - 29/10): Preparação Final e Entrega**
  * **Tarefa Principal:** Preparar os slides da apresentação e fazer um ensaio final.
  * **Passos:**
1. **Apresentação:** Montar os slides cobrindo a gramática, arquitetura, desafios e demonstração da execução.
2. **Ensaio:** Apresentar um para o outro para cronometrar o tempo e refinar a fala.
3. **Entrega:** Submeter o link do repositório Git.
   * **Meta:** Uma apresentação clara e confiante que garanta a nota de "Apresentação" (40%) e a aprovação no curso.