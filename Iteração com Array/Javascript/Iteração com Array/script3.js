
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
let nome2 = grandeCidades.forEach(x => console.log(`${x.nome}: ${x.populacao}`));

console.log(grandeCidades);

// FILTRANDO NUMEROS PARES E DOBRANDO USANDO MAP

let numerosP = [1, 4, 6, 7, 10, 13, 14, 19, 20, 21];

let numerosPar = numerosP.filter(x => x % 2 == 0).map(x => x * 2);

console.log(numerosPar);

console.log("=============================================")

// FILTRANDO STRING PELA LETRA INICIAL

let nome = ['claudinei', 'Marcia', 'Néia', 'Silvano', 'claudio', 'silvia', 'claudinéia'];

let nomeC = nome.filter(x => x.charAt() === 'c');

console.log(nomeC);

console.log("=========================");

// REDUCE 

// APLICANDO EM OBJETOS -> SOMANDO

const foguetes = [
    { pais: "Russia", lancamentos: 32 },
    { pais: "EUA", lancamentos: 22 },
    { pais: "Japão", lancamentos: 12 },
    { pais: "Brasil", lancamentos: 2 }
];

const totalLan = foguetes.reduce(function (total, atual) {
    return total + atual.lancamentos;
}, 0);

console.log(totalLan);

console.log("-----------------------------------------")

// O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.
// O método reduce() executa a função de callback uma vez para cada elemento presente no array, excluindo furos (valores indefinidos), recebendo quatro argumentos:
/*1 acumulador - valor inicial (ou o valor do callback anterior),
  2 valorAtual - o valor do elemento atual
  3 index - o índice atual e
  4 array - o array onde a iteração está ocorrendo.
*/

let num = [1, 2, 5, 7];

function somar(a, b) {   // FUNÇÃO FORNECIDA  POR VOCÊ
    return a + b;
};

let somado = num.reduce(somar, 0);  // Sempre colocar um valor  inicial 
console.log(somado);

// USANDO UMA FUNÇÃO DE CALLBACK
let nA = [5, 6, 8, 0, 2];

let nB = nA.reduce(function (ac, va) {
    return ac + va;
}, 0);  //  // Sempre colocar um valor  inicial 

console.log(nB);

// USANDO UMA ARROW FUNCTION

let nu1 = [2, 5, 8, 10];

let nu2 = nu1.reduce((acomulador, item) => acomulador + item, 0);  // acomulador = valor inicial, item o elemento dentro do array

console.log(nu2);

// VARIÁVEL RECEBENDO O ARRAY  JA COM  O REDUCE

let numA = [3, 5, 6, 10].reduce((aC, vA) => aC + vA, 0);

console.log(numA);
console.log("------------------")

// CONTANDO  VALORES IGUAIS EM UM OBJETO 
let nomes4 = ['Alice', 'Bartolomeu', 'Epaminondas', 'Claudinei', 'Claudio', 'Alice', 'Bartolomeu', 'Alice'];

let quantidade = nomes4.reduce(function (atual1, p) {
    if (p in atual1) {  // O operador in retorna  true se a propriedade especificada estiver no objeto especificado.
        atual1[p] = atual1[p] + 1;
    } else {
        atual1[p] = 1;
    }
    return atual1;
}, {});
console.log(quantidade);

// USANDO TODOS OS MÉTODOS JUNTOS

let funcionarios = [
    { nome: 'Clauderson', departamento: 'financeiro', salario: 1500 },
    { nome: 'Rita', departamento: 'financeiro', salario: 1200 },
    { nome: 'Ben', departamento: 'marketing', salario: 2000 },
    { nome: 'Rudy', departamento: 'marketing', salario: 1750 },
    { nome: 'Hipólita', departamento: 'financeiro', salario: 1000 },
];

// 1 filtra o departamento financeiro  (FILTER)
// 2 financeiro recebe 50%             (MAP)
// 3 Somar os valores                  (REDUCE)


let financeiro = funcionarios
.filter((fun, index)=> fun.departamento === 'financeiro') 
.map(salario => salario.salario *= 1.5)
.reduce((total, valor) => total + valor); 
 
console.log(financeiro)