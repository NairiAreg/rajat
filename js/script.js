$(document).ready(function () {

  !localStorage.getItem("arr") && localStorage.setItem("arr", "[]");
  !localStorage.getItem("id") && localStorage.setItem("id", "1");

  
  $("sup.cartSup").html(JSON.parse(localStorage.getItem("arr")).length);




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
    } else {
      let a = JSON.parse(localStorage.getItem("arr"));

      a.push([localStorage.getItem("id"),$('.desc .title').text(), $('.desc .price').text(), $('.desc .text-secondary').text(), $('.desc .col-2.active span').text(), $('#lightSliderVertical > li:nth-child(2) > a > img').attr('src'),$('.desc .singleColor').attr('data-color')]);
      localStorage.setItem("arr", JSON.stringify(a));
      
      localStorage.setItem("id", Number(localStorage.getItem("id"))+1);

      $("sup.cartSup").html(Number($("sup.cartSup").html()) + 1);

      window.location.href = './index2.html';

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