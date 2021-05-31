
/* innerHTML => PODE-SE OBTER OU MODIFICAR O VALOR DAS PROPRIEDADES
DE UM ELEMENTO*/

// EX 1:

// MODIFICANDO O VALOR DO ELEMENTO 'input' COM 'value'
let cx = document.querySelector('#caixa').value='messias'; 
console.log(cx);

// MODIFICANDO O VALOR DA TAG "P" COM "innerHTML"
let txt = document.querySelector("#texto").innerHTML ="messias"

// INSERINDO UM VALOR NA TAG "P" COM "innerHTML"
let num = 51

let rua = document.querySelector(".address").innerHTML=`Rua Bento Teixeira n°${num}`

// OBTENDO O VALOR  DA DIV COM "innerHTML"
let div = document.querySelector("#dv").innerHTML;
console.log(div);

////////////////////////////////////

let btn =document.querySelector('.btn').addEventListener('click',minhaFuncao);

function minhaFuncao(){
    let valor = document.querySelector('#caixa2').value;
    document.querySelector('.res').innerHTML = `repetindo: ${valor.toUpperCase()}`;

}




