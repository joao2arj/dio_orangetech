/* Um objeto pode receber vários valores dentro de uma variável/constante. */

const pessoa = {
    nome: 'João Fonseca',
    idade: 21,
    peso: 71,

    descrever: function() {
        console.log(`Meu nome é ${this.nome}, minha idade é ${this.idade}.`);   //Para usar valores dentro da string, deve-se usar crase ´´;
                                //this assume o nome da variável/função/objeto;
    }
};

pessoa.altura = 1.90; //Objetos são considerados dinâmicos, ou seja, podem receber valores após declarados;
console.log(pessoa); //Exibe todos os dados contidos dentro da variável;
delete pessoa.altura; //Deleta um objeto específico;
console.log(pessoa);

console.log(pessoa.nome);
console.log(pessoa.idade);
//ou
console.log(pessoa['idade']);
pessoa.descrever();
