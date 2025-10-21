import antlr4 from 'antlr4';

class NovaScriptErrorListener extends antlr4.error.ErrorListener {
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        let errorType = "SINTÁTICO";
        let customMsg = msg;

        if (msg.startsWith("token recognition error")) {
            errorType = "LÉXICO";
            const invalidSymbol = msg.split("'")[1];
            customMsg = `O símbolo '${invalidSymbol}' não é reconhecido pela linguagem.`;
        
        } else if (msg.startsWith("mismatched input")) {
            const parts = msg.split("expecting");
            const unexpected = parts[0].replace("mismatched input", "").trim();
            const expected = parts[1] ? parts[1].trim() : "uma sintaxe diferente";
            customMsg = `Sintaxe inesperada. Encontrei ${unexpected}, mas esperava ${expected}.`;

        } else if (msg.startsWith("extraneous input")) {
            const extra = msg.split("'")[1];
            customMsg = `Código extra encontrado. O trecho '${extra}' não era esperado aqui.`;

        } else if (msg.startsWith("no viable alternative")) {
            const problematicInput = msg.split("'")[1] || "neste ponto";
            customMsg = `Comando incompleto ou inválido próximo a '${problematicInput}'. Verifique a sintaxe.`;
        }

        console.error(`ERRO ${errorType} [Linha ${line}, Coluna ${column}]: ${customMsg}`);

        process.exit(1);
    }
}

export default NovaScriptErrorListener;
