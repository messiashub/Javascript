
// FUNÇÃO

function meuNome(nome, sobrenome){
    console.log(`Meu nome é ${nome} ${sobrenome}`);
}

meuNome('claudinei','messias');

meuNome('KELLY','FERREIRA');

// OUTRO 

let nome = function(x,y){
    return (`Meu nome é ${x} ${y}`)
}

console.log(nome('Nilda','de Souza'));

// Outro

let soma = (n,x)=> console.log(`A soma entre ${n} e ${x} é = ${n + x}`);

soma(16,4);