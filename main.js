var cards = document.getElementById('gameCards');
var firstCardClicked;
var secondCardClicked;
var firstCardClasses;
var secondCardClasses;

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
  //console.log("firstCardClick
    secondCardClicked=event.target
  //console.log("secondCardClicked: ", secondcardClicked)
  secondCardClasses = secondCardClicked.previousElementSibling.className;
  //console.log("secondCardClass: ", secondCardClasses)
  cards.removeEventListener('click',handleClick);
  if(firstCardClasses===secondCardClasses){
    //console.log("The images match")
    cards.addEventListener('click',handleClick)
    firstCardClicked=null;
    secondCardClicked=null;
  }else{
    //console.log("images do not match")
    setTimeout(function(){
     firstCardClicked.classList.remove('hidden')
     secondCardClicked.classList.remove('hidden');
    },1500)
    cards.addEventListener('click', handleClick)
    firstCardClicked = null;
    secondCardClicked = null;
  }
 }

}
