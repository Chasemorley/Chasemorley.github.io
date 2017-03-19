$(function(){
  $(".mobile-nav").click(function(){
      $(this).toggleClass("visible");
      $(".site-nav").toggleClass("visible")
      $(".header").toggleClass("invisible")
      $(".contentarea").toggleClass("invisible")
  })

})
