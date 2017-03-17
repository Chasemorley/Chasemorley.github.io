
function Scroll(){
  var header = document.getElementById('header')
  var yPos = window.pageYOffset;
  if( yPos< 200){
    var slowscroll = 800 - (yPos*100)
    header.style.height = "" + slowscroll +"px ";
  }

  if(yPos > 200 ){
    header.style.height = "200px"
  }
  else {
    header.style.height = "800px"
  }
}

window.addEventListener("scroll", Scroll)
