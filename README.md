# NovaScript
Linguagem baseada em JavaScript

---

## Configuração do Ambiente
**Requisitos:**
- `Python3`

### Iniciar Ambiente Virtual (Python)
**Unix:**
```bash
$ python3 -m venv .venv
$ source .venv/bin/activate
$ pip install antlr4-tools
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
> (Obs.): `^D` significa `Ctrl + D` e indica “fim da entrada” no **Unix**; use `^Z` no **Windows**).

```bash
$ antlr4-parse NovaScript.g4 programa -tree
let num = 10;
^D
(prog:1 (expr:2 (expr:3 10) + (expr:1 (expr:3 20) * (expr:3 30))) <EOF>)
```

---

(continuação...)