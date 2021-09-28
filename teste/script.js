

/* Throw em inglês significa lançar, disparar, catch quer dizer pegar e try tentar.

Isso significa que vamos tentar executar um bloco de código, e se der algum erro, será disparado e capturado na nossa aplicação. Suponhamos que haja uma função que dispare um erro caso não seja passado um parâmetro dessa função.*/

// throw

/* function sayMyName(name=""){ */ /* Nesse caso, se o nome vier vazio, será disparada uma mensagem. */
    /* if(name === ""){
        throw new Error("Nome é obrigatorio");
    }

    console.log(name);
} */
/* Precisamos agora usar o try/catch para capturarmos esse erro, caso contrário, ele irá encerrar nossa aplicação */
/* try{                      
    sayMyName("");
}catch(e){
    console.log(e)
} */
/* O try irá executar a função, enquanto o catch vai capturar o erro e atribuir à variável e, que só existe dentro do catch. Após isso, mesmo com o erro, nossa aplicação não será interrompida por completo. */

/* console.log("Após a aplicação do try catch"); */




// ESTRUTURAS DE REPETIÇÃO

//for

/* A estrutura de repetição for tem a seguinte sintaxe:
for(inicialização de uma variável; condição de continuação para o loop; expressão final) */

// Usando Condições:

// break :    para a execução do loop
// continue : pula a execução e continua
/* for(let i = 1; i <=10; i++){ 
    if(i === 5){   
        continue;
    }
    console.log(i);
} */



// ESTRUTURAS DE REPETIÇÃO
// while


// Recomendado o uso quando  não se sabe o momento da parada

//OBS: Nunca esquecer de atualizar(incrementar a variável) para  evitar um loop infinito
/* let i = 100; 

 while(i >= 10){
    console.log(i);

    i /= 2;

}   */


// ESTRUTURAS DE REPETIÇÃO
// For of

/* let name1 = "claudinei";

for(let char of name1){  
    console.log(char)

}

let names = ["Claudio","Mario","Manasés","Epaminondas"];

for(let name of names){ 
    console.log(name);
} */



// ESTRUTURAS DE REPETIÇÃO

// FOR IN

//  FOR IN   vai criar um looping em cima de um objeto, pegando as suas propriedades

/* let person ={
    name:"Claudinei",
    sobrenome:"Messias",
    idade:48,
    sexo:"masculino"
};

for(let property in person){  // pegando as propridades e valores do objeto
    console.log(`${property} : ${person[property]}`);
} */

/* 1 CRIE UM ALGORITMO QUE TRANSFORMA  AS NOTAS DO SISTEMA NUMÉRICO PARA SISTEMA
 DE NOTAS EM CARACTERES TIPO A,B E C */
/* 
* de 90 para cima - A
* entre 80 - 89   - B
* entre 70 - 79   - C
* entre 60 - 69   - D
* menor que 60    - F
   
*/

/* let note; */

let valor = document.querySelector('.value');
let btn = document.querySelector('.btn');
let resposta = document.querySelector('.respfinal');
let btn2 = document.querySelector('.btn2');


btn2.addEventListener("click",function(){
    valor.value = "";
    resposta.innerHTML = "";

});

btn.addEventListener("click",function(){
    /* resposta.innerHTML = parseInt(valor.value); */

    if(valor.value >= 90 && valor.value <=100){
        resposta.style.color="blue";
        resposta.innerHTML = "A";

    }if(valor.value >= 80 && valor.value <= 89){
        resposta.style.color="green";
        resposta.innerHTML = "B";
    }if(valor.value >= 70 && valor.value <= 79){
        resposta.style.color="yellow";
        resposta.innerHTML = "C";
    }if(valor.value >= 60 && valor.value <= 69){
        resposta.style.color="orange ";
        resposta.innerHTML = "D";
    }if(valor.value < 60 &&  valor.value >= 0){
        resposta.style.color="pink";
        resposta.innerHTML= "F";
    }else if(valor.value < 0 || valor.value > 100){
        resposta.style.color="red";
        resposta.innerHTML= "número invalido"
    }
    
})



function nota(note){
    if(note >= 90 && note <= 100){
        console.log("A");   
    }if(note >= 80 && note <= 89){
        console.log("B");  
    }if(note >= 70 && note <= 79){
        console.log('C');  
    }if(note >= 60 && note <= 69){
        console.log('D');  
    }else if(note < 60 && note >= 0){
        console.log("F")
    }else if(note < 0 || note > 100){
        console.log("invalida");
    }

}

nota(101);
nota(-1);
nota(0);
nota(1);
nota(45);
nota(60);
nota(61);
nota(75);
nota(85);
nota(95);


/* ### Sistema de gasto familiar

Crie um objeto que possuíra 2 propriedades, ambas do tipo array:
    * receitas:[];
    * despesas:[];
Agora crie uma função que irá calcular o total de receitas e despesas
e irá mostra uma mensagem se a familia está com saldo positivo ou negativo,
seguido do valor do saldo
 */

let family = {
    incomes : [2200, 3200, 250.43, 360.45],
    expenses : [320, 128.45, 176.87, 1450.00,2000]
}

function sum(array){
    let total = 0;
    for(let value of array){
        total += value;       
    }
    return total
}

function calculateBalance(){
    let calcuteIncomes = sum(family.incomes);
    let calculateExpenses = sum(family.expenses);

    let total = calcuteIncomes - calculateExpenses;

    const itsOk = total >= 0;

    let balanceText = "negativo"

    if(itsOk){
        balanceText = "positivo";
    }
    console.log(`Seu saldo é ${balanceText}: R$:${total.toFixed(2)}`)
}

calculateBalance();

// CELSIUS  EM FAHRENHEIT
/* Crie uma função que  receba uma string  em celsius ou fahrenheit e faça a transformação de uma unidade para outra

C = (F- 32) * 5/9 
F = C * 9/5 + 32

*/

// transformDegree('50F)

function transformDegree(degree){
    const celciusExists = degree.toUpperCase().includes("C");
    const fahrenheitExists = degree.toUpperCase().includes("F")



    // fluxo de erro
    if(!celciusExists && !fahrenheitExists){
        throw new Error('Grau não identificado')
    }

    // fluxo ideal, F para C

    
    let updatedDegree = Number(degree.toUpperCase().replace("F",""))
    let formula =(fahrenheit)=>(fahrenheit - 32) * 5/9;
    let degreeSign = "C";

    // fluxo alternativo C para F
    if(celciusExists){
        updatedDegree = Number(degree.toUpperCase().replace("C",""))
        formula =(celsius)=> celsius * 9/5 + 32;
        degreeSign = "F";
    }

    return formula(updatedDegree) + degreeSign

}
try{
   /*  console.log(transformDegree("50F")); */
    
    console.log(transformDegree("10C"));
    console.log(transformDegree("50F"));
    transformDegree("50Z")

}catch(error){
    console.log(error);
}
