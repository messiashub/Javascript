
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

console.log("-----------------------------------------------------------------")

// EXERCÍCIO

// Nome do aluno - nota 1 - nota 2 - média -Aprovado/Reprovado

var nomes = ["Claudinei","José","Epaminondas","Milson"];  //Arrays
var notasA = [7.0, 6.5, 9.5, 8.0];
var notasB = [8.0, 7.0, 8.5, 5.5];

function mediaTotal(n1,n2){  
    return (n1 + n2)/2

}
function passou(media3){    //Funções
        if(media3 >= 7){
            return "Aprovado";
        }else{
            return "Reprovado";
        }
    } 

for (var index in nomes){         //Estrutura de repetição
    var nota1 = notasA[index];
    var nota2 = notasB[index];
    var media3 = mediaTotal(nota1,nota2);
    console.log(`${nomes[index]}- ${nota1}- ${nota2} = ${media3} - ${passou(media3)}`);
}

console.log('_______________________________________________________________________________________________')


// OBJETO

// Relação entre uma chave e um valor
 
var aluno = {nome:"Claudinei", nota:5.8,};

console.log(aluno);

var aluno2 = {nome:"Milson",notas:[29,4.0]};
aluno2["sobrenome"]="Oliveira";           // Inserindo novas propriedades
aluno2.matricula=1234                      // Inserindo novas propriedades

var serie = "sérieA";                    // Inserindo novas propriedades

aluno2[serie]="abcd"

console.log(aluno2);


var aluno3 = new Object();
aluno3.nome = "nei";
aluno3.notas = [2.1, 4.5]

console.log(aluno3);
console.log("------------------------------------------------------------------")



// OBJETOS - MÉTODOS

// MÉTODOS SÃO FUNÇÕES DENTRO DE OBJETOS


function calcMedia(n1, n2){
    return(this.notas[0] + this.notas[1])/2;
}

var aluno4 ={nome:"Claudio", notas:[10,8], media: calcMedia
}
 var aluno5 ={nome:"Claudionor", notas:[20,8], media: calcMedia
} 

console.log(aluno4.nome);     // Claudio
console.log(aluno4.media());  // 9

console.log(aluno5.nome);    // Claudionor
console.log(aluno5.media()); // 14

console.log("---------------------------------------------------------")


// OBJETOS CONSTRUTORES

function criarAluno(nome,nota1,nota2){
    return {
        nome:  nome,
        nota1: nota1,
        nota2: nota2,
        media:function(){
            return (this.nota1 + this.nota2)/2;
        }

    }
}

 var turma = [
    criarAluno("claudinei",5.5, 5),
    criarAluno("Igor",9, 7.5),
    criarAluno("Diana", 10, 4, 5.5),
    criarAluno("Milson", 11, 4, 5.5),    
]

var aluno6 = turma[3];
/* var aluno6 = criarAluno(); */
console.log(aluno6);
console.log(aluno6.media()); //OBS: sempre usar parenteses para executar a função

// Usando um for

for(var aluno6 of turma){
    console.log(`nome: ${aluno6.nome}, nota1:${aluno6.nota1}, nota2${aluno6.nota2}, media = ${aluno6.media()}`);
}

// Outra maneira

function alunoA(nome,nota1,nota2){
    this.nome = nome;
    this.nota1 = nota1;
    this.nota2 = nota2;

    this.media = function(){
        return (this.nota1 + nota2)/2;
    }
}

var alunos = new alunoA("Vanessa", 10, 5.5)

console.log(alunos.nome);
