
function  teste(){
    // MODIFICAR UM ELEMENTO
    document.getElementById('p1').innerHTML = 'Parágrafo 1 modificado'

    // MODIFICAR O   ESTILO DE UM ELEMENTO 
    let elemento = document.getElementById('p2');
    elemento.style.color="blue"
    elemento.style.fontWeight='bold';
    elemento.innerHTML = 'Alterado para a cor azul e texto negrito'

    // Modificar  a visibilidade de um elemento
    let p3= document.getElementById('p3');
    let p4 = document.getElementById('p4');
    p3.hidden=true
    p4.innerHTML = 'O parágrafo foi escondido'

    // Modificar o atributo de um elemento
    let link =  document.getElementById('link');
    link.setAttribute('href','http://www.youtube.com');
    
    // Adicionar um atributo a um elemento
    link.setAttribute('target','_blank');

    //  Adicionar um novo elemento a página

    let novo = document.createElement('h1');
    document.body.appendChild(novo);
    novo.innerHTML='novo';
    
    // MUDAR ELEMENTO ENTRE DIVS
    let imagem = document.getElementById('imagem');
    document.getElementById('div2').appendChild(imagem);
}