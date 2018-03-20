# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(valor) {
    if(valor) {
        return valor ? true : false;
    
    }
}
// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
?

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
?

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = {
    marca:'Hyundai',
    modelo:'HB20S',
    placa:'PTC4513',
    ano:2018,
    cor:'Branco Polar',
    quantasPortas:4,
    assentos:5,
    quantidadePessoas:0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
var mudaCor = function(cor){
    carro.cor = cor;
    
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
var obterCor = function() {
    return carro.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
var obterModelo = function(){
    return carro.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
var obterMarca = function(){
    return carro.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/

var obterMarcaModelo = function() {
    return "Esse carro é um " + carro.marca + carro.modelo + '"';
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
var addPessoa = function(qtd){
   var total;
   total = carro.quantidadePessoas + qtd;
   

if(total === carro.assentos && total >= carro.assentos){
       return "o carro ja está lotado";
    }

    if (qtd > carro.assentos){
        var quantasPessoasCabem = carro.assentos - carro.quantidadePessoas;
        var pluralOuSingular = quantasPessoasCabem ? ' pessoa' : ' pessoas';
       return "So cabem mais " + quantasPessoasCabem + " pessoas.";
    }

    carro.quantidadePessoas += qtd;
    return "Ja temos " + carro.quantidadePessoas + " pessoas no carro.";
}
  
 /*  if(total <=carro.assentos){

       carro.quantidadePessoas += qtd;
       return "Ja temos " + total + " pessoas no carro!";

   }else 
   }else 
   }else{
       return false;
   }

}
*/


/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
?

// Mude a cor do carro para vermelho.
?

// E agora, qual a cor do carro?
?

// Mude a cor do carro para verde musgo.
?

// E agora, qual a cor do carro?
?

// Qual a marca e modelo do carro?
?

// Adicione 2 pessoas no carro.
?

// Adicione mais 4 pessoas no carro.
?

// Faça o carro encher.
?

// Tire 4 pessoas do carro.
?

// Adicione 10 pessoas no carro.
?

// Quantas pessoas temos no carro?
?
```
