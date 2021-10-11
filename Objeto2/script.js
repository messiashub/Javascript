
/* let pessoa ={
    idade: 49,
    nome: "Claudinei",
    sobrenome:"Messias",
    altura:1.85,
    casado: false,
    aniversario: function(){
        pessoa.idade++;
    },
    nomeComSobrenome:()=>{
        console.log(`${pessoa.nome} ${pessoa.sobrenome}`)
    }
}

function apresentar(){
    console.log(`O nome da pessoa é ${pessoa.nome} e a idade dela  é ${pessoa.idade} anos.`);
    let calculo = pessoa.idade * pessoa.altura;
    console.log(`O calculo dessa pessoa é ${calculo}`)
    if(pessoa.idade >= 48){
        console.log("Já  ta caduca")

    }else{
        console.log('De boa!')
    }
}

apresentar();
pessoa.aniversario();
pessoa.aniversario();
console.log(pessoa);

pessoa.nomeComSobrenome();
 */

/* let num = "nei";
function Teste(){
    if(num){
        booleano = true;
        console.log(booleano);
    }else{
        booleano = false;
        console.log(booleano);
    }
};

Teste();
 */


function Pessoa(){
    return {nome:"Claudinei", idade: 48}
}

let p1 = Pessoa();

console.log(p1)

let p2 = Pessoa()

p2.nome= 'Mario';
p2.idade = 50;

console.log(p2);

/* ------------------------------------ */
function Pessoa2(){
    return {
        nome:"Milson",
        idade: 36,
        saudacao : function(){
            return `Olá ${this.nome}`
        }
    }
}

let p3 = Pessoa2()
console.log(p3)
console.log((p3.saudacao()));

let p4 = Pessoa2();
p4.nome ="Rosemary";
p4.idade = 60;

console.log(p4);
console.log(p4.saudacao());