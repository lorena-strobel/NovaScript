grammar NovaScript;

programa
    : statement*
    ;

statement
    : (declaracao | escrever | ler | atribuicao) ';'?
    | condicional
    | laco
    ;

lista
    : declaracao
    | escrever 
    | ler
    | condicional
    | laco
    | atribuicao
    ;

declaracao 
    : 'let' lista_atrib
    ;

lista_atrib
    : ID ('=' expressao)? (',' ID ('=' expressao)?)*
    ;
    
lista_id
    : (',' ID '=' expressao )* ';'
    ;

ler
    : 'let' ID '=' funcao_conversao 'prompt' '(' STRING ')'
    | 'let' ID '=' 'prompt' '(' STRING ')'
    |'prompt' '(' STRING ')'
    ;
    
funcao_conversao
    : 'Number'
    | 'parseInt'
    | 'parseFloat'
    ;

escrever
    : 'console.log' '(' concatenacao_log* ')'
    ;
    
concatenacao_log
    : elemento_log ('+' elemento_log)* // concatenação 
    ;
    
elemento_log 
    : STRING 
    | expressao
    ;

expressao
    : expmat
    | STRING
    ;

expmat
    : termo (( '+' | '-' ) termo)*
    ;
termo
    : fator (( '*' | '/' ) fator)*
    ;

fator
    : numero
    | '(' expmat ')'
    ;

numero
    : INT
    | DECIMAL
    | ID
    ;

condicional
    : se
    ;

se 
    : 'if' '(' condicao ')' '{' bloco '}' ( 'else' '{' bloco '}' | 'else' 'if' '(' condicao ')' '{' bloco '}' )?
    ;

laco
    : 'do' '{' bloco '}' 'while' '(' condicao ')' ';'?
    | 'for' '(' inicio ';' condicao ';' final? ')' '{' bloco '}' 
    | 'while' '(' condicao ')' '{' bloco '}'
    ;

inicio
    : 'let' ID '=' expressao
    | ID '=' expressao
    ;

final
    : ID '=' expressao
    | ID ('++' | '--')
    ;

bloco
    : statement*
    ;

atribuicao
    : ID ('=' expressao | '++' | '--')
    ;

condicao
    : condicao_or
    ;

condicao_or
    : condicao_and ( '||' condicao_and )*
    ;

condicao_and
    : condicao_not ( '&&' condicao_not )*
    ;

condicao_not
    : '!' condicao_not
    | condicao_par
    ;

condicao_par
    : '(' condicao ')'
    | expmat ( '==' | '!=' | '>' | '<' | '>=' | '<=' ) expmat
    ;

ID: [a-zA-Z] [a-zA-Z0-9]* ;  
INT : [0-9]+;
DECIMAL: [0-9]+ '.' [0-9]+;
STRING : '"' (~["\r\n])* '"' ;
WS: [ \t\r\n]+ -> skip ;