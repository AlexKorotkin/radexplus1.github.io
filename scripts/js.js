
$('.sl').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    dots: true,
    zIndex: 999,
    arrows: false  
});

$(document).ready(function() {
    $("a#photo").fancybox({
        transitionIn: 'elastic',
        transitionOut: 'elastic',
        speedIn: 500,
        speedOut: 500
    });
});

function readMore() {
    var dots = document.getElementById("dots");
    var more = document.getElementById("more");
    var btn = document.getElementById("btn");
    
    if(dots.style.display === "none") {
        dots.style.display = "inline"; 
        btn.innerHTML = "Показать больше";  
        more.style.display = "none"; 
    }else {
        dots.style.display = "none"; 
        btn.innerHTML = "Скрыть"; 
        more.style.display = "inline";
    }
 
    
}
function readMore2() {

    var dots2 = document.getElementById("dots2");
    var more2 = document.getElementById("more2");
    var btn2 = document.getElementById("btn2");

    if(dots2.style.display === "none") {
        dots2.style.display = "inline";
        btn2.innerHTML = "Показать больше"; 
        more2.style.display = "none";
    }else {
        dots2.style.display = "none"; 
        btn2.innerHTML = "Скрыть"; 
        more2.style.display = "inline";
    
     }
}

function readMore3() {

    var dots3 = document.getElementById("dots3");
    var more3 = document.getElementById("more3");
    var btn3 = document.getElementById("btn3");

    if(dots3.style.display === "none") {
        dots3.style.display = "inline";
        btn3.innerHTML = "Показать больше"; 
        more3.style.display = "none";
    }else {
        dots3.style.display = "none"; 
        btn3.innerHTML = "Скрыть"; 
        more3.style.display = "inline";
    
     }
}
// фиксированное меню

$(function(){
    $(window).scroll(function() {
    var top = $(document).scrollTop();
    if (top < 192) $(".mobile_nav").css({top: '0', position: 'relative'});
    else $(".mobile_nav").css({top: '0', position: 'fixed'});
    });
    });

    