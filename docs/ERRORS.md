## Solução de Problemas

### **Erro: `antlr4` command not found**

**Causa:** Ferramentas ANTLR não instaladas.

**Solução:**

Ative o ambiente virtual Python

```bash
source .venv/bin/activate # Linux/macOS
.venv\Scripts\activate # Windows
```

Reinstale as ferramentas

```bash
pip install -r requirements.txt
```

---

### **Erro: `Module not found: antlr4`**

**Causa:** Dependências Node.js não instaladas.

**Solução:**

```bash
npm install
```

---

### **Erro: `ERRO LÉXICO [Linha X, Coluna Y]: Símbolo 'Z' inválido`**

**Causa:** Símbolo não reconhecido pela linguagem.

**Solução:** Verifique a sintaxe. NovaScript não suporta:
- Aspas simples (`'texto'`) - use aspas duplas (`"texto"`)
- Símbolos especiais como `@`, `$`, `#`
- Comentários (feature não implementada)

---

### **Erro: `Runtime Error: Variável 'x' não encontrada`**

**Causa:** Tentativa de usar variável não declarada.

**Solução:**

```ns
// Errado
console.log(idade);

// Correto
let idade = 25;
console.log(idade);
```

---

### **Código Lua não executa corretamente**

**Causa:** Diferenças de semântica entre NovaScript e Lua.

**Solução:** Consulte `docs/Mapeamento-NovaScript-Lua.md` para entender as conversões:
- `console.log()` → `print()`
- `prompt()` → `io.write() + io.read()`
- Operador `!=` → `~=`
- Concatenação `+` → `..` (strings)
