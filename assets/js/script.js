$(".nav-open").click(function(){
    $(".mobile-navbar").css({
        width: '200px',
    })
    $(".mobile-nav-links").css({
        display: 'block',
    })
    $(this).hide(100)
})
$(".nav-close").click(function(){
    $(".mobile-navbar").css({
        width: '0px',
    })
    $(".nav-open").show(100)
    $(".mobile-nav-links").css({
        display: 'none',
    })
})

// JS Code for Home Slider
var swiper = new Swiper(".home-swipe", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    effect: "fade",
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
});

// Number Count Animation----------------------//
function inVisible(element) {
    //Checking if the element is
    //visible in the viewport
    var WindowTop = $(window).scrollTop();
    var WindowBottom = WindowTop + $(window).height();
    var ElementTop = element.offset().top;
    var ElementBottom = ElementTop + element.height();
    //animating the element if it is
    //visible in the viewport
    if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
    animate(element);
    }
    function animate(element) {
    //Animating the element if not animated before
    if (!element.hasClass('ms-animated')) {
    var maxval = element.data('max');
    var html = element.html();
    element.addClass("ms-animated");
    $({
    countNum: element.html()
    }).animate({
    countNum: maxval
    }, {
    //duration 5 seconds
    duration: 2000,
    easing: 'linear',
    step: function() {
    element.html(Math.floor(this.countNum) + html);
    },
    complete: function() {
    element.html(this.countNum + html);
    }
    });
    }
    }
    //When the document is ready
    $(function() {
    //This is triggered when the
    //user scrolls the page
    $(window).scroll(function() {
    //Checking if each items to animate are
    //visible in the viewport
    $("h2[data-max]").each(function() {
    inVisible($(this));
    });
    })
    });


// Products Section
$(document).ready(function(){
    $(".product-dish-btn").click(function(){
        $(".product-dish").fadeIn(200)
        $(".product-dish").css({
            display: 'block',
        })
        $(".product-drinks").css({
            display: 'none',
        })
        $(".product-desserts").css({
            display: 'none',
        })
        $(this).removeClass("product-unselect")
        $(this).addClass("product-select")
        $(".product-drinks-btn").addClass("product-unselect")
        $(".product-desserts-btn").addClass("product-unselect")
    })
    $(".product-drinks-btn").click(function(){
        $(".product-drinks").fadeIn(200)
        $(".product-drinks").css({
            display: 'block',
        })
        $(".product-dish").css({
            display: 'none',
        })
        $(".product-desserts").css({
            display: 'none',
        })
        $(this).removeClass("product-unselect")
        $(this).addClass("product-select")
        $(".product-dish-btn").addClass("product-unselect")
        $(".product-desserts-btn").addClass("product-unselect")
    })
    $(".product-desserts-btn").click(function(){
        $(".product-desserts").fadeIn(200)
        $(".product-desserts").css({
            display: 'block',
        })
        $(".product-dish").css({
            display: 'none',
        })
        $(".product-drinks").css({
            display: 'none',
        })
        $(this).removeClass("product-unselect")
        $(this).addClass("product-select")
        $(".product-drinks-btn").addClass("product-unselect")
        $(".product-dish-btn").addClass("product-unselect")
    })
})