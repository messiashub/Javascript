
const preencherFormulario =  function(endereco) {
    document.querySelector("#endereco").value = endereco.logradouro;
    document.querySelector("#bairro").value = endereco.bairro;
    document.querySelector("#cidade").value = endereco.localidade;
    document.querySelector("#estado").value = endereco.uf;
}
const limparFormulario =  function(endereco) {
    document.querySelector("#endereco").value = "";
    document.querySelector("#bairro").value = "";
    document.querySelector("#cidade").value = "";
    document.querySelector("#estado").value = "";
}


const cepValido = (cep) => cep.length == 8 && !isNaN(cep);

const pesquisarCep = async()=>{
    limparFormulario();
    const cep = document.querySelector("#cep").value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    /* validando o cep */
    if(cepValido(cep)){
        const dados = await fetch(url);
        const endereco = await dados.json();
    
        /* Tratando erros */
        if(endereco.hasOwnProperty('erro')){
        document.querySelector("#endereco").value = "Endereço não existe!"
        console.log(endereco);

        }else{
            preencherFormulario(endereco);
        }
    /*------------------------*/
    }else{
        document.querySelector("#endereco").value= "CEP incorreto!"
    }
       
}

document.getElementById("cep").addEventListener('focusout',pesquisarCep);
/* Quando sair do foco , aciona a função "pesquisarCep" */
/*  */
/* mouseout */