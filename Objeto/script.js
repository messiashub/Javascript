
// OBJETO JAVASCRIPT

// Um objeto é uma coleção de dados e/ou funcionalidades relacionadas (que geralmente consistem em diversas variáveis e funções — 
// que são chamadas de propriedades e métodos quando estão dentro de objetos).

let carro = {
    marca: "Corsa",  // Propriedade :  valor
    ano: 2007,
    cor: "preto",
    placa: "utf-8090",
}
/* document.getElementById('demo').innerHTML =  `A marca do carro é ${carro.marca}`;
document.getElementById('demo1').innerHTML = `O ano do carro é ${carro.ano}`;
document.getElementById('demo2').innerHTML = `A cor do carro é ${carro.cor}`;
document.getElementById('demo3').innerHTML = `A placa do carro é ${carro.placa}`;
document.getElementById('demo3').innerHTML = `A variável carro é um ${carro}`; */

// Acessando as propriedades do objeto
console.log(carro.placa);  // utf-8090
console.log(carro.marca);  // Corsa
console.log(carro.cor);    // preto

// MÉTODOS  -> Os objetos também podem ter métodos. Métodos são ações que podem ser executadas em objetos. Os métodos são armazenados nas propriedades como definições de funções .

let pessoa = {
    nome: "Epaminondas",
    sobrenome: "da Silva ",
    idade: 56,
    dados: function () {  // método:  igual a  uma  função  dentro  do objeto
        return `O nome é ${this.nome} ${this.sobrenome}com idade de ${this.idade} anos.`;
    }
};  // A palavra-chave this se refere ao objeto atual em que o código está sendo escrito — nesse caso o this se refere a pessoa. 

// Acessando o método do  objeto,  sempre usando o parênteses

console.log(pessoa.dados());  //  O nome é Epaminondas da Silva com idade de 56 anos.


// OUTROS EXEMPLOS

let pessoa2 = {
    nome: ['Claudinei', 'Messias'], // objeto recebendo array
    idade: 47,
    sexo: 'Masculino',
    interesses: ['Programação', 'Musica', 'Filmes'],
    bio: function () {                                 // Métodos
        return `${this.nome[0]} ${this.nome[1]} tem ${this.idade} anos de idade. Ele gosta de ${this.interesses[0]}.`
    },
    saudacao: function () {
        return `Olá eu sou ${this.nome[0]} ${this.nome[1]}`

    }
}
pessoa2['olhos']= 'castanho';   // Colocando nova  propriedade no objeto

console.log(pessoa2);
console.log(pessoa2.nome[0]);
console.log(pessoa2.nome[1]);
console.log(pessoa2.interesses[2]);
console.log(pessoa2.sexo);
console.log(pessoa2.idade);
console.log(pessoa2.bio());
console.log(pessoa2.saudacao());
console.log(pessoa2.olhos);

