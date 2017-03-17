var = header, yPos;
function yScroll(){
  header = document.getElementById('header')
  yPos = window.pageYOffset;
  if(yPos > 11){
    header.style.height = header.style.height - yPos;
  } else {
    header.style.height = "800px"
  }
}

window.addEventListener("scroll", yScroll)
