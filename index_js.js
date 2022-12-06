
$(document).ready(function() {
    $(window).on("scroll", function() {
      console.log($(this).scrollTop())
      if($(this).scrollTop() >= 100){
        // set to new image
        $(".brand-logo img").attr("src","pics/pacman.PNG");
      } else {
        //back to default
        $(".brand-logo img").attr("src","pics/only pac.PNG");
      }
    })
  })


