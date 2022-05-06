$(function(){
  $('.slider').slick({
    autoplay: true, 
    autoplaySpeed: 0, 
    speed: 7000, 
    cssEase: "linear", 
    slidesToShow: 2, 
    swipe: false, 
    arrows: false, 
    pauseOnFocus: false, 
    pauseOnHover: false, 
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1, 
        }
      }
    ]
  });
});



function EachTextAnimeControl() {
$('.eachTextAnime').each(function () {
var elemPos = $(this).offset().top - 50;
var scroll = $(window).scrollTop();
var windowHeight = $(window).height();
if (scroll >= elemPos - windowHeight) {
$(this).addClass("appeartext");

} else {
$(this).removeClass("appeartext");
}
});
}


$(window).scroll(function () {
EachTextAnimeControl();
});

$(window).on('load', function () {

  var element = $(".eachTextAnime");
  element.each(function () {
    var text = $(this).text();
    var textbox = ""; 
    text.split('').forEach(function (t, i) {
      if (t !== " ") {
        if (i < 10) {
          textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
        } else {
          var n = i / 10;
          textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
        }

      } else {
        textbox += t;
      }
    });
    $(this).html(textbox);
  });

  EachTextAnimeControl();
});


var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');

  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var classname = document.getElementsByClassName("confetti-button");

for (var i = 0; i < classname.length; i++) {
  classname[i].addEventListener('click', animateButton, false);
}



  //文字下から
