
/* CLONENODE() 

    Definição e Uso
O método cloneNode() cria uma cópia de um nó e devolve o clone.

O método cloneNode() clona todos os atributos e seus valores.
*/


let original = document.querySelector('.icones').lastChild/* .cloneNode(true) */;
let clone = original.cloneNode(true)

document.querySelector('.icones2').append(clone)