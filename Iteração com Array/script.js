
// Iterando em Arrays;


// USANDO O FOR
const bolsa = ['cartão de crédito', 'dinheiro', 'documentos', 'moedas', 'chaves'];

for (let index = 0; index < bolsa.length; index++) {
    console.log(`${index + 1} - ${bolsa[index]}`);
    if (bolsa[index] === 'documentos') {
        break;  //  Usando um break após ter achado 'documentos'
    }
};

console.log('---------------------');

// USANDO 0 FOR IN

const qualquer = ['chave', 'carro', 'moto', 'bike', 'skate', 'bola', 'videogame', 'telejogo'];

for (let objeto in qualquer) {
    console.log(`${objeto} - ${qualquer[objeto]}`);
    if (qualquer[objeto] === 'bike') {
        break;   //  Usando um break após ter achado 'bike'
    }
};
console.log("---------------");

// USANDO UM WHILE  -> Não recomendado para arrays
let index = 0
let coisas = ['Chave', 'dinheiro', 'moeda', 'alicate', 'pente', 'escova'];
while (index < coisas.length) {
    console.log(`${index + 1} - ${coisas[index]}`);
    index++;
    if (coisas[index] === 'pente') {
        break;
    }
}
console.log("------------------");

// USANDO O FOREACH

// O método forEach() executará uma função para cada elemento presente em um array.

let nomes = ['Claudinei', 'Marcelo', 'Marcos', 'Milson', 'Epaminondas', 'Claudio', 'Michel', 'Esdra'];
nomes.forEach((value, index) => {
    console.log(`${index + 1} - ${nomes[index]}`);
    /* if(nomes[value] === 'Claudio'){
        break; não funciona em foreach
    };
 */
});

let numeros = [2, 5, 7, 9, 8];

/* function dobra(n){
    console.log(n * 2) ;
};
 */
numeros.forEach(n => console.log(n * 2));

console.log("----------------------")

let total = 0;

function somar(n) {
    total += n;
    return (total);
}

numeros.forEach(somar);
console.log(total);

console.log("------------------");

let numeros2 = [2, 4, 7, 1];
let total1 = 0;

for (let n = 0; n < numeros2.length; n++) {  // FUNÇÃO PARA SOMAR VALORES
    total1 += numeros2[n];

}
console.log(total1);

console.log("-------------------------")

let tarefas = ['acordar cedo', 'tomar banho', 'escovar os dentes', 'tomar café', 'sair', 'mercado', 'comprar coisas'];

function mostrar(indice, valor) {
    /* console.log(`${valor + 1} - ${indice}`); */
    console.log(`${valor + 1} - ${indice}`);
};

tarefas.forEach(mostrar);

console.log("---------------------------");

let pedidos = [
    {id:420, nome:'Dener', alimento:'Sandubão de Bacon',bebida:'Suco de Limão'},
    {id:420, nome:'Claudinei', alimento:'Sandubão de Vegano',bebida:'Suco de Laranja'},
    {id:420, nome:'Isabel', alimento:'Coxinha',bebida:'Suco de Uva'},
    {id:420, nome:'José', alimento:'Pizza',bebida:'Refrigerante'}
];

pedidos.forEach((pedido,index)=>{
    let  {nome , alimento, bebida}= pedido;  // COLOCANDO AS PROPRIEDADES NUMA VARIÁVEL
    console.log(`${index + 1} O cliente ${nome} fez o pedido do alimento: ${alimento} e a bebida: ${bebida}`);
})













