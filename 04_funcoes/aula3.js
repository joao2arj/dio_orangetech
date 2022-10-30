//Funções são trechos de códigos que podem ser convocados a qualquer momento; São objetos do tipo função;

//PROCEDIMENTOS = Funções que não devolvem nada (não possuem output definido, ex: operações, calculadora...);

/*para executar uma função a partir do momento em que ela é criada, segue:

function Texto() {
    console.log('teste');
}

Fica:

(function Texto() {
    console.log('teste');
})();

*/


function Texto() {
    console.log('teste');
}

function Nome(nome) { //Dentro dos () serão definidos os parâmetros a serem declarados quando a função for executada.
    console.log('Meu nome é: ' + nome);
}

function Quadrado(num) {
    console.log(num * num);
    //ou
    //return num * num;
}

function JurosADD(valor, acrescimo) {
    const valacrescimo = (acrescimo/100) + 1;
    let total = valor * valacrescimo;
    console.log(total.toFixed(2));
}

Texto(); //Para executar a função, usa-se o seu nome + () > parâmetros.

Nome('João Fonseca');

Quadrado(2);
const QuadradoDez = Quadrado(10);

JurosADD(100, 10);