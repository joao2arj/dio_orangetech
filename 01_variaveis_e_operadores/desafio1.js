/*
Faça um algoritmo que receba 3 variáveis:

1. Preço do litro de gasolina;
2. Consumo médio do carro por KM;
3. Distância em km que será percorrida.

Calcule o valor médio em R$ dessa viagem.
*/

let valor_litro = 5.5;
let consumo_medio = 12;     //12km/l
let dist_viagem = 560;

let valor_total = (dist_viagem/consumo_medio) * valor_litro;

console.log(valor_total);

console.log(valor_total.toFixed(2));    //A função '.toFixed' transforma o número em string fazendo com que suas casas decimais sejam expressas em parênteses.


