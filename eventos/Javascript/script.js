
/* 
let botao = document.getElementById('btn');

botao.addEventListener('click',function(){
    alert('cliquei');
});

botao.addEventListener('click',function(){
    console.log('de novo');
});

botao.addEventListener('click', function(){
    botao.style.backgroundColor = 'red';
}) 
 */
let p= document.getElementById('p');
console.log(p);

let botao1 = document.getElementById('btn');
console.log(botao1);
botao1.addEventListener('click', function(){
    p.innerHTML='clicou';
 
})

let paragrafo = document.getElementById('p1')

let input = document.getElementById('inp');
console.log(input);

input.addEventListener('input',function(){
    paragrafo.innerHTML = input.value.toUpperCase();
    
});

let quadro = document.querySelector('.quadrado')
console.log(quadro);


quadro.addEventListener('mouseenter',function(){
    quadro.style.backgroundColor = 'red';
    quadro.style.borderRadius = '50px';
})
quadro.addEventListener('mouseout',function(){
    quadro.style.backgroundColor = 'blueviolet';
    quadro.style.borderRadius = '0';
})


    


