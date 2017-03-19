
function Scroll(){
  var header = document.getElementById('header')
  var yPos = window.pageYOffset;
  var logo = document.getElementById("logo")
  if(yPos > 200 ){

    if(screen.width < 768){
      header.style.height = "200px";
      header.style.background = "rgba(250,0,0,0.6)";
      logo.style.opacity = 1;
    }
    else{
      header.style.height = "100px"
      header.style.background = "rgba(250,0,0,0.6)"
      logo.style.opacity = 1;
    }
  }

  else{
    header.style.height = "100px";
    logo.style.opacity = 0;
    header.style.background = "rgba(0,0,0,0)"
  }
}

window.addEventListener("scroll", Scroll)
