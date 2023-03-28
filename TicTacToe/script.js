console.log("welcome to TicTacToe");
let bgmusic = new Audio("music.mp3");
let turnChange = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");

let turn = "X";
let isGameOver = false;


//function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}


//function to check winner
const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext")

    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6,],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    console.log(boxtext)
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won!!"
            isGameOver = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            
        }

    })

};



//bgmusic.play();


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(box => {
    let boxText = box.querySelector('.boxtext');
    box.addEventListener('click', () => {
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            turnChange.play();
            checkWin();
            if (!isGameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
            
        }
    })
})


//add onclick listner to reset button
reset.addEventListener('click',()=>{
    let boxText = document.querySelectorAll('.boxtext');
    Array.from(boxText).forEach(e=>{
        e.innerText="";
    });

    turn="X";
    isGameOver=false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;

});