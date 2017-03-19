$(function(){
  $(".mobile-nav").click(function(){
      $(this).toggleClass("visible");
      $(".site-nav").toggleClass("visible")
      $(".companytitleandslogan").toggleClass("invisible")
      $(".contentarea").toggleClass("invisible")
  })

})
