var = pagetop, menu, yPos;
function yScroll(){
  pagetop = document.getElementById('pagetop')
  menu = document.getElementById('menu')
  yPos = window.pageYOffset;
  if(yPos > 700){
    menu.style.height = "100px";
    pagetop.style.color = "rgba(0,0,0,0,0.6)"
  } else {
    pagetop.style.color = "rgba(0,0,0,0,0)"

  }
}

window.addEventListener("scoll", yScroll)
