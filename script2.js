
// EventListener

var obj = document.getElementById('div1');
console.log(obj);
obj.addEventListener("click",msg);

// MODO 1  -> vai mudar a cor da caixa para branco
obj.addEventListener("mouseover",function(evento){  // usando funções anônimas
    cor(obj,"#fff");
});

// MODO2  -> vai mudar a cor para vermelho
obj.addEventListener("mouseout",function(){
    obj.style.backgroundColor = "#f00"
});


// Vai aparecer uma caixa de alert
function msg(){
    alert('Olá Mundo!');
};

function cor(obj,cor){
    obj.style.backgroundColor=cor;
}

// vai mudar a cor da caixa para branco
/* function cor(){
    
};
 */
/* // vai mudar a cor para vermelho
function cor2(){
    obj.style.backgroundColor = "#f00"
}  */  