
let px=0;  // horizontal
let py=0;  // vertical

// Código Keycode  de setas no teclado
// 37 = Esquerda, 38 = Cima,  39=Direita, 40= baixo
/* let obj1 = document.getElementById('div2');
console.log(obj1); */

/* obj1.addEventListener('keydown', function(){
    let tecla = keyCode; */
document.addEventListener('keydown',function(evento){
    let obj1= document.getElementById('div2');
    let tecla=evento.keyCode;

    if(tecla==37){
        px-=10;
        obj1.style.left=px+'px';

    }else if(tecla==38){
        py-=10;
        obj1.style.top=py+'px';
    }else if(tecla==39){
        px+=10;
        obj1.style.left=px+'px';
    
    }else if(tecla==40){
        px+=10;
        obj1.style.top=py+'px';
    }
})
    
    
    
 