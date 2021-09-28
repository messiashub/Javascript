
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