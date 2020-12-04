document.addEventListener("DOMContentLoaded", function() {
  
$(".btn").click(function (e) { 
  e.preventDefault();
  alert("Hello");
  
});


// slick carousel
  $('.review-items').slick({
    dots: true,
    arrows: false,
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    speed: 700,
    autoplay: true,
    fade: true,
    cssEase: 'linear'
  });


});