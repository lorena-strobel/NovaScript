-- Código Lua gerado pelo NovaScript

local nome = (function() io.write("Qual é o seu nome?" .. " "); return io.read() end)()
local idade = (function() io.write("Qual é a sua idade?" .. " "); return io.read() end)()
print("Olá, " .. nome .. "!")
print("Você tem " .. idade .. " anos.")
