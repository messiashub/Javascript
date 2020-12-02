
// MAP 
// O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.

//1 DOBRAR NUMERO
let numero = [45, 4, 9, 16, 25];

let numero2 = numero.map(dobro);

function dobro(valor) {
    return valor * 2;

};
console.log(numero2);
console.log("--------------------");

// 2 DOBRAR NUMERO COM UMA  FUNÇÃO ANÔNIMA DE CALLBACK;
let numeros = [2, 4, 7, 25];
let numerosA = numeros.map(function (valor, index) {
    return valor * 2;
});

console.log(numerosA);
console.log("--------------------------------")

// 3 DOBRAR NUMERO USANDO UMA ARROW FUNCTION
let num = [2, 4, 5, 35];
let num2 = num.map(value => value * 2);

console.log(num2);
console.log("--------------------")

// TRANSFORMANDO EM MAIÚSCULAS
let nomes = ['maria', 'neia', 'epaminondas', 'silvia', 'michaela'];

let nomes2 = nomes.map(maiuscula);

function maiuscula(valor, indice) {
    return `${valor.toUpperCase()} - ${indice + 1}`;
};
console.log(nomes2);

console.log("----------------------");

// OUTRA FORMA -> USANDO UMA  FUNÇÃO ANÔNIMA

let nomeA = ['milson', 'nei', 'rose',];

let nomeB = nomeA.map(function (valor, indice) {
    return valor.toUpperCase();
})

console.log(nomeB);
console.log("---------------------------------");

// OUTRA FORMA -> USANDO UMA  ARROW FUNCTION
let lista = ['claudio', 'kevin', 'bruno'];
let novaLista = lista.map(value => value.toUpperCase());

console.log(novaLista);
console.log("--------------------------------");

// SIMULANDO UM REAJUSTE DE PREÇOS
let produtos = [
    {
        nome: "Smartphone 5' Android",
        preco: 1200
    },
    {
        nome: "Notebook 4GB Windows 10",
        preco: 2100
    },
    {
        nome: "SmartTV 50' LED",
        preco: 8700
    }
];

let produtosComReajuste = produtos.map(function(valor){
    return {
        nome:valor.nome,
        preco:valor.preco * 1.15
    }
});

produtosComReajuste.forEach(function(valor){
    console.log(`${valor.nome} - R$ ${valor.preco.toLocaleString('pt-BR')},00`)
});
console.log("----------------------------------");

//  MAPEANDO TODO ARRAY PRODUTO
 let produto = [
     { id: 1, nome:'detergente', valor: 2.00, categoria: 'limpeza'},
     { id: 2, nome:'amaciante', valor: 6.50, categoria: 'limpeza'},
     { id: 3, nome:'pãp', valor: 2.00, categoria: 'alimento'},
     { id: 4, nome:'queijo', valor: 7.00, categoria: 'alimento'},
     { id: 5, nome:'leite', valor: 2.20, categoria: 'alimento'},
 ];

 let id= produto.map(produto => produto.id);
 let nome= produto.map(produto => produto.nome);
 let valor= produto.map(produto => produto.valor);
 let categoria= produto.map(produto => produto.categoria);

 console.log(id);
 console.log(nome);
 console.log(valor);
 console.log(categoria);

 // FILTRANDO SÓ A CATEGORIA DE ALIMENTO E IMPRIMINDO
 let alimentos = produto.filter(p => p.categoria === 'alimento');
 console.log(alimentos);
// MAPEANDO E PEGANDO SÓ OS NOMES DO PRODUTO
 console.log(alimentos.map(p => p.nome));






