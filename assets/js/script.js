$(".nav-open").click(function(){
    $(".mobile-navbar").css({
        right: '0',
    })
    $(this).hide(100)
})
$(".nav-close").click(function(){
    $(".mobile-navbar").css({
        right: '-200px',
    })
    $(".nav-open").show(100)
})