


// on click
 function startAnim()  {
    gsap.to('.logo--left', {
        top: 30,
        left: 30,
        duration: 0.25,
        start: "top top",
        end: "+=100%",
        ease: "none", 
    });
    gsap.to('.logo--right', {
        bottom: 30,
        right: 30,
        duration: 0.25,
        ease: "none",
        start: "top top",
        end: "+=100%"
    });
    gsap.to(".hiddenImage video", {
        duration: 1.5,
        scale: 1,
    });

        
        var center = document.getElementById("cent");
        center.className += " relative";


        var hi = document.getElementById("hi");
        hi.className += " fadeIn";

        var overflow = document.getElementById("overflow");
        overflow.className += " scroll";

        var video = document.getElementById("videoid");
        video.className += " bigger";

        var left = document.getElementById("logoleft");
        left.className += " fixed ";

        var right = document.getElementById("logoright");
        right.className += " fixed ";


 }



 gsap.to(".hiddenImage", {
    scrollTrigger: {
        trigger: ".hiddenImage",
        start: "70%+=5px center ",
        end: "bottom 200px",
        toggleActions: "restart pause reverse reset",
    },
    duration: 0.3,
    scale: 0.7,
    opacity: 0,

    filter:"blur(4px)"
});


// test on scroll




// show sub logo
$(window).scroll(function() {    
    var scrollBottom = $(window).scrollTop();
    if (scrollBottom >= $(
        '.text--ctn').offset().top + $('.text--ctn').
          outerHeight() - window.innerHeight + 300) {
        $("#logoright").addClass("rightmeetsub");
        $("#logoleft").addClass("leftmeetsub");
        $(".logo-sub").addClass('logo-bigger');
    } else {
        $("#logoright").removeClass("rightmeetsub");
        $("#logoleft").removeClass("leftmeetsub");
        $(".logo-sub").removeClass('logo-bigger');
    }
});


$(window).on('scroll', function() {
    if ($(window).scrollTop() >= $(
      '.text--ctn').offset().top + $('.text--ctn').
        outerHeight() - window.innerHeight - 200) {
        $("#logoleft").addClass("leftmeet");
        $("#logoright").addClass("rightmeet");
    
    } else {
        $("#logoleft").removeClass("leftmeet");
        $("#logoright").removeClass("rightmeet");
    }

});


