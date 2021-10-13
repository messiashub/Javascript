// Criando uma função factory - ela tem retorno
function List() {
    let items = [];
    function add(item) {   // método para adicionar itens
        items.push(item);
    }

    function remove(n) {   // método para remover itens
        items.splice(n, 1) // splice : remove elementos. 'A partir de n remove 1

    }

    function updates(item, n) { // método para atualizar itens
        items.splice(n, 1, item);//splice : remove elementos."A partir de n, remove 1 e adiciona outro item"

    }

    function getItem(n) { // método para mostrar o item do array
        return items[n];
    }

    function getItens() { // método para mostrar o array
        return items;
    }

    return {
        add: add,
        remove: remove,
        updates: updates,
        getItem: getItem,
        getItens: getItens
    }
}

// Função construtora
function ProdutoModel(nome, valor, qtd) {
    this.nome = nome;
    this.valor = valor;
    this.qtd = qtd;

    this.getTotal = function () {
        return parseInt(this.qtd) * parseFloat(this.valor);
    }
}

// Função factory- tem retorno

function ListProduto() {  // vai adicionar os item em um array
    let list = List();

    function getAll() {
        return list.getItens(); // vai retornar todos os elementos de List()

    }
    function submitProduto() {  // vai  interagir com o HTML

        let $index = document.querySelector('#form_index').value;
        let $nome = document.querySelector('#form_nome').value;
        let $valor = document.querySelector('#form_valor').value;
        let $qtd = document.querySelector('#form_qtd').value;

        let $produto = new ProdutoModel($nome, $valor, $qtd)

        if ($index) {
            list.updates($produto, $index);// SE TIVER O PRODUTO E O INDEX, ATUALIZA

        } else {
            list.add($produto);  // SE NÃO, list vai adicionar 
        }


        updateTabela()       // chamando a função assim que for submetida
        resetForm();        // vai limpar os formulários
    }

    function updateTabela() {    // função para mostrar a lista no html
        let map = list.getItens().map(function (item, indice) {
            return '<tr>' +
                '<td>' + item.nome + '</td>' +
                '<td>' + "R$:" + item.valor + '</td>' +
                '<td>' + item.qtd + '</td>' +
                '<td>' + item.getTotal() + '</td>' +
                '<td><button class="btn_delete" data-index="' + indice + '">Apagar</button>' +
                ' <button class="btn_edit" data-index="' + indice + '">Editar</button> </td>' +
                '</tr>';
        });
        let bodyTabela = document.getElementById("corpo_tabela");
        bodyTabela.innerHTML = map.join('');

        let $btn_delete = document.querySelectorAll('.btn_delete')

        $btn_delete.forEach(function (btn) {
            btn.addEventListener('click', excluir);
        })
        let $btn_edit = document.querySelectorAll('.btn_edit')

        $btn_edit.forEach(function (btn) {
            btn.addEventListener('click', edit);
        })
    }

    function excluir(event) {
        /*  console.log(event.currentTarget.dataset.index); */ // achando o index do botao que vai ser clicado
        let index = event.currentTarget.dataset.index;
        list.remove(index);    // O metodo com a propriedade remove , vai remover o index
        updateTabela();     // Atualiza depois de removido
    }



    function edit(event) {
        let index = event.currentTarget.dataset.index;
        let item = list.getItem(index);
        /* console.log(item);
        alert('editar'); */
        let $form_index = document.querySelector('#form_index');
        let $nome = document.querySelector('#form_nome');
        let $valor = document.querySelector('#form_valor');
        let $qtd = document.querySelector('#form_qtd');

        $form_index.value = index;
        $nome.value = item.nome;
        $valor.value = item.valor;
        $qtd.value = item.qtd;

        $nome.focus(); // Assim que  for editar o curso vai ficar no campo "nome"

    }





    function resetForm() {    // vai limpar os campos do formulário
        let $index = document.querySelector('#form_index');
        let $nome = document.querySelector('#form_nome');
        let $valor = document.querySelector('#form_valor');
        let $qtd = document.querySelector('#form_qtd');

        $index.value = "";
        $nome.value = "";
        $valor.value = "";
        $qtd.value = "";
    }
    return {
        getAll: getAll,            // propriedade e valor =  valor é a propria função
        submitProduto: submitProduto, //        //
        resetForm: resetForm,
    }
}
function eventos() {    // Eventos para os botões "Salvar" e "Cancelar"
    let listProduto = ListProduto(); /// variável recebe a função ListProduto
    let btn_salvar = document.querySelector('#btn_salvar');
    btn_salvar.addEventListener('click', listProduto.submitProduto);  //pegando o método

    let btn_cancelar = document.querySelector('#btn_cancelar');
    btn_cancelar.addEventListener('click', listProduto.resetForm);  // pegando o método
}
eventos();