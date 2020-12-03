
// FILTER

// O que filter() faz: como map(), filter() percorre o array da esquerda para a direita invocando uma função de retorno em cada elemento. O valor retornado deve ser um booleano que indica se o elemento será mantido ou descartado. Depois de todos os elementos terem sido analisados, filter() retorna um novo array com todos os elementos que retornaram como verdadeiro.
// Sintaxe : var newArray = arr.filter(callback[, thisArg])

// FILTRANDO PESSOAS NO ARRAY  COM IDADE ACIMA DE 30 ANOS
let pessoas = [
    { nome: "claudinei", idade: 47, },
    { nome: "claudia", idade: 50, },
    { nome: "milson", idade: 42, },
    { nome: "roseli", idade: 30, }
]

let maisIdade = pessoas.filter(function (x,) {
    return x.idade > 30;
})

console.table(maisIdade);  // table = tabela

// FILTRANDO A MAIOR POPULAÇÃO

let cidades = [
    { nome: 'São Paulo', populacao: 2344758549 },
    { nome: 'Rio de Janeiro', populacao: 1344758549 },
    { nome: 'Bahia', populacao: 7344758549 },
    { nome: 'Minas Gerais', populacao: 3344758549 },
];

let grandeCidades = cidades.filter(x => x.populacao > 3000000000);
let nome2 =grandeCidades.forEach(x => console.log(`${x.nome}: ${x.populacao}`));

console.log(grandeCidades);

// FILTRANDO NUMEROS PARES E DOBRANDO USANDO MAP

let numerosP = [1,4,6,7,10,13,14,19,20,21];

let numerosPar = numerosP.filter(x => x % 2 == 0).map(x => x * 2);

console.log(numerosPar);

console.log("=============================================")

// FILTRANDO STRING PELA LETRA INICIAL

let nome =[ 'claudinei','Marcia','Néia','Silvano','claudio','silvia','claudinéia'];

let nomeC = nome.filter(x => x.charAt()==='c');

console.log(nomeC);

console.log("=========================");



