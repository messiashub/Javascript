
// MAP 
// O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.

//1 DOBRAR NUMERO
let numero = [45,4,9,16,25];

let numero2 = numero.map(dobro);

function dobro(valor){
    return valor * 2;

};
console.log(numero2);
console.log("--------------------");

// 2 DOBRAR NUMERO COM UMA  FUNÇÃO ANÔNIMA DE CALLBACK;
let numeros = [2,4,7,25];
let numerosA = numeros.map(function(valor, index){
    return valor * 2;
});

console.log(numerosA);
console.log("--------------------------------")

// 3 DOBRAR NUMERO USANDO UMA ARROW FUNCTION
let num= [2,4,5,35];
let num2 = num.map(value => value * 2);

console.log(num2);
console.log("--------------------")

// TRANSFORMANDO EM MAIÚSCULAS
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
console.log("---------------------------------");

// OUTRA FORMA -> USANDO UMA  ARROW FUNCTION
let lista = ['claudio','kevin','bruno'];
let novaLista = lista.map(value => value.toUpperCase());

console.log(novaLista);

