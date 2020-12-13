
// COLOCANDO ESTILO NA TABELA

function executar() {
    let table = document.getElementById('tabela');
    table.border = '1px solid black'
}


// ALTERANDO O VALOR DE UMA CÉLULA

function executar2() {
    document.getElementById('c2').innerHTML = 'Célula alterada';
}

// OUTRA FORMA
function executar3() {
    let cel = document.getElementsByName('celula');
    cel[2].innerHTML = 'mudei também'

}