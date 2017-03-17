
function Scroll(){
  var header = document.getElementById('header')
  var yPos = window.pageYOffset;
  if( yPos< 200){
    var slowscroll = 800 - (yPos*100)
    header.style.height = "" + slowscroll +"px ";
    header.style.background = "rgba(250,0,0,0.0)"

  }

  if(yPos > 200 ){
    header.style.height = "200px"
    header.style.background = "rgba(250,0,0,0.6)"

  }

  else {
    header.style.height = "800px"
  }
}

window.addEventListener("scroll", Scroll)
