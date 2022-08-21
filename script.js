let gameGrid = document.querySelector(".gameGrid");
let icons = {
    "xIcon": `<div class="xIcon iconOpacity">
    <i class="x1"></i>
    <i class="x2"></i>
    </div>`,
    "circleIcon": `<div class="circleIcon iconOpacity"></div>`
}

class game {
    constructor(){
        this.xUser=  "xIcon";
        this.circleUser= "circleIcon";
        this.currentUser = this.xUser;
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
            if(!e.target.classList.contains("select")){
                actionsGame.printSelection(e.target)
                actionsGame.toggleUser()
            }
            //FUNCION QUE CONTROLE SI HAY UNA LINEA DE TRES IGUALES
        })
    }


})