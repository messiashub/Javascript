
// Métodos e propriedades de string

// length -> a propriedade retorna o comprimento de uma string:

let txt = 'Epaminondas da Silva';
let tamanho = txt.length;
console.log(tamanho);

document.getElementById('demo').innerHTML = tamanho;

/////////////////////////////////////////////////

// indexOf() ->método retorna o índice de (a posição de) a first ocorrência de um texto especificado em uma string:

let txt1 = 'JavaScript conta posições a partir de zero.0 é a primeira posição em uma string, 1 é a segunda, 2 é a terceira ...'

let pos = txt1.indexOf('partir');
// lastIndexOf() -> retorna o ultimo índice
document.getElementById('demo1').innerHTML = `O índice da palavra "partir" é ${pos}`;

////////////////////////////////////////////////////


// O search()método pesquisa uma string para um valor especificado e retorna a posição da correspondência:

let txt2 = 'JavaScript conta posições a partir de zero.0 é a primeira posição em uma string, 1 é a segunda, 2 é a terceira ...'
let pos1 = txt2.search('primeira');
document.getElementById('demo2').innerHTML = pos1