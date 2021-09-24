
let pessoa ={
    idade: 49,
    nome: "Claudinei",
    altura:1.85,
    casado: false
}

function apresentar(){
    console.log(`O nome da pessoa é ${pessoa.nome} e a idade dela  é ${pessoa.idade} anos.`);
    let calculo = pessoa.idade * pessoa.altura;
    console.log(`O calculo dessa pessoa é ${calculo}`)
    if(pessoa.idade >= 48){
        console.log("Já  ta caduca")

    }else{
        console.log('De boa!')
    }

}

apresentar();