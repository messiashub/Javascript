
const cep = document.querySelector("#cep")

/* 2 TRATANDO O RESULTADO */
const resultado = (result)=>{
    for(const campo in result){
        if(document.querySelector("#"+ campo)){
            document.querySelector("#"+ campo).value = result[campo]
            console.log(campo)

        }
    }
}

/* 1 FAZENDO O EVENTO */
cep.addEventListener('blur',(e)=>{
    let procura = cep.value.replace("-","");
    const options ={
        method: "GET",
        mode: "cors",
        cache: "default"
    }

    fetch(`https://viacep.com.br/ws/${procura}/json/`, options)
    .then((resposta)=>{resposta.json()       /* <- se der certo faça isso */
        .then((exibe)=>{resultado(exibe)})})   /* entao faça isso */ 
    .catch((erro)=>{console.log("Deu erro " + erro,message)}) /* <- se der errado faça isso */
    /* console.log(cep.value); */
})