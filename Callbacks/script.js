// CALLBACKS


function soma(a,b, res){
    let soma = a + b;
    res(soma)
}


function multi(a,b,res){
    let multi = a * b;
    res(multi);
}

function exibir(num){
    console.log(num)
}

soma(2,4,exibir);
multi(2,4, exibir);

// Outro

function minhaConta(some){
    console.log(some);
}

function calcular(a,b, some){
    let calc = a + b
    some(calc);
}

calcular(5,5,minhaConta);


// setTimeout e setInterval

setTimeout(teste,4000);

function teste(){
    console.log('teste 1');
};

setTimeout(function(){
   console.log('teste 0')
},2000);


