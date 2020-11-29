
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


// Unindo  dois objetos (Merge)

let usuario4 = {
    nome: 'Claudio',
    idade: 47,
}

let extraInfo = {
    país:"Brasil",
    estado: "São Paulo",
}

let novoUsuario = Object.assign({},usuario4,extraInfo);  // Gera um novo objeto
console.log(novoUsuario);

// Outra forma  -> spread ... : espalhar  

let novoUsuario2 ={
    ...usuario4,
    ...extraInfo,
    sexo:"Masculino",
    profissao:'Programador'
}
console.log(novoUsuario2);

console.log('-----------------------------------------');

// GETTERS e SETTERS

let usuarios = [   //  Array contendo 4 objetos
    {nome:"Adilson",idade: 50 },
    {nome:"Rose",idade: 45},
    {nome:"Eliete",idade:46}   
];
console.log(usuarios[2].idade);

let pessoas = {
    posicao : 0,
    get atual(){              // get: retorna o valor
        return usuarios[this.posicao];
    },
    set atual(posicao){              // set: é para colocar valores
        this.posicao = this.posicao;
    },
    proximo(){   // FUNÇÃO COMO PROPRIEDADE
        ++this.posicao;   // this> é o próprio objeto
    },
    anterior(){   //  OUTRA FUNÇÃO
        --this.posicao;
    },
    
}
console.log(pessoas.atual);
pessoas.proximo();
console.log(pessoas.atual);
pessoas.proximo();
console.log(pessoas.atual);
pessoas.anterior();
console.log(pessoas.atual);
pessoas.atual=(0);
console.log(pessoas.atual);