 
const Choices = ["rock","paper","scissors"]
function getComputerChoice() {

 return Choices[Math.floor(Math.random()*Choices  .length)]
}
let PlayerPoints_span = 0
let ComputerPoints_span = 0
const placar = document.getElementsByClassName('placar')
const PlayerPoints = document.getElementById("PlayerPoints")
const ComputerPoints = document.getElementById("ComputerPoints")
const Rock_div = document.getElementById("Rock_div")
const Paper_div = document.getElementById("Paper_div")
const Scissors_div = document.getElementById("Scissors_div")
const result = document.getElementById('result')

function games(PlayerChoice) {
 const computerChoice = getComputerChoice()
 
 if(PlayerChoice=='rock'&& computerChoice =='scissors'||
    PlayerChoice == 'paper'&& computerChoice == 'rock' ||
    PlayerChoice == 'scissors' && computerChoice == 'paper'
 ){
  PlayerPoints.innerHTML=  PlayerPoints_span +=1
 }
 else if(computerChoice =='rock' && PlayerChoice == 'scissors' ||
        computerChoice == 'paper' && PlayerChoice =='rock' ||
        computerChoice == 'scissors' && PlayerChoice =='paper'
 ){
  ComputerPoints.innerHTML = ComputerPoints_span +=1
 }
 else {
  console.log('Tie')
 }
}
//Função que quarda os 3 botões
function main (){
  // Usei o addEventListener no botão para que algo aconteça quando ele for clicado
Rock_div.addEventListener('click', function()  {
  //Os valores de cada botão substituirão o parãmetro da função games pelos seus valores quando clicados
  games('rock');
    });
    
Paper_div.addEventListener('click', function()  {
  games('paper');
});

Scissors_div.addEventListener('click', function()  {
  games('scissors');
    })}
    
//Funçõa em escopo global
main();





