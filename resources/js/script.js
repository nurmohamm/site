 //  use of mixitUp

var mixer = mixitup('.grid-portfolio-container');

// use of scrollify js

$(function() {
    $.scrollify({
      section : ".scrollify",
      setHeights: false,
      updateHash: false,
    });
  });
//use of hamburger menu by onclick attribute
function openMenu(){
    document.getElementById('navbar').style.height = "100%";
}
function closeMenu(){
    document.getElementById('navbar').style.height = "0%";
}
//smooth scroll in hamburger menu
$(function(){
    $('.menu-items a').on('click', function(){
        $('html, body').animate({
            scrolltop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });
});