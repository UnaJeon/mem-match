var cards = document.getElementById('gameCards');
var firstCardClicked;
var secondCardClicked;
var firstCardClasses;
var secondCardClasses;
var maxMatches =9
var matches=0;
var attempts=0
var gamesPlayed=0

cards.addEventListener('click', handleClick);
var button = document.getElementById("resetButton");
button.addEventListener('click',resetGame)

function handleClick(event){
  if(event.target.className.indexOf("card-back")===-1){
    return
  }
  //console.log("event:", event)
  event.target.className += (" hidden")

  if (!firstCardClicked){
  firstCardClicked =event.target
  firstCardClasses = firstCardClicked.previousElementSibling.className
  //console.log("firstCardClass: ", firstCardClasses)
  //console.log("firstCardClicked:", firstCardClicked)
  }else{
    secondCardClicked=event.target
  //console.log("secondCardClicked: ", secondcardClicked)
  secondCardClasses = secondCardClicked.previousElementSibling.className;
  //console.log("secondCardClass: ", secondCardClasses)
  cards.removeEventListener('click',handleClick);
  if(firstCardClasses===secondCardClasses){
    //console.log("The images match")
    cards.addEventListener('click',handleClick)
    firstCardClicked = null;
    secondCardClicked = null;
    matches ++
    attempts++
    displayStats()
    if(matches ===maxMatches){
      var modal = document.querySelector('div.modal-overlay')
      modal.classList.remove('hidden')

    }
  }else{
    //console.log("images do not match")
    setTimeout(function(){
     firstCardClicked.classList.remove('hidden')
     secondCardClicked.classList.remove('hidden');
    cards.addEventListener('click', handleClick)
      firstCardClicked = null;
      secondCardClicked = null;
     },1500)
     attempts++
     displayStats()
   }
  }
}

function displayStats(){
  var numberOfGamesPlayed = document.getElementById('numberOfGamesPlayed')
  numberOfGamesPlayed.textContent=gamesPlayed;
  var numberOfAttempts = document.getElementById('numberOfAttempts')
  numberOfAttempts.textContent=attempts;
  var accuracy= document.getElementById('accuracy')
  accuracy.textContent =calculateAccuracy(attempts,matches);

}

function calculateAccuracy(){
  if(!attempts){
    return "0%"
  }
  return Math.trunc(matches/attempts*100) +"%"
}

function resetGame(){
   matches = 0
   attempts = 0
  gamesPlayed++;
  displayStats()
  resetCards()
  var modal = document.querySelector('div.modal-overlay')
  modal.classList.add("hidden")
}
function resetCards(){
  var hiddenCards = document.querySelectorAll('.card-back')
  for(var i =0; i< hiddenCards.length; i++){
    hiddenCards[i].classList.remove('hidden');
  }
}
