// Criando uma classe est
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