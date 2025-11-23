-- Código Lua gerado pelo NovaScript

local idade = 25
local temCarteira = true
if idade >= 18 and temCarteira then
    print("Pode dirigir")
else
    print("Não pode dirigir")
end

local temDinheiro = false
local temCartao = true
if temDinheiro or temCartao then
    print("Pode comprar")
else
    print("Sem condições de compra")
end

local chovendo = false
if not (chovendo) then
    print("Dia ensolarado")
end

