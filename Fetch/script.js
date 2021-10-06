/*1 COMO QUE O FETCH FUNCIONA:
  O fetch é um método que ao ser invocado faz uma requisição Htpp e trá dados da url que vc  coloca como argumento
  a) Inserir uma const url que recebe uma template string com a url que a gente  quer buscar informações
  b) Abaixo invocar o fetch e passar como argumento essa url, atráves da invocação desse fetch , a gente ta 
  pedindo que ele traga informações de outro lugar,e esse outro lugar é essa url passada como argumento.
  So que esse  método fetch retorna uma promise, como é método fetch retorna uma promisse,pra gente fazer alguma 
  coisa com o resultado dessa  promisse...
  c) A gente vai encadear no fetch o método .then() e esse método recebe uma função com um parâmetro e essa 
  função vai retornar parâmetro.json. Então o que essa  função retorna é a resposta da promisse convertida em json..
  pra gente  obter o body(corpo dessa resposta), só que esse retorno do .then() tambem  resulta em uma promisse.
  d) Entao a gente  vai invocar outro .then()

 */

const fetchPokemon = ()=>{ /* 1 a*/
  const url = `https://pokeapi.co/api/v2/pokemon/13`
   
  fetch(url) /* 1 b */
    .then(resposta => resposta.json())/* 1 c */ 
    .then(pokemon => console.log(pokemon)) 


}

fetchPokemon()