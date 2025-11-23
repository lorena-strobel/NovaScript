-- Código Lua gerado pelo NovaScript

local n = tonumber((function() io.write("Digite um numero: "); return io.read() end)())
if n < 1 then
    print("Erro: n deve ser >= 1")
else
    local i = 0
        while i < n do
        local j = 0
        local valor = 1
                while j <= i do
            io.write(string.format("%d ", valor))
            local numerador = i - j
            local denominador = j + 1
            local produto = valor * numerador
            valor = produto / denominador
            j = j + 1
        end

        print("")
        i = i + 1
    end

end

