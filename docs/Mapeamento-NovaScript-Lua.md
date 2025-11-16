# Mapeamento NovaScript → Lua

Este documento descreve como as construções da linguagem NovaScript são traduzidas para Lua.

## Variáveis e Literais

| NovaScript | Lua | Observações |
|------------|-----|-------------|
| `let x = 10` | `local x = 10` | Declaração de variável local |
| `x = 20` | `x = 20` | Atribuição |
| `10` | `10` | Número inteiro |
| `3.14` | `3.14` | Número decimal |
| `"texto"` | `"texto"` | String |

## Operadores Aritméticos

| NovaScript | Lua |
|------------|-----|
| `a + b` | `a + b` |
| `a - b` | `a - b` |
| `a * b` | `a * b` |
| `a / b` | `a / b` |

## Entrada e Saída

| NovaScript | Lua | Observações |
|------------|-----|-------------|
| `console.log(x)` | `print(x)` | Saída no console |
| `prompt("Digite:")` | `io.write("Digite:"); io.read()` | Entrada do usuário |

## Operadores de Comparação

| NovaScript | Lua |
|------------|-----|
| `==` | `==` |
| `!=` | `~=` |
| `<` | `<` |
| `>` | `>` |
| `<=` | `<=` |
| `>=` | `>=` |

## Operadores Lógicos

| NovaScript | Lua |
|------------|-----|
| `&&` | `and` |
| `\|\|` | `or` |
| `!` | `not` |

## Estruturas de Controle

### If/Else

**NovaScript:**

```ns
if (x > 10) {
    console.log("maior")
} else {
    console.log("menor")
}
```

**Lua:**

```lua
if x > 10 then
    print("maior")
else
    print("menor")
end
```

### While

**NovaScript:**

```ns
while (i < 10) {
    console.log(i)
    i = i + 1
}
```

**Lua:**

```lua
while i < 10 do
    print(i)
    i = i + 1
end
```

### For

**NovaScript:**

```ns
for (let i = 0; i < 10; i = i + 1) {
    console.log(i)
}
```

**Lua:**

```lua
for i = 0, 9, 1 do
    print(i)
end
```

### Do-While

**NovaScript:**

```ns
do {
    console.log(i)
    i = i + 1
} while (i < 10)
```

**Lua:**

```lua
repeat
    print(i)
    i = i + 1
until not (i < 10)
```

---

**Notas:**
- Lua utiliza `local` para variáveis locais, equivalente ao `let` do NovaScript.
- Lua não usa ponto-e-vírgula `;` como terminador obrigatório.
- Blocos em Lua usam `then...end`, `do...end`, em vez de chaves `{}`.
