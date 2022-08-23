let gameGrid = document.querySelector(".gameGrid");
let icons = {
    "xIcon": `<div class="xIcon iconOpacity">
    <i class="x1"></i>
    <i class="x2"></i>
    </div>`,
    "circleIcon": `<div class="circleIcon iconOpacity"></div>`
}
let moves = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
]


class game {
    constructor(){
        this.xUser=  "xIcon";
        this.circleUser= "circleIcon";
        this.currentUser = this.xUser;
        this.movesAmount=0
        this.winningUser="empate"
    }

    printSelection(grid){
        grid.classList.add("select")
        grid.innerHTML = icons[actionsGame.currentUser]
        grid.firstElementChild.classList.remove("iconOpacity")
    }

    toggleUser(){
        if(this.currentUser == this.xUser) this.currentUser = this.circleUser
        else this.currentUser = this.xUser
    }


    play(){
        let result = false
        let amount;
        moves.forEach(move=>{
            amount = 0;
            move.forEach(index=>{
                if(document.getElementsByClassName(`square${index}`)[0].firstElementChild && document.getElementsByClassName(`square${index}`)[0].firstElementChild.classList.contains(this.currentUser)){
                    amount++
                }
            })
            if(amount == 3){
                result = true
                return
            }
        })
        return result
    }

    restart(){
        for (let index = 0; index < document.getElementsByClassName("square").length -1; index++) {
            document.getElementsByClassName("square")[index].innerHTML = ""
        }
        this.currentUser = this.xUser;
        this.movesAmount = 0
        this.winningUser = "empate"
    }
    

}

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
            if(!e.target.classList.contains("select")){
                actionsGame.printSelection(e.target)
                actionsGame.movesAmount += 1
                if(actionsGame.movesAmount >= 5 && actionsGame.play()){
                    console.log("GANO: ", actionsGame.currentUser)
                }
                //FUNCION QUE CONTROLE SI HAY UNA LINEA DE TRES IGUALES
                actionsGame.toggleUser()
            }
        })
    }


})

document.getElementById("restartButton").addEventListener("click",()=>{
    actionsGame.restart()
})