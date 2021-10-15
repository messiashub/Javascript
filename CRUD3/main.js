'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => {
     $limparCampos();
    document.getElementById('modal').classList.remove('active'); //
}
   

const $clienteTemporario={
    nome:"Nilda", 
    email:"NildadoSantosFurlanetti@hotmail.com",
    celular: "112613583390",
    cidade:"São Paulo"
}


const $pegueDoLocalStorage = ()=> JSON.parse(localStorage.getItem('db_cliente')) ?? [];

const $enviarParaLocalStorage = (dbCliente)=> localStorage.setItem("db_cliente",JSON.stringify(dbCliente));

// CRUD - create read update delete model

// delete
const $deleteCliente = (index)=>{
    const dbCliente = $lerCliente();
    dbCliente.splice(index,1);  // a partir do indice delete 1
    $enviarParaLocalStorage(dbCliente);
}
//update - ataulizar
const $updateCliente = (index, cliente)=>{ // vai receber o indice que vai ser atualizado
    const dbCliente = $lerCliente();
    dbCliente[index] = cliente;
    $enviarParaLocalStorage(dbCliente);
}
// read -ler
const $lerCliente = ()=> $pegueDoLocalStorage();

// create
const $criarCliente =function(cliente){
    const dbCliente = $pegueDoLocalStorage()
    dbCliente.push(cliente);
    $enviarParaLocalStorage(dbCliente)   
}

// VINCULANDO AO HTML
const $campoValido = function(){ 
    return document.querySelector('#form').reportValidity()

}
const $limparCampos = ()=>{ // 1 FUNÇÃO PARA LIMPAR OS CAMPOS
    const $campos = document.querySelectorAll(".modal-field");

    // para cada campo em campos retorne campo com o valor vazio
    $campos.forEach((campo)=> campo.value="")

}

const $salvarCliente = function(){ 
    if($campoValido()){  
        const $cliente ={  
            nome:document.getElementById('nome').value,
            email:document.getElementById('email').value,
            celular: document.getElementById('celular').value,
            cidade : document.getElementById('cidade').value,
        }
        $criarCliente($cliente) 
        $limparCampos() // 1
        closeModal()
        
    }   
}
// Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.querySelector('#salvar')
    .addEventListener('click', $salvarCliente) // 1ª FUNÇÃ0