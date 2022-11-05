//Criando uma classe a partir de um objeto:

/*
const pessoa = {
    nome: 'João Fonseca',
    idade: 21,
    peso: 71,

    descrever: function() {
        console.log(`Meu nome é ${this.nome}, minha idade é ${this.idade}.`);   //Para usar valores dentro da string, deve-se usar crase ´´;
                                //this assume o nome da variável/função/objeto;
    }
}; 
*/

class Pessoa {
    nome;
    idade;
    ano_nascimento;

    constructor(nome, idade) { //Constructor são parâmetros que são executados assim que um novo usuário é instanciado
        this.nome = nome;
        this.idade = idade;
        this.ano_nascimento = 2022 - idade;

    }
    
    descrever() {
        console.log(`Meu nome é ${this.nome}, minha idade é ${this.idade}, nasci em ${this.ano_nascimento}.`);
    }
}

//Função para comparar a idade de duas novas pessoas

function comapara_idade(p1, p2) {
    if(p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho que ${p2.nome}.`);
    } else if(p1.idade < p2.idade) {
        console.log(`${p1.nome} é mais novo que ${p2.nome}.`);
    } else {
        console.log(`${p1.nome} possui a mesma idade que ${p2.nome}.`);
    }
}

const joao = new Pessoa();  //Um novo usuário está sendo instanciado
console.log(joao);
joao.nome = 'João Fonseca';
joao.idade = 21;

// COM O CONSTRUCTOR:

const joao1 = new Pessoa('Joao', 21);

joao.descrever();
joao1.descrever();
comapara_idade(joao, joao1);