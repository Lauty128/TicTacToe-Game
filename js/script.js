import { game, icons } from "./game.js"


let gameGrid = document.querySelector(".gameGrid");
let actionsGame = new game()

gameGrid.addEventListener("mouseover",e=>{
    if(e.target.classList.contains("square")){  
        
        if(!e.target.classList.contains("select")){       // IF IT IS NOT SELECTED, THE FUNCTION DOES THE FOLLOWING
            e.target.innerHTML = icons[actionsGame.currentUser]                     // CUANDO HAGAMOS HOVER IMPRIME EL ICONO  
            e.target.addEventListener("mouseleave", ()=>{                           
                if(!e.target.classList.contains("select")) e.target.innerHTML = ""  // CUANDO SACAMOS EL MOUSE DE LA CARILLA SE BORRA EL ICONO  
            })
        }

        e.target.addEventListener("click",()=>{
            let result;
            if(!e.target.classList.contains("select") && !actionsGame.blockGame){
                actionsGame.printSelection(e.target)
                actionsGame.movesAmount += 1
                if(actionsGame.movesAmount >= 5 && actionsGame.play()){
                    console.log("GANO: ", actionsGame.currentUser)
                    actionsGame.modifyWinningMove()
                    actionsGame.blockGame = true
                }
                actionsGame.toggleUser()
            }
        })
    }


})

document.getElementById("restartButton").addEventListener("click",()=>{
    actionsGame.restart()
})