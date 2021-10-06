/*  LocalStorage = Armazenamento local
Basicamente cria uma  aerea de armazenamento dentro do navegador,
armazena um dado no formato "chave:valor" 
Existem tres métodos:
SetItem: para definir uma "chave:valor" , para armazenar o dado
GETItem: para obter o valor da chave
RemoveItem: para remover o elemento armazenado*/

// Verificando se o navegador tem localStorage

if(typeof(Storage)!="underfine"){
    localStorage.setItem("canal","CFB Cursos");

    let verCanal = localStorage.getItem('canal');

    document.write(verCanal);

    console.log(verCanal);

}else{
    document.write("Sem suporte a Web Storage")
}







// 1° Definindo uma chave. 
/* ------------------------------------------- */

// 2° Removendo chave e valor -> basta colocar a chave.
//localStorage.removeItem('canal');
/* ----------------------------------------------- */
// 3° Obtendo o valor da chave 
