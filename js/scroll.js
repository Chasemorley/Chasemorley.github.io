
function Scroll(){
  var header = document.getElementById('header')
  var yPos = window.pageYOffset;
  if(yPos > 1, yPos< 300){
    var slowscroll = parseInt(header.style.height,10) - (yPos*100)
    header.style.height = "" + slowscroll +"px ";
  }
  if(yPos > 300 )
    header.style.height = "200px"
  else {
    header.style.height = "800px"
  }
}

window.addEventListener("scroll", Scroll)
