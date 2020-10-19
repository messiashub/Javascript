
// FUNÇÕES
function media(){  //Declarando a função
    var nota1 = 10;
    var nota2 = 20;
    var media = (nota1 + nota2)/ 2;

    console.log(media);
}
media();  // Chamando a função, obs: sempre com parênteses

// PASSANDO ARGUMENTOS

function somar(n1,n2){
    var num1 = n1;
    var num2 = n2;
    var soma = (num1 + num2);
    console.log(soma);
}
somar(4,9);
somar(100,2)

// FUNÇÃO COM RETORNO

function dividir(n1,n2){
    var numero1 = n1;
    var numero2 = n2;
    return (numero1/numero2);
}
var resultado = dividir(10,2);

console.log(resultado);


function saudacao(){

    return "Olá Mundo!";
}

var s = saudacao();
console.log(s);

// FUNÇÕES ANÔNIMAS

var media = function(n1,n2){  // A variável recebe uma função
    return (n1 + n2)/2;
}

console.log(media(10,20));