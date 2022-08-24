export { game, icons, moves }

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
        this.winningMove;
        this.blockGame= false;
    }

    printSelection(grid){
        grid.classList.add("select")
        grid.innerHTML = icons[this.currentUser]
        grid.firstElementChild.classList.remove("iconOpacity")
    }

    toggleUser(){
        if(this.currentUser == this.xUser) this.currentUser = this.circleUser
        else this.currentUser = this.xUser
    }

    modifyWinningMove(){
        this.winningMove.forEach(index=>{
            document.getElementsByClassName(`square${index}`)[0].firstElementChild.classList.add("winningSquare")
        })
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
                this.winningMove = move
                return
            }
        })
        return result
    }

    restart(){
        for (let index = 0; index < document.getElementsByClassName("square").length; index++) {
            document.getElementsByClassName("square")[index].innerHTML = ""
            document.getElementsByClassName("square")[index].classList.remove("select")
        }
        this.currentUser = this.xUser;
        this.movesAmount = 0
        this.winningUser = "empate"
        this.blockGame =false
    }
    

}