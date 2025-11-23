-- Código Lua gerado pelo NovaScript

local numero
repeat
    numero = tonumber((function() io.write("Digite um numero positivo:"); return io.read() end)())
until not (numero <= 0)

print("Número válido: " .. numero)
