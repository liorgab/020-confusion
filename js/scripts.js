$(document).ready(function(){
  <!-- carousel interval script -->
  $("#mycarousel").carousel({ interval: 1000 });
  <!-- carousel button script-->
  $("#carouselButton").click(function(){
    if ($('#carouselButton').children('span').hasClass('fa-pause'))
     {
      $("#mycarousel").carousel('pause');
      $("#carouselButton").children('span').removeClass('fa-pause');
      $("#carouselButton").children('span').addClass('fa-play');
     }

    else if ($('#carouselButton').children('span').hasClass('fa-play'))
     {
      $("#mycarousel").carousel('cycle');
      $("#carouselButton").children('span').removeClass('fa-play');
      $("#carouselButton").children('span').addClass('fa-pause');
      }

  });
  <!-- reserve script button -->
  $("#reserve-button").click(function(){
     $("#reserveModal").modal();
   });
   <!-- login script button -->
   $("#login-button").click(function(){
      $("#loginModal").modal();
    });

})
