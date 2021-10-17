'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => {
     $limparCampos();
    document.getElementById('modal').classList.remove('active'); //
}
   

/* const $clienteTemporario={
    nome:"Nilda", 
    email:"NildadoSantosFurlanetti@hotmail.com",
    celular: "112613583390",
    cidade:"São Paulo"
} */


const $pegueDoLocalStorage = ()=> JSON.parse(localStorage.getItem('db_cliente')) ?? [];

const $enviarParaLocalStorage = (dbCliente)=> localStorage.setItem("db_cliente",JSON.stringify(dbCliente));

// CRUD - create read update delete model

// delete
const $deleteCliente = (index)=>{
    const dbCliente = $lerCliente();
    dbCliente.splice(index,1);  
    $enviarParaLocalStorage(dbCliente);
}
//update - ataulizar
const $updateCliente = (index, cliente)=>{ 
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

const $campoValido = function(){ 
    return document.querySelector('#form').reportValidity()

}
const $limparCampos = ()=>{ 
    const $campos = document.querySelectorAll(".modal-field");
    $campos.forEach((campo)=> campo.value="")

}
const $criarLinha=(cliente,indice)=>{ // 1.1 PEGANDO O INDICE DA LINHA
    const $novaLinha =document.createElement('tr');
    $novaLinha.innerHTML = `
    <td>${cliente.nome}</td>
    <td>${cliente.email}</td>
    <td>${cliente.celular}</td>
    <td>${cliente.cidade}</td>
    <td>                                                     
        <button type="button" class="button green" id="editar-${indice}">Editar</button>
        <button type="button" class="button red" id="deletar-${indice}">Excluir</button>
    </td>
    `
   
    document.querySelector("#tabelaCliente>tbody").appendChild($novaLinha);
}

const $limparTabela = () =>{ 
    const $linhas = document.querySelectorAll("#tabelaCliente>tbody>tr");
    $linhas.forEach(linha => linha.parentNode.removeChild(linha))
}
const $updateTabela = ()=>{
    const dbCliente = $lerCliente();
    $limparTabela() 
    dbCliente.forEach($criarLinha);
}
$updateTabela() 

const $salvarCliente = function(){ 
    if($campoValido()){  
        const $cliente ={  
            nome:document.getElementById('nome').value,
            email:document.getElementById('email').value,
            celular: document.getElementById('celular').value,
            cidade : document.getElementById('cidade').value,
        }
        $criarCliente($cliente) 
        $limparCampos() 
        $updateTabela() 
        closeModal()
        
    }   
}

// 1 EDITAR E  DELETAR CLIENTE

const $editeCliente = function(indice){ // 3 PEGANDO SOMENTE O CLIENTE QUE VAI SER EDITADO
    const $cliente = $lerCliente()[indice] // 3 COMO $lerCliente é um array, pego somente o "indice"
    console.log($cliente)

}
const $editarDeletar = function(event){
    if(event.target.type == "button"){  // 1 PEGANDO O ALVO QUE TEM O TIPO "TYPE"
        const [action, indice]= event.target.id.split("-") // 2
       /*  console.log(action,indice) */

       if(action == "editar"){ 
            $editeCliente(indice)

        }else{
            console.log('deletando o cliente')
        }     
    }      
}
$updateTabela()

// Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal);

document.getElementById('modalClose')
    .addEventListener('click', closeModal);

document.querySelector('#salvar')
    .addEventListener('click', $salvarCliente); 

document.querySelector("#tabelaCliente>tbody")
    .addEventListener('click',$editarDeletar);// 1