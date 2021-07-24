$(document).ready(function () {
  $('.sizes .col-2').on('click',function(){
    $('.sizes .col-2').removeClass('active');
    $(this).addClass("active");
  })
});