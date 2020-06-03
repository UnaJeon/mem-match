var cards = document.getElementById('gameCards');
cards.addEventListener('click', handleClick);

function handleClick(event){
  if(event.target.className.indexOf("card-back")===-1){
    return
  }
  console.log("event:", event)
  event.target.className += (" hidden")

}
