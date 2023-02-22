$(document).ready(function(){
    $(window).scroll(function(){
        // Anzeigen des Menüs beim scrollen
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
            $('.navbar-new').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
            $('.navbar-new').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Slid-up Script Funktion
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // Ein und Ausschalten des menu/navbar bei Veränderung der Bildschrimgröße
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Animation fürs Tippen
    var typed = new Typed(".typing", {
        strings: ["Informatiker", "Student", "Fachinformatiker", "Programmierer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Informatiker", "Student", "Fachinformatiker", "Programmierer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Projekte-Karussell Script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000, 
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});