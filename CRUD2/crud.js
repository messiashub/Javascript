// Criando uma função factory - ela tem retorno
function List(){
    let items = [];
    function add(item){   // método para adicionar itens
        items.push(item);
    }

    function remove(n){   // método para remover itens
        items.splice(n,1) // splice : remove elementos. 'A partir de n remove 1
    
    }

    function updates(item,n){ // método para atualizar itens
        items.splice(n,1,item);//splice : remove elementos."A partir de n, remove 1 e adiciona outro item"

    }

    function getItem(n){ // método para mostrar o item do array
        return items[n];
    }

    function getItens(){ // método para mostrar o array
        return items;    
    }

    return {
        add:add,
        remove:remove,
        updates:updates,
        getItem:getItem,
        getItens:getItens
    }
}

// Função construtora
function ProdutoModel(nome,valor,qtd) {
    this.nome = nome;
    this.valor = valor;
    this.qtd = qtd;

    this.getTotal = function(){
        return parseInt(this.qtd) * parseFloat(this.valor);
    }
}

// Função factory- tem retorno

function ListProduto(){  // vai adicionar os item em um array
    let list = List();

    function getAll(){
        return list.getItens(); // vai retornar todos os elementos de List()

    }
    function submitProduto(){  // vai  interagir com o HTML

        let $index = document.querySelector('#form_index').value;
        let $nome = document.querySelector('#form_nome').value;
        let $valor = document.querySelector('#form_valor').value;
        let $qtd = document.querySelector('#form_qtd').value;

        let $produto = new ProdutoModel($nome,$valor,$qtd)
        list.add($produto);  // list vai adicionar 
        resetForm();        // vai limpar os formulários
    }
    function resetForm(){    // vai limpar os campos do formulário
        let $index = document.querySelector('#form_index');
        let $nome = document.querySelector('#form_nome');
        let $valor = document.querySelector('#form_valor');
        let $qtd = document.querySelector('#form_qtd');
       
        $index.value="";
        $nome.value="";
        $valor.value="";
        $qtd.value="";
    }
    return{
        getAll:getAll,            // propriedade e valor =  valor é a propria função
        submitProduto:submitProduto, //        //
        resetForm: resetForm,
    }
}