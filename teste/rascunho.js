
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