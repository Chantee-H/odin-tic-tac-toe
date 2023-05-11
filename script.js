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

const reset = () => {
    for(let i = 0; i < gridItem.length; i++){
    resetBtn.addEventListener('click', () => {
        gridItem[i].innerHTML = ''; 
        output.innerHTML = 'Player: X';
        currentPlayer = "X";
        output2.innerHTML = '';
        gameActive = true;
        gridItem[i].style.backgroundColor = '#BDCDD6';  
        tieCount = 0;    
    })
}
}

const checkWinner = () => {
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    
    for (let i = 0; i < win.length; i++) {
        let combination = win[i];
        let a = gridItem[combination[0]].textContent;
        let b = gridItem[combination[1]].textContent;
        let c = gridItem[combination[2]].textContent;

        if (a !== '' && a === b && b === c) {
            output2.innerHTML = `Player ${a} Wins!`;
            gameActive = false;
            gridItem[combination[0]].style.backgroundColor = '#60bb60';
            gridItem[combination[1]].style.backgroundColor = '#60bb60';
            gridItem[combination[2]].style.backgroundColor = '#60bb60';
       }
       if(tieCount == 9){
        output2.innerHTML = 'Tie!';
       }
    }
}
return{displayPlayer, reset};
})();

gameBoard.displayPlayer();
gameBoard.reset();