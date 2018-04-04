(function() {
/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
var person = {
    name:'mario',
    lastname:'Castro',
    age:31
};

console.log( 'Propriedades de "person":', Object.keys(person));

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.

var property = [];
for (var prop in person){
    console.log(property[person]);
}
*/
console.log(Object.keys(person));

/*
Crie um array vazio chamado `books`.
*/
var books = [];
/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
books.push({name:'Ninja Javascript', pages: 290}, {name:'Python',pages:100},{name:'C++',pages:250});
console.log( '\nLista de livros:');

/*
Mostre no console todos os livros.
*/
console.log(books);

console.log( '\nLivro que está sendo removido:');
/*
Remova o último livro, e mostre-o no console.
*/
// ?
console.log(books.pop());

console.log( '\nAgora sobraram somente os livros:', books);
/*
Mostre no console os livros restantes.
*/
console.log(books);

/*
Converta os objetos que ficaram em `books` para strings.
*/
// ?
console.log( '\nLivros em formato string:');

/*
Mostre os livros nesse formato no console:
*/

for(var i=0;i < books.length; i++){
    for (var prop in books){
        console.log(JSON.stringify(books));
    }
}

/*
Converta os livros novamente para objeto.
*/
var objBooks = (JSON.stringify(books));

console.log( '\nAgora os livros são objetos novamente:' );
console.log(JSON.parse(objBooks));

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
for(var i=0;i < books.length; i++){

        console.log(books[i].name, books[i].pages);
}

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
var myName = ['m','a','r','i','o'];
console.log( '\nMeu nome é:' );

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
console.log(myName.join(''));

console.log( '\nMeu nome invertido é:' );

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
console.log(myName.reverse().join());

console.log( '\nAgora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
console.log(myName.sort());
}());