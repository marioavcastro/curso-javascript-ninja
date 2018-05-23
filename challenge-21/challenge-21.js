/*
O desafio de hoje será um pequeno projeto: um cronômetro!
As regras para criação do cronômetro são as seguintes:
1. Crie um arquivo index.html e adicione esse script a ele;
2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
Ele será o nosso cronômetro;
3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
cada segundo;
5. Ao clicar em Stop, o cronômetro deve parar de contar;
6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.

Utilize o atributo data-js para nomear o campo e os botões. Você pode
usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
*/
// ?

(function (win,doc){
    'use strict';
         
    var $crono = doc.querySelector('[data-js="crono"]');
    var $btnStart = doc.querySelector('[data-js="iniciar"]');
    var $btnStop  = doc.querySelector('[data-js="parar"]');
    var $btnReset = doc.querySelector('[data-js="reset"]');
    var temp;
    $crono.value = 0;

   /*Cronometro
   function timer(){
       $crono.value = +$crono.value + 1;
       temp = setTimeout(timer,1000);
   }

    $btnStart.addEventListener('click', function(event){
        event.preventDefault();
        timer();

        //2ª forma de se fazer
       /* setTimeout(function timer(){
            $crono.value++;
            timer();
        },1000);

    }, false);
    
    //Parar cronometro
    $btnStop.addEventListener('click', function stopTempo(event){
        event.preventDefault();
        clearTimeout(temp);
    }, false);

    //Resetar cronometro
    $btnReset.addEventListener('click', function (event){
        event.preventDefault();
        
        if(temp){
            $crono.value = 0;
            clearTimeout(temp);
           }
           
    }, false);
    */

    //Segunda forma de cronometro
    
    $btnStart.addEventListener('click', cronometro, false);
    $btnStop.addEventListener('click', stopTime, false);
    $btnReset.addEventListener('click', timeReset, false);

    function cronometro(){
        $crono.value = +$crono.value + 1;
        temp = setTimeout(cronometro,1000);
    }

    function stopTime(){
        clearTimeout(temp);
    }

    function timeReset(){
        $crono.value = 0;
        stopTime();
    }

    
})(window, document);
