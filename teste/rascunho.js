
let numbers = [2,5,7,9];

let total = 0;

for(let num of numbers){    
    total += num;  
}
console.log(total);

console.log("------------------------------------------")

let qualquer ={
    num:[2,4,7,90,112.53,89.07]
}

for(let numeroA  of qualquer.num){
    console.log(numeroA)
}
console.log("----------------------------------------")

let totalB = 0;
for(let numeroB of qualquer.num){
    totalB += numeroB
}

console.log(totalB.toFixed(2));

let qualquer2 ={
    n:[2,4,6,8,4,6]
}

function somar(array){

    let tot = 0;
    for(let element of array){
        tot += element;
    }
    return(tot);
}

console.log(somar(qualquer2.n));


let pessoa ={
    pessoas:["claudinei","Eliete","Jair","Milson","Marcelo","Samuel","Edila",],
    numbers:[12,4,67,8,90,20]
};

console.log(pessoa.pessoas.includes("Eliete"));
console.log(pessoa.numbers.includes(12));
console.log(typeof pessoa);

let people = [
    {nome:"claudinei",age:49, group: "Desenvolverdor"},
    {nome:"Eliete", age:48, group:"Professora"},
    {nome:"Edila", age:35, group:"Balconista"}
]

console.log(typeof people);
console.log(people[2].group);
let filtro = people.filter(function(p){
    return p.group.includes("Professora");
});

console.log(filtro);

let name = people.filter(function(p){
    return p.group !== "Balconista"
})

console.log(name);

console.log('------------------------------')

const livrosCategoria = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

/* Contar o número de categorias */
console.log(livrosCategoria.length);

/*Contar número de livros em cada categoria  */  

function contarLivros(){
    for(let livros of livrosCategoria){
        console.log(`Categoria ${livros.category} possui ${livros.books.length} livros`);
        /* console.log(livros.books.length); */
    }
}
console.log('----------------')
/* Contar o número de autores */
function contarAutor(){
    let autor = [];
    for(let categoria of livrosCategoria){
        for(let livros of categoria.books){
            if(autor.indexOf(livros.author)==-1){
                autor.push(livros.author);
            }          
        }     
    }
    console.log(autor);   
}
console.log('----------------')

/* Mostrar livros do autor Auguto Cury */

function mostrarLivrosAugustoCury(){
    let autorCaixa = [];
    for(let autor of livrosCategoria){
        for(let livro of  autor.books){
            if(livro.author === "Augusto Cury"){
                autorCaixa.push(livro.title);

            }
        }
    }
    console.log(autorCaixa);
}

/* Função acima em uma função que irá receber o nome do autor e devolver os livros desse autor. */

function showBooks(author){
    let box = [];
    for(let categoria of livrosCategoria){
        for(let autor of categoria.books){
            if(autor.author === author){
                box.push(autor.title)

            }
        }
       /*  console.log(categoria); */
    }
    console.log(box)
}


/*Contar número de livros em cada categoria  */  
contarLivros();
console.log('------------------------------');

/* Contar o número de autores */
contarAutor();
console.log('------------------------------');

/* Mostrar livros do autor Auguto Cury */
mostrarLivrosAugustoCury();
console.log('------------------------------');

showBooks('Robert T. Kiyosaki e Sharon L. Lechter');