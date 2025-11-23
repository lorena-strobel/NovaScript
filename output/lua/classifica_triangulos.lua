-- Código Lua gerado pelo NovaScript

local a = tonumber((function() io.write("Digite o valor de a: "); return io.read() end)())
local b = tonumber((function() io.write("Digite o valor de b: "); return io.read() end)())
local c = tonumber((function() io.write("Digite o valor de c: "); return io.read() end)())
if a <= 0 or b <= 0 or c <= 0 then
    print("Erro: Valores devem ser positivos e maiores que zero")
else
        if a + b > c and a + c > b and b + c > a then
                if a == b and b == c then
            print("Triangulo equilátero válido")
        else
                        if a == b or a == c or b == c then
                print("Triangulo isósceles valido")
            else
                print("Triangulo escaleno valido")
            end

        end

    else
        print("Medidas invalidas")
    end

end

