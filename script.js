'use strict';

const player = (sign) => {
    const getSign = () => {
        return sign;
    }
    return {getSign};
};

const gameBoard = (() => {
    let playerX = player("X");
    let playerO = player("O");
    let currentPlayer = playerX.getSign();
    const output = document.getElementById('output');
    const gridItem = document.getElementsByClassName('grid-item');
    let tieCount = 0;
    let gameActive = true;
    const resetBtn = document.querySelector('#reset');
    const output2 = document.getElementById('output2');


 const displayPlayer = () => {
    for (let i = 0; i < gridItem.length; i++) {
        gridItem[i].addEventListener('click', () => {
            if(gridItem[i].innerHTML === '' && gameActive === true) {
            gridItem[i].innerHTML = currentPlayer;
            currentPlayer = currentPlayer === playerX.getSign() ? playerO.getSign() : playerX.getSign();
            tieCount++;
            checkWinner();
        }
        if(currentPlayer == playerX.getSign()){
            output.innerHTML = 'Player: X';
            
        }else{
            output.innerHTML = 'Player: O';
           
        }
    })
}
}
})