(function(win, doc ){
    'use strict';
    /*
    Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
    As regras são:

    - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
    diretamente;
    - O input deve iniciar com valor zero;
    - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
    - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
    multiplicação(x) e divisão(÷);
    - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
    que irá limpar o input, deixando-o com valor 0;

    - A cada número pressionado, o input deve atualizar concatenando cada valor
    digitado, como em uma calculadora real;
    - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
    operação no input. Se o último caractere no input já for um símbolo de alguma
    operação, esse caractere deve ser substituído pelo último pressionado.
    Exemplo:
    - Se o input tem os valores: "1+2+", e for pressionado o botão de
    multiplicação (x), então no input deve aparecer "1+2x".
    - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
    input;
    - Ao pressionar o botão "CE", o input deve ficar zerado.
    */

    //Variaveis

    var $visor = doc.querySelector('[data-js="display"]');
    var $keys  = doc.querySelectorAll('[data-js="keys"]');
    var $keyCE = doc.querySelector('[data-js="keysCE"]');
    var $operators = doc.querySelectorAll('[data-js="keysOp"]');
    var $equalOp = doc.querySelector('[data-js="keysEqual"]');
    var storedNum;
    var operation;
    $visor.value = 0; //Inicia o visor com valor 0.
    

    function initialize(){
        
        captureKeys();
    }
 
    //Captura dos numero e operadores
    function captureKeys(){
    Array.prototype.forEach.call($keys, function(button){
        button.addEventListener('click', addKeys, false);
    });

    Array.prototype.forEach.call($operators, function (button){
        button.addEventListener('click', operationKeys, false);
    });

    $keyCE.addEventListener('click', cleanVisor, false);
    $equalOp.addEventListener('click', equalOp, false);
}
  
    //Funções

    function addKeys(){
        $visor.value += this.value;
        
    }

    function cleanVisor(){
        $visor.value = 0;
    }

    function operationKeys(){
        $visor.value = removeOperator($visor.value);
        $visor.value += this.value;
    }

    function getOperations(){
        return Array.prototype.map.call($operators, function(button){
            return button.value;
        });
    }

    function removelastDigit(number){

        var operators = getOperations();
        var lastItem = number.split('').pop();
        return operators.some(function(operator){
            return operator === lastItem;
        });
                
    }

    function removeOperator(string) {
        if(removelastDigit(string)){
            return string.slice(0, -1);
        }
        return string;
    }

    function calculateDigits(acumulado, atual){
            var firstDigit = acumulado.slice(0, -1);
            var operator = acumulado.split('').pop();
            var lastDigit = removeOperator(atual);
            var lastOperator = getLastOperator(atual);

            return doCalc(operator, firstDigit, lastDigit) + lastOperator;
        
        }
    
    function getLastOperator(value) {
        return removelastDigit(value) ? value.split('').pop() : '';
    }

    function doCalc(operator, firstDigit, lastDigit){
        switch (operator) {
            case '+':
                return Number(firstDigit) + Number(lastDigit);
            case '-':
                return Number(firstDigit) - Number(lastDigit);
            case 'x':
                return Number(firstDigit) * Number(lastDigit);
            case '/':
                return Number(firstDigit) / Number(lastDigit);
        }

    }

    function equalOp(){
        $visor.value = removeOperator($visor.value);
        var allDigit = $visor.value.match(getRegexOperations());
        $visor.value = allDigit.reduce(calculateDigits);

    }

    function getRegexOperations() {
        return new RegExp('\\d+[' + getOperations().join('') + ']?', 'g');

    }

   
initialize();
    
})(window, document)