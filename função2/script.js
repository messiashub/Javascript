
/* Funções são tipos de dados estruturais, que são declarados dessa forma: function nomeFunção() { código à cer executado }
 e para executar a função, usa-se: nomeFunção(). Uma função é importante para o agrupamento e reutilização de código. */


// Criar um aplicativo  de frases motivacionais


// declaração da função
/* function createPhrases(){
    console.log('Estudar é muito bom!');
    console.log('Paciência e persistência!');
    console.log('Revisão é mãe do aprendizado!');
}; */

// chamando a função
/* createPhrases(); */

///////////////

/* Função com parametros */
/* const sum = function(a,b){
    let total = a + b;
    console.log(total);
};
sum(4,5);
sum(3,6); */

/* Função com Retorno */

/* const sum2 = function(n1,n2){
    let total2 = n1 + n2;
    return `A soma de de n1 + n2 é ${total2}`
}

console.log(sum2(4,6)); */


// RETORNO DE FUNÇÕES COM ARRAYS E OBJETOS

/* function arrays(){      
    return[1,2,3,4,5,6,7,8,9,10];
}

function calc(){

    let soma = arrays()[1] + arrays()[9];
    return soma;
    
}

console.log(arrays()[1]);
console.log(calc());

//////
function obj(){     
    return{
        nome:"Claudinei",
        sobrenome : "Messias",
        idade: 48,
        trabalhando:false,
    }
}

console.log(obj().nome);
console.log(`${obj().nome} ${obj().sobrenome} esta trabalhando: ${obj().trabalhando}`); */


//  PARÂMETROS DE FUNÇÕES COMO ARRAYS E OBJETOS

/* let arr = ["nei",3,6,9,10]; */ /* Array */

/* function myFunction(arr){
    return arr;

};
console.log(myFunction(arr));
console.log(myFunction(arr)[4]);
console.log('//////////'); */

////////////////
/* let obj = {                   
    nome:"Claudio",  
    sobrenome:"Cavalcante",
    idade:48,
    peso:78
};

function myObjet(obj){
    return obj;
}

console.log(myObjet(obj));
console.log(myObjet(obj.nome)) */

// SWITCH

/* let idade =4 */
/* function validade(idade){


    switch(idade){
        case 18:
            console.log("de maior");
        break;
        case 17: 
        console.log("não passa")
        
        break;
       
    }
}

validade(13); */

////////////

// FUNCTION HOISTING


//ARROW FUNCTIONS


//Callback function

/*f unction sayMyName(name){
    console.log(name);
}

sayMyName('nei'); */


// FUNÇÕES CONSTRUTORAS

/* Funções construtoras são utilizadas para criar novos objetos e geralmente tem a sua primeira letra maiúscula, todos com as mesmas características que são criadas na função, usando a palavra reservada this para se referir ao objeto sendo criado, por exemplo: */

/* 
    function() constructor
    * expressão new
    * criar um novo objeto
    * this keyword
 */

/* function Person(name,idade){
    this.name = name;
    this.walk = ()=>` ${this.name} está andando!`;
    this.idade = ()=> `${this.name} tem ${idade} anos`;
   
}

const Claudinei = new Person('claudinei',45);
const Claudio = new Person('claudio')

console.log(Claudinei.idade());
console.log(Claudio.walk()); */

/* console.log(claudinei) */


// MANIPULANDO ARRAYS

let techs = ["html", "css","js"];

// adicionar um item no fim
techs.push("node.js");

// adicionar no começo do array
techs.unshift('bootstrap');

// remover do fim
techs.pop();

// remover do começo
techs.shift();
console.log(techs);

for(let i = 0 ; i<= 20;i++){
    i % 2 === 0 ? console.log(i):"";
}

console.log('////')

let arr = ["claudio",'milson','epaminondas',{nome:'claudinei',idade:49,sexo:"masculino"}];

let quant = arr.length;
console.log(quant);

for(let i = 1;i<=quant;i++){

    i === 2? console.log(arr[i]):"";
    /* console.log(i); */
}


let arr2 = ["Epaminondas","Claudio","Sergio", 1, 2, 50];

function atualiza(){
    arr2.push(["Um","Dois","Tres"]);
    return arr2[6];
}
console.log(atualiza())

let metodo = {name:"Claudinei", função: function(x,y){
    return x + y;
}}

console.log(metodo.função(9,1));


let nome = "Claudinei";
let numero = 3;
let ar = [];
let obj = {};

document.write(`<p> ${typeof nome}</p>`);
document.write(`<p> ${typeof numero}</p>`);
document.write(`<p> ${typeof ar}</p>`);
document.write(`<p> ${typeof obj}</p>`);