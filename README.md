# NovaScript
Linguagem baseada em **JavaScript**.

---

## Configuração do Ambiente
**Requisitos:**
- `Python3`
- `Node.js`


### Instalar pacotes necessários (Node.js)
```bash
$ npm install
```



### Iniciar Ambiente Virtual (Python)
**Unix:**
```bash
$ python3 -m venv .venv
$ source .venv/bin/activate
$ pip install -r requirements.txt
```

**Windows:**
```cmd
python -m venv .venv
.venv\Scripts\activate
pip install antlr4-tools
```

Esse comando cria os executáveis `antlr4` e `antlr4-parse` que, se necessário, baixarão e instalarão o **Java 11** e o **jar ANTLR** mais recente:

```bash
$ antlr4 
Downloading antlr4-4.13.2-complete.jar
ANTLR tool needs Java to run; install Java JRE 11 yes/no (default yes)? y
Installed Java in /Users/parrt/.jre/jdk-11.0.15+10-jre; remove that dir to uninstall
ANTLR Parser Generator  Version 4.13.2
 -o ___              specify output directory where all output is generated
 -lib ___            specify location of grammars, tokens files
...
```



### Analisar com uma gramática de exemplo
Para testar rapidamente no terminal a gramática:
> (Obs.): `^D` significa `Ctrl + D` e indica “fim da entrada” no **Unix**; use `^Z` no **Windows**).

```bash
$ antlr4-parse NovaScript.g4 programa -tree
let num = 10;
^D

// OUTPUT:
(prog:1 (expr:2 (expr:3 10) + (expr:1 (expr:3 20) * (expr:3 30))) <EOF>)
```



### Gerar os Arquivos do Analisador
Utilizando o **ANTLR4** para gerar os arquivos **JavaScript** a partir da gramática `NovaScript.g4`. Graças ao script configurado no `package.json`, isso facilita consideravelmente.

```bash
$ npm run antlr4
```



### Executar e Testar
```bash
$ node src/main.js examples/teste.ns

Iniciando análise...
Análise concluída com sucesso.

// OUTPUT:
(programa (statement (declaracao let (lista_atrib a = (expressao (expmat (termo (fator (numero 10))))))) ;) (statement (declaracao let (lista_atrib b = (expressao (expmat (termo (fator (numero 20))))))) ;) (statement (declaracao let (lista_atrib resultado = (expressao (expmat (termo (fator (numero a))) + (termo (fator (numero b))))))) ;) (statement (escrever console.log ( (concatenacao_log (elemento_log "O resultado da soma é: ") + (elemento_log (expressao (expmat (termo (fator (numero resultado))))))) )) ;))
```

---

(continuação...)
