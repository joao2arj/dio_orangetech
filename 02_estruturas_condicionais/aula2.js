var num1 = 0;

var bool = false;
var isbool = true; //CONVENÇÃO: usar sempre i prefixo 'is' antes de qualquer variavel do tipo bool;

const par = (num1 % 2) === 0;
console.log(par);

if (num1 === 0){
    console.log('Formato de número inválido.');
} else if (par) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}

/*
if (!par) {     //O dígito '!' antes da condição serve justamente para alterar o valor para o seu inverso, se true > falso e se falso > true
   console.log("O número é ímpar.")
}
*/

/*  
= > atribuição
== > ignora o tipo da variável para a igualdade
=== > igualdade entre dados de mesmo tipo
*/


