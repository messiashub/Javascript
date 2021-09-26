

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

let person ={
    name:"Claudinei",
    sobrenome:"Messias",
    idade:48,
    sexo:"masculino"
};

for(let property in person){  // pegando as propridades e valores do objeto
    console.log(`${property} : ${person[property]}`);
}