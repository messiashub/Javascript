
let valor = true;  // Variável de controle

function teste(){
    // YES: https://cdn.pixabay.com/photo/2016/05/30/17/26/hook-1425312__340.png
    // NO :https://upload.wikimedia.org/wikipedia/commons/c/c1/RedondoPare.png

    
    let elemento = document.getElementById('img');

    // Analisando a imagem apresentada
    if(valor){
        elemento.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/c/c1/RedondoPare.png');
        valor = false;
    }else{
        elemento.setAttribute('src',' https://cdn.pixabay.com/photo/2016/05/30/17/26/hook-1425312__340.png')
        valor=true;
    }
    
}