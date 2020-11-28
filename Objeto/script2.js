

// OBJETO ->  Permite armazenar uma coleção de pares e valor,  é como se fosse  variáveis dentro de uma  variável

let usuario = {
    nome: 'Jéssica',
    idade: 27,
    sexo: 'Feminino',
};
usuario.ano = 2020;            // Adicionando  nova propriedade e valor
usuario.sobrenome = 'da Silva'   // Adicionando  nova propriedade e valor

console.log(usuario);
console.log(usuario.nome);
console.log(usuario.sexo);
console.log(usuario.sobrenome);

delete usuario.sexo;           // Deletando propriedades

console.log(usuario);

usuario.hobbies = ['Musica', 'Cinema', 'Programação'];  // Adicionando nova propriedade na  forma de array;

console.log(usuario);

usuario.competencias = {                           // Adicionando nova propriedade na forma de um  novo Objeto
    linguagens: ['javascript', 'NodeJs', 'HTML', 'CSS'],
    instrumentosMusicais: ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
};

console.log(usuario);
console.log(usuario.competencias.linguagens[1]);

console.log("----------------------------")


// Adicionando uma função ao objeto
let usuario2 = {
    digaOi: function(name){
        return `Olá ${name}`
    }
}

console.log(usuario2.digaOi('nei'));  // chamando a função no Objeto
console.log(usuario2.digaOi('Milson'));

// Adicionando uma  variável no Objeto

let cor = "Preto"
let sobrenome = 'da Silva'

let usuario3 = {
    nome:'Milson',
    nome2: sobrenome,
    cor             // <- sempre que variável tiver o mesmo  nome da propriedade basta passar somente o nome da variável

}

console.log(usuario3);

console.log("-----------------------------------------")
