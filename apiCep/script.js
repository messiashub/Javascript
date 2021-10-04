
const preencherFormulario =  function(endereco) {
    document.querySelector("#endereco").value = endereco.logradouro;
    document.querySelector("#bairro").value = endereco.bairro;
    document.querySelector("#cidade").value = endereco.localidade;
    document.querySelector("#estado").value = endereco.uf;

}

const pesquisarCep = async()=>{
    const cep = document.querySelector("#cep").value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const dados = await fetch(url);
    const endereco = await dados.json();
    preencherFormulario(endereco);
    console.log(endereco);
    
}

document.getElementById("cep").addEventListener('focusout',pesquisarCep);
/* Quando sair do foco , aciona a função "pesquisarCep" */