## Exemplos

### Catálogo Completo de Exemplos

| Arquivo | Descrição |
|---------|-----------|
| `teste.ns` | Operações aritméticas básicas |
| `teste_completo.ns` | Loop while com condicional |
| `teste_io.ns` | Entrada e saída interativa |
| `teste_sem_pv.ns` | Sintaxe sem ponto-e-vírgula |
| `test_arithmetic.ns` | Teste de operadores aritméticos |
| `test_conditionals.ns` | Teste de estruturas if/else |
| `test_else_if.ns` | Teste de else if aninhado |
| `test_logical.ns` | Teste de operadores lógicos |
| `test_io_interactive.ns` | Entrada com conversão de tipos |
| `while.ns` | Loop while simples |
| `for.ns` | Loop for com incremento |
| `dowhile.ns` | Loop do-while |
| `triangulo_pascal.ns` | Algoritmo triângulo de Pascal |
| `classifica_triangulos.ns` | Classificador de triângulos |
| `erro_lexico.ns` | Exemplo de erro léxico |
| `erro_sintatico.ns` | Exemplo de erro sintático |
| `erro_custom.ns` | Exemplo de erro de execução |

---

### Exemplo Básico (`teste.ns`)

```ns
let a = 10;
let b = 20;
let resultado = a + b;

console.log("O resultado da soma é: " + resultado);
```

**Executar:**

```bash
node src/main.js examples/teste.ns
```

---

### Loop com Condicional (`teste_completo.ns`)

```ns
let i = 0;
let max = 5;

while (i < max) {
    if (i == 2) {
        console.log("Encontrei o 2");
    } else {
        console.log("Iteração: " + i);
    }
    i++;
}
```

**Executar:**

```bash
node src/main.js examples/teste_completo.ns
```

---

### Entrada Interativa (`teste_io.ns`)

```ns
let nome = prompt("Digite seu nome: ");
let idade = Number(prompt("Digite sua idade: "));

console.log("Olá, " + nome + "!");
console.log("Você tem " + idade + " anos.");
```

**Executar:**

```bash
node src/main.js examples/teste_io.ns
```

---

### Triângulo de Pascal (`triangulo_pascal.ns`)

```ns
let n = Number(prompt("Digite um numero: "));

if (n < 1) {
    console.log("Erro: n deve ser >= 1");
} else {
    let i = 0;
    while (i < n) {
        let j = 0;
        let valor = 1;
        while (j <= i) {
            console.log(valor + " ");
            
            let numerador = i - j;
            let denominador = j + 1;
            let produto = valor * numerador;
            valor = produto / denominador;

            j = j + 1;
        }
        console.log("");
        i = i + 1;
    }
}
```

**Executar:**

```bash
node src/main.js examples/triangulo_pascal.ns
```