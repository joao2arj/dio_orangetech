function gastomed(comb, km, consumo) {
    if(comb == "gas"){
        return (km/consumo)*4.5;
    } else if(comb == "alc"){
        return (km/consumo)*3.7;
    }
}

class Carro{    //Classes sempre se iniciam com letras maiúsculas
    marca;
    cor;
    comb;
    desc() {
        console.log(`Marca: ${this.marca}, cor: ${this.cor}, tipo de combustível: ${this.comb}, gasto médio ao viajar 100km: ${gastomed(this.comb, 100, 11)}`);
    }

    constructor(marca, cor, comb){
        this.marca = marca;
        this.cor = cor;
        this.comb = comb;
    }
}

const chevrolet = new Carro('Chevrolet', 'Preto', 'gas');
chevrolet.desc();

const fiat = new Carro('Fiat Uno', 'Branco', 'alc');
fiat.desc();