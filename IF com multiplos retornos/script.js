



function resultado() {
    let nota = parseInt(document.getElementById("nota").value);
    let resposta = document.getElementById("res");

    console.log(nota);
    console.log(typeof (nota));
    /* var res; */
    //Aprovado
    //Recuperação
    //Reprovado
    let media;
    if(nota >=  95){
        media= '<p>Aprovado com louvor</p>'
    }
    else if(nota >= 60){
       /*  resposta.innerHTML */media='<p>Aprovado</p>'
    }
    else if(nota >=40){
       /*  resposta.innerHTML = */media='<p>Recuperação</p>'
    }
    else if(nota >= 20){
        /* resposta.innerHT */media='<p>Reprovado</p>'
    }
    else{
        media = '<p>Reprovado com louvor</p>'
    }
 
    resposta.innerHTML = media
    
}