
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

// Outro


function media(nota1,nota2){
    return (nota1 + nota2)/ 2;
}


function passou(media){

    if(media >= 5 ){
        return 'passou';
    }else{
        return 'repetiu';
    }
}

/* console.log(media(5, 4)); */
console.log(passou(media(5,5)));