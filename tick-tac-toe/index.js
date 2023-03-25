boxs=document.querySelectorAll(".box")
game_info=document.querySelector(".game_info")
btn=document.querySelector(".btn")

let currentPlayer
let gameGrid
const winningPositions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
initGame()
function initGame(){
    gameGrid=["","","","","","","","",""]
    currentPlayer="X"
    game_info.innerText=`Current Player - ${currentPlayer}`
    boxs.forEach((box,index)=>{
        box.innerText=""
        box.classList=`box box${index+1}`
        box.style.pointerEvents = "all";
    })
    btn.classList.remove("active")
}

function checkGameOver(){
    winningPositions.forEach((position)=>{
        if((gameGrid[position[0]]!="" || gameGrid[position[1]]!="" || gameGrid[position[2]]!="")
         && (gameGrid[position[0]] === gameGrid[position[1]] ) && (gameGrid[position[1]] === gameGrid[position[2]])){
            boxs.forEach((box,index)=>{
                box.style.pointerEvents="none"
            })
            boxs[position[0]].classList.add("win")
            boxs[position[1]].classList.add("win")
            boxs[position[2]].classList.add("win")
            answer=gameGrid[position[0]]
            game_info.innerText=`Winner Player- ${answer}`
            btn.classList.add("active")
            return
        }
        let fillCount = 0;
        gameGrid.forEach((box) => {
        if(box !== "" )
            fillCount++;
    });

    if(fillCount === 9) {
        game_info.innerText = "Game Tied !";
        btn.classList.add("active");
    }
    })
}

function handleClick(index){
    if(gameGrid[index]==""){
        boxs[index].innerText=currentPlayer
        gameGrid[index]=currentPlayer
        if(currentPlayer==="X"){
            currentPlayer="O"
        }
        else{
            currentPlayer="X"
        }
        game_info.innerText=`Current Player - ${currentPlayer}`
        boxs[index].style.pointerEvents="none"
        checkGameOver()
    }
}

boxs.forEach((box,index)=>{
    box.addEventListener("click",()=>{
        handleClick(index)
    })
})

btn.addEventListener("click",initGame)