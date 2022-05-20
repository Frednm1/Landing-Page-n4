$(function(){
    $('#hamburger').click(function(){
        const menu = $('.menu-mobile-display');
        let display = menu.css('display');
        if(display == "none"){
            menu.fadeIn();
            document.getElementById("hamburger").src = "images/close.png"
        }else{
            menu.fadeOut();
            document.getElementById("hamburger").src = "images/hamburger.png"
        }
    })
})