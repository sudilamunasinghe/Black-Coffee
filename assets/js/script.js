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