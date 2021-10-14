'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')


const $clienteTemporario={
    nome:"creusa", 
    email:"creusamessias@hotmail.com",
    celular: "112213583390",
    cidade:"São Paulo"
}

//1 pegue o que tem no localStorage e transforme em JSON novamente e guarda na variável 'db_cliente', se não tiver nada retorne um array vazio
const $pegueDoLocalStorage = ()=> JSON.parse(localStorage.getItem('db_cliente')) ?? [];
//3 como o localStorage só aceita string, deve converter o JSON em string = stringify
    // 3 envia para o localStorage  (dbCliente) convertido em string
    /* localStorage.setItem("dbCliente",JSON.stringify(dbCliente)) */
const $enviarParaLocalStorage = (dbCliente)=> localStorage.setItem("db_cliente",JSON.stringify(dbCliente));

// CRUD - create read update delete model

const $criarCliente =function(cliente){
    
   
    //2 dbClient adiciona um novo cliente que vai vir
    const dbCliente = $pegueDoLocalStorage()
    dbCliente.push(cliente);
    $enviarParaLocalStorage(dbCliente)
    
}

// Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)