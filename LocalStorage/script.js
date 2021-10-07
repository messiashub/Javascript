/*  LocalStorage = Armazenamento local
Basicamente cria uma  aerea de armazenamento dentro do navegador,
armazena um dado no formato "chave:valor" 
Existem tres métodos:
SetItem: para definir uma "chave:valor" , para armazenar o dado
GETItem: para obter o valor da chave
RemoveItem: para remover o elemento armazenado*/


// COLETANDO DADOS DO VISITANTE
let vcorF;
let vcorT;
let vNome;
let show = document.querySelector("#fconfig");/* 1 */

if(localStorage.nome){
    vcorF= localStorage.corFundo;
    vcorT= localStorage.corTexto;
    vNome = localStorage.nome;
    defineCor(1,vcorF);
    defineCor(2,vcorT);
    document.querySelector("#painel").innerHTML = `Bem vindo(a) ${vNome} <hr>` ;  
}
 function gravar(){
    vNome = document.querySelector("#fnome").value;
    localStorage.setItem("nome", vNome);
    localStorage.corFundo = vcorF;
    localStorage.corTexto = vcorT;
    show.style.display="none"; /* vai ocultar assim que gravar o formulario */
    console.log(vNome);
 }

function defineCor(op,cor){
    if(op==1){
        document.body.style.backgroundColor=cor;
        vcorF = cor;
        console.log(`Fundo cor:${vcorF}`);
    }else{
        document.body.style.color=cor;
        vcorT = cor;
        console.log(`Texto cor:${vcorT}`);

    }
}

/*Vai mostrar o formulario */
function configura(){ 
    show.style.display="block"
}




// CONTAGEM DE VISITAS NO SISTEMA (contador de acesso)

//lendo o codigo:
/* localStorage.visitas existe? 
   se existe = localStorage.visita recebe ele mesmo convertido em numero +1
   se não , cria com o valor 1 */


// 1° Definindo uma chave. 
/* ------------------------------------------- */

// 2° Removendo chave e valor -> basta colocar a chave.
//localStorage.removeItem('canal');
/* ----------------------------------------------- */
// 3° Obtendo o valor da chave 
// Verificando se o navegador tem localStorage