$(document).ready(function(){
  $(window).scroll(function(){
      if(this.scrollY > 80){
          $('.navbar').addClass("sticky");
      }else{
          $('.navbar').removeClass("sticky");
      }
    });


  // toggling menu bar
  $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");

  });

});

