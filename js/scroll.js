
function Scroll(){
  var header = document.getElementById('header')
  var yPos = window.pageYOffset;
  var logo = document.getElementById("logo")
  if(yPos > 200 ){
    header.style.height = "80px";
    logo.style.opacity = 1;
    $(".dropdownmenu").css("-webkit-transform","translate(0,-71px)")
  }else{
    header.style.height = "150px";
    logo.style.opacity = 0;
    $(".dropdownmenu").css("-webkit-transform","translate(0,0)")

  }
}

window.addEventListener("scroll", Scroll)
