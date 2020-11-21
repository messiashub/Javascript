

let cont;

for (cont = 0; cont < 5; cont++) {
    console.log(cont + 1);
}


console.log('////////////////////////////');

// USANDO EM UM ARRAY
//EX:1
let num = [];
num.push(0);
num.push(1);
num.push(2);
num.push(3);

for (i = 0; i < 4; i++) {
    console.log(num[i]);
}
console.log("///////////////////")

//EX: 2

let mochila = [        // 4 linhas e 2 colunas;
    ['faca', 1], 
    ['alicate', 1], 
    ['colher', 2], 
    ['cerveja', 10]]   

for (let linha = 0; linha < 4; linha++) {        // controla a linha
    for (let coluna = 0; coluna < 2; coluna++) { //controla a coluna
        console.log(mochila[linha][coluna]);
    }
    /* console.log('\n'); */

}