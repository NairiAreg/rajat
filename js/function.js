$ = jQuery;
$( document ).ready(function() {
  
//   $h_slider_options =  {
//       gallery: true,
//       item: 1,
//       loop:true,
//       slideMargin: 0,
//       thumbItem: 6,
//       galleryMargin: 10,
//       thumbMargin: 10,
//       }; 

// Create a media condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia('(min-width: 768px)')
// Check if the media query is true
if (mediaQuery.matches) {
  // Then trigger an alert  
  $v_slider_options = {
    gallery: true,
    item: 1,
    loop:true,
    slideMargin: 0,
    thumbItem: 5,
    galleryMargin: 10,
    thumbMargin: 10,
    vertical: true,
    verticalHeight: 545,
    controls: false
  };
} else {
  $v_slider_options = {
    gallery: false,
    item: 1,
    loop:true,
    slideMargin: 0,
    thumbItem: 5,
    galleryMargin: 10,
    thumbMargin: 10,
    controls: true
  };

}
 
//   h_slider = $('#lightSlider').lightSlider($h_slider_options);
  v_slider = $('#lightSliderVertical').lightSlider($v_slider_options);
 
//   $selector = '#lightSlider li:not(".clone") a';
  $selector = '#lightSliderVertical li:not(".clone") a';
  $().fancybox({
    selector : $selector,
    backFocus : false, 
    buttons : [ 
      'slideShow',
      'share',
      'zoom',
      'fullScreen',
      'thumbs',
      'download',
      'close'
    ]
  });
});
 
// $( window ).resize(function() {
//  slider.destroy();
//  h_slider = $('#ocassions-slider').lightSlider(h_slider_options);
// });