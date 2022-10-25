/*
Faça um algoritmo que receba 3 variáveis:

1. Preço do litro de gasolina;
1.1. Preço do litro de álcool;
2. Consumo médio do carro por KM;
3. Distância em km que será percorrida.

Calcule o valor médio em R$ dessa viagem.
*/

let valor_gas = 5.5;
let valor_alc = 3.5;
let consumo_gas = 12;
let consumo_alc = 9;
let dist = 125;

let tipo_comb = 'gasolina';

if (tipo_comb == 'gasolina') {
    let gas = (dist / consumo_gas) * valor_gas;
    console.log("Combustível utilizado: gasolina\nValor total: R$ ");
    console.log(gas.toFixed(2));
} else {
    let alc = (dist / consumo_alc) * valor_alc;
    console.log("Combustível utilizado: álcool\nValor total: R$ ");
    console.log(alc.toFixed(2));
}