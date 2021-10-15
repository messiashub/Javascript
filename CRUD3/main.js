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
const $limparCampos = ()=>{ 
    const $campos = document.querySelectorAll(".modal-field");
    $campos.forEach((campo)=> campo.value="")

}
const $criarLinha=(cliente)=>{ // 2 FUNÇÃO PARA CRIAR AS LINHAS
    const $novaLinha =document.createElement('tr');
    $novaLinha.innerHTML = `
    <td>${cliente.nome}</td>
    <td>${cliente.email}</td>
    <td>${cliente.celular}</td>
    <td>${cliente.cidade}</td>
    <td>
        <button type="button" class="button green">editar</button>
        <button type="button" class="button red">excluir</button>
    </td>
    `
    //  ADICIONANDO UM FILHO AO TBODY (TR)
    document.querySelector("#tabelaCliente>tbody").appendChild($novaLinha);
}

const $limparTabela = () =>{ // 3 FUNÇÃO PARA LIMPAR A TABELA
    const $linhas = document.querySelectorAll("#tabelaCliente>tbody>tr");
    $linhas.forEach(linha => linha.parentNode.removeChild(linha))
}
const $updateTabela = ()=>{// 1 FUNÇÃO PARA LER OS DADOS DO LOCALSTORGE E PREENCHER NA TELA
    const dbCliente = $lerCliente();
    $limparTabela() // 3
    dbCliente.forEach($criarLinha); // 2 PARA CADA CLIENTE CRIE UMA LINHA
}
$updateTabela() // 1

const $salvarCliente = function(){ 
    if($campoValido()){  
        const $cliente ={  
            nome:document.getElementById('nome').value,
            email:document.getElementById('email').value,
            celular: document.getElementById('celular').value,
            cidade : document.getElementById('cidade').value,
        }
        $criarCliente($cliente) 
        $limparCampos() //* QUANDO SALVAR, LIMPA OS CAMPOS PRA NÃO SE REPETIREM
        $updateTabela() //1 ATUALIZA
        closeModal()
        
    }   
}
// Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.querySelector('#salvar')
    .addEventListener('click', $salvarCliente) 