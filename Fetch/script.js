/* Fetch -> Envia requisições assíncronas para o servidor.
  Serve para acessarmos/ escrevermos dados em apis externas

API é qualquer interface entre dois sistemas.
   API  retorna um dada,  normalmente  um json */


/*1 FAZENDO A REQUISIÇÃO */
/*1A A função fetch  retorna um promessa(Promisse) 
  1B then : quando a promessa resolver, executa meu código*/
fetch("https://ranekapi.origamid.dev/json/api/produto")
.then(resposta=>{
    return resposta.json();
}).then(Body=>{
    let indice = [];
    for(let index in Body){
        indice.push(Body[index].nome);
        
    } console.log(indice);
    document.querySelector('#app').innerHTML =`${indice}`
    
       
    /*  console.log(Body.indice) */
   /*  document.querySelector("#app").innerHTML = Body[0].nome */
    ; 
});
