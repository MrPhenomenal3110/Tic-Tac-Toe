console.log("Welcome to MyTicTacToe")
let music =  new Audio("/assets/game-bgm.mp3");
let audioturn = new Audio("/assets/clicksound.wav");
let gameover = new Audio("/assets/gameover.wav");
let turn = "X";
let isgameover = false;
//Function to Change The Turn

const changeTurn = ()=>{
    return turn === "X"?"0": "X"
}

//Function to Check Win

const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            music.pause();
            gameover.play();
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "20vh";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
        }
        
    })
}

//Game Logic
music.play('/assets/game-bgm');
let boxes = document.getElementsByClassName("box");
Array.from(boxes). forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === '' && !isgameover){
            boxtext.innerText = turn;
            audioturn.play();
            turn = changeTurn();
            
            checkWin();
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;

        }


    })
})

//Add onclick lick listener to Reset Button

reset.addEventListener('click', ()=>{
    music.play();
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    isgameover = false;
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0vh";
})