
// MAP 



let numero = [45,4,9,16,25];

let numero2 = numero.map(dobro);

function dobro(valor){
    return valor * 2;

};
console.log(numero2);
console.log("--------------------");

let nomes = ['maria','neia','epaminondas','silvia','michaela'];

let nomes2 = nomes.map(maiuscula);

function maiuscula(valor,indice){
    return `${valor.toUpperCase()} - ${indice +1}`;
};
console.log(nomes2);

console.log("----------------------");

// OUTRA FORMA -> USANDO UMA  FUNÇÃO ANÔNIMA

let nomeA = ['milson','nei','rose',];

let nomeB = nomeA.map(function(valor,indice){
    return valor.toUpperCase();
})

console.log(nomeB);

