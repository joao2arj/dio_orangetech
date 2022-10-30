function calculo_imc(peso, altura) {
    let imc = peso / Math.pow(altura, 2);
    return imc;
}

function classificar_imc(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso.";
    } else if (imc >= 18.5 && imc < 25) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        return "Acima do peso.";
    } else if (imc >= 30 && imc < 40) {
        return "Obeso.";
    } else {
        return "Obesidade grave.";
    }
}

function main(){
    let peso = 75;
    let altura = 1.75;
    
    const imc = calculo_imc(peso, altura);
    console.log(classificar_imc(imc));
}

//init

main();