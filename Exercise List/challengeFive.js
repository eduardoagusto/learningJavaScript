/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var allString = ["Tristana", "Jayce", "Kalista", "Garen", "Draven"];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function allArr(arr) {
  return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(allArr(allString)[1]); //Jayce

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function oneIndex(arr, index) {
  return arr[index];
}
console.log(oneIndex(allString, 0)); //Tristana

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var anyTypes = [21, "Eduardo", true, undefined, null];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log(oneIndex(anyTypes, 0)); //21
console.log(oneIndex(anyTypes, 1)); //Eduardo
console.log(oneIndex(anyTypes, 2)); //true
console.log(oneIndex(anyTypes, 3)); //undefined
console.log(oneIndex(anyTypes, 4)); //null

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

var bookName = "Design Centrado no Usuário";
function book(bookTitle) {
  var allBooks = {
    "Design Centrado no Usuário": {
      quantasPaginas: 184,
      autor: "Travis Lowdermilk",
      editora: "O'Reilly",
    },
    "Introdução às Expressões Regulares": {
      quantasPaginas: 160,
      autor: " Michael Fitzgerald ",
      editora: "O'Reilly",
    },
    "Introdução ao JSON": {
      quantasPaginas: 152,
      autor: "Lindsay Bassett",
      editora: "O'Reilly",
    },
    "Padrões JavaScript": {
      quantasPaginas: 240,
      autor: "Stoyan Stefanov ",
      editora: "O'Reilly",
    },
  };
  return !bookTitle ? allBooks : allBooks[bookTitle];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log(book());

/*{
  'Design Centrado no Usuário': {
    quantasPaginas: 184,
    autor: 'Travis Lowdermilk',
    editora: "O'Reilly"
  },
  'Introdução às Expressões Regulares': {
    quantasPaginas: 160,
    autor: ' Michael Fitzgerald ',
    editora: "O'Reilly"
  },
  'Introdução ao JSON': {
    quantasPaginas: 152,
    autor: 'Lindsay Bassett',
    editora: "O'Reilly"
  },
  'Padrões JavaScript': {
    quantasPaginas: 240,
    autor: 'Stoyan Stefanov ',
    editora: "O'Reilly"
  }
}*/

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

console.log(
  `O livro ${bookName} no Usuário tem ${book(bookName).quantasPaginas}`
); //O livro Design Centrado no Usuário no Usuário tem 184

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log(`O autor do ${bookName} é ${book(bookName).autor}.`); //O autor do Design Centrado no Usuário é Travis Lowdermilk.

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

console.log(
  `O livro ${bookName} foi publicado pela editora ${book(bookName).editora}.`
); //O livro Design Centrado no Usuário foi publicado pela editora O'Reilly.