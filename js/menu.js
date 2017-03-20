$(function(){
  $(".mobile-nav").click(function(){
      $(this).toggleClass("visible");
      $(".site-nav").toggleClass("visible")
      $(".companytitleandslogan").toggleClass("invisible")
      $(".contentarea").toggleClass("invisible")
  })

})

$(function(){
  $(".menubutton").click(function(){
    $(".site-nav").toggleClass("visible")
    $(".mobile-nav").toggleClass("visible")
    $(".companytitleandslogan").toggleClass("invisible")
    $(".contentarea").toggleClass("invisible")

  })
})

$(document).ready(function(){
  $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });
});
