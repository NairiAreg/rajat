$(document).ready(function () {
  $('.sizes .col-2').on('click', function () {
    $('.sizes .col-2').removeClass('active');
    $(this).addClass("active");
  })

  $('button.bg-main').on('click', function () {
    if (!$('.sizes .col-2.active').length) {
      $(".sizes").addClass('shake');
      setTimeout(() => {
        $(".sizes").removeClass('shake');
      }, 500);
    }
  })


  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      document.getElementById('navbar_top').classList.add('fixed-top');
      // add padding top to show content behind navbar
      navbar_height = document.querySelector('.navbar').offsetHeight;
      document.body.style.paddingTop = navbar_height + 'px';
    } else {
      document.getElementById('navbar_top').classList.remove('fixed-top');
      // remove padding top from body
      document.body.style.paddingTop = '0';
    }
  });

});