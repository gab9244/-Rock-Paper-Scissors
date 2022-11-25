const PlayerPoints = document.querySelector("#PlayerPoints")
const ComputerPoints = document.querySelector("#ComputerPoints")
const Rock_div =document.getElementById("Rock_div")
const Paper_div =document.getElementById("Paper_div")
const Scissors_div =document.getElementById("Scissors_div")
const result = document.querySelector('#result')

const Choices = ["rock","paper","scissors"]
function getComputerChoice() {

 return Choices[Math.floor(Math.random()*Choices  .length)]
}
let playerp = 0
let computerp = 0
function Round(PlayerSelection,ComputerSelection) {
  
  ComputerSelection = getComputerChoice()
   if(
    PlayerSelection == 'rock' && ComputerSelection =='scissors'|| 
    PlayerSelection == 'paper' && ComputerSelection =='rock'||
    PlayerSelection == 'scissors' && ComputerSelection =='paper') {
    PlayerPoints.textContent = playerp +=1
   }
    else if( 
      ComputerSelection == 'rock' && PlayerSelection == 'scissors'||
      ComputerSelection == 'paper' && PlayerSelection == 'rock'||
      ComputerSelection == 'scissors' && PlayerSelection == 'paper'
    ){
      ComputerPoints.textContent = computerp +=1
    }
    if (playerp ==5) {
      result.textContent = 'O jogador venceu'
    }
    else if( computerp == 5) {
         result.textContent = 'O computador venceu'
    }

}




  // Usei o addEventListener no botão para que algo aconteça quando ele for clicado
Rock_div.addEventListener('click', function()  {
  //Os valores de cada botão substituirão o parãmetro da função games pelos seus valores quando clicados
  Round('rock');
    });
    
Paper_div.addEventListener('click', function()  {
  Round('paper');
});

Scissors_div.addEventListener('click', function()  {
  Round('scissors');
    });
    
//Funçõa em escopo global




