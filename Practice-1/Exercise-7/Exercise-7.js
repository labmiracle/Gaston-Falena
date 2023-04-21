/*
En el juego de casino Blackjack, un jugador puede obtener una ventaja sobre
 la casa silleva un registro del número relativo de cartas altas y bajas que 
 quedan en la baraja. Estose llama conteo de cartas.Tener más cartas altas en 
 el mazo favorece al jugador. A cada carta se le asigna un valor deacuerdo con
  la tabla siguiente. Cuando la cuenta es positiva, el jugador debe apostar alto.
  Cuando la cuenta es cero o negativa, el jugador debe apostar poco.Escribe una 
  función de conteo de cartas. Tendrá un parámetrocard, que puede ser un número
   una cadena, y aumentará o disminuirá la variable de conteo global de acuerdo 
   con el valor decard. La función devolverá una cadena con el recuento actual y
    la cadenaBetsi el recuento espositivo, oHoldsi el recuento es cero o negativo.
     El recuento actual y la decisión del jugador(BetoHold) deben estar separados
      por un solo espacio
      Count  Cards
      +1  2, 3, 4, 5, 6
      0  7, 8, 9
      -1  10, J, Q, K,A
      Ejemplo:
      -3 Hold
      5 Bet
      let count = 0;
      function cc(card) 
      {return "Implementar!";}
      cc(2);
      cc(3);
      cc(7);
      cc("K");
      cc("A");
*/
let count = 0;
function cc(card){
    if(typeof card === 'string' ){
        card = card.toUpperCase();
    }
    if(card == 2 || card == 3 || card == 4 || card == 5 || card == 6){
        count++;
    }
    if(card == 10 || card == 'J' || card == 'Q' || card == 'K' || card == 'A'){
        count--;
    }
    if(count <= 0){
        return console.log(`${count} Hold`)
    }else{
        return console.log(`${count} Bet`)
    }
}
cc(2)
cc(3)
cc(7)
cc("k")
cc("a")