var cards = document.getElementById('gameCards');
var firstCardClicked;
var secondCardClicked;
var firstCardClasses;
var secondCardClasses;
var maxMatches =9
var matches=0;
cards.addEventListener('click', handleClick);

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

  }
 }

}
