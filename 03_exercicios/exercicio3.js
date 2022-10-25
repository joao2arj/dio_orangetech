/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

var cond_pgto = '';
var val_etiqueta = 100;

if (cond_pgto == 'debito') {

    console.log("Pagamento: " + cond_pgto);
    console.log("Desconto: 10%");

    val_final = val_etiqueta*0.9;

    console.log("Valor final:" + val_final);

} else if (cond_pgto == 'dinheiro' || cond_pgto == 'PIX') {

    console.log("Pagamento: " + cond_pgto);
    console.log("Valor de etiqueta: " + val_etiqueta);
    console.log("Desconto: 15%");

    val_final = val_etiqueta*0.85;

    console.log("Valor final:" + val_final);

} else if (cond_pgto == 'duasx') {

    console.log("Pagamento: " + cond_pgto);
    console.log("Valor de etiqueta: " + val_etiqueta);
    console.log("Desconto: N/A");

    val_final = val_etiqueta;

    console.log("Valor final:" + val_final);

} else {

    console.log("Pagamento: " + cond_pgto);
    console.log("Valor de etiqueta: " + val_etiqueta);
    console.log("Acréscimo: 10%");

    val_final = val_etiqueta*1.1;

    console.log("Valor final:" + val_final.toFixed(2));

}