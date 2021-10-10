
// CALLBACKS: 
/* São funções passadas como parâmetro para outra função */

// FOREACH

let $arr = ["claudinei","milson","claudio"];

let $arr2 = $arr.forEach(function (nome,indice) {
    console.log(nome.toUpperCase());
  })
console.log("---------")

let arr3 = ['MARCELO','CLAUDINEI','MILSON'];
arr3.forEach((nome)=> console.log( nome.toLowerCase()));

console.log('-----')

// FILTER
// MAP

let $numeros = [2,5,7,9,0];

function dobrar(valor){
    return valor * 2;
}

let $numDobra = $numeros.map(dobrar);
console.log($numDobra);

let nomes = ['joao','maria'];
let nomesNovo = nomes.map((nome)=> `(${nome})`);
console.log(nomesNovo);

let nomeP = nomes.map(function (nome){
    return `<p> ${nome} </p>`;
});
console.log(nomeP);