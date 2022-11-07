const game = ["Rock","Paper","Scissors"]
function getComputerChoice() {

 return game[Math.floor(Math.random()*game.length)]
}


// function playonce(playerSelection,computerSelection){

    playerSelection=getComputerChoice()
    computerSelection=getComputerChoice()

    // if (computerSelection== game[0] && playerSelection == game[2]) {
    //         return "You Lose!, Rock beats Scissors"
            
    // }
    // if (computerSelection== game[1] && playerSelection == game[0]) {
    //     return "You Lose!, Paper beats Rock "
        
    // }
    // if (computerSelection== game[2] && playerSelection == game[1]) {
    //     return "You Lose!, Scissors beats Paper"
        
    // }
// if (playerSelection ==game[0] && computerSelection == game[2]){
//     return "You Win!, Rock beats Scissors"
// }
// if (playerSelection ==game[1] && computerSelection == game[0]){
//     return "You win!, Paper beats Rock "
// }
// if (playerSelection ==game[2] && computerSelection == game[1]){
//     return "You win!, Scissors beats Paper"
// }
// }

let you = document.getElementById("you")
let youwin = document.getElementById("youwin")

function yourchoice(){
   
    prompt(`Choose between: 
    Rock(1)
    Paper(2)
    Scissors(3)`)
    
}


 function games(){
        playerSelection = 1,2,3
        computerSelection = getComputerChoice()
        for (var i = 1; i<= 5; i++){
            if (playerSelection ==1 && computerSelection == game[2]){
                return "You Win!, Rock beats Scissors"
            }
            if (playerSelection ==2 && computerSelection == game[0]){
                return "You win!, Paper beats Rock "
            }
            if (playerSelection ==3 && computerSelection == game[1]){
                return "You win!, Scissors beats Paper"
            }

        }
        for(var e = 1; e <5;e++) {
        if (computerSelection== game[0] && playerSelection == 3) {
                return "You Lose!, Rock beats Scissors"
                
        }
        if (computerSelection== game[1] && playerSelection == 1) {
            return "You Lose!, Paper beats Rock "
            
        }
        if (computerSelection== game[2] && playerSelection == 2) {
            return "You Lose!, Scissors beats Paper"
            
        }

        }
        if(i>e) {
            youwin.innerHTML = `Player wins with ${i} victories`
        }
        if(e>i) {
            youwin.innerHTML= `Computer wins with ${e} victories`
        }
 }


