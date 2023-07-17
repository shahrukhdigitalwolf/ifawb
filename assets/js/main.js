$(window).scroll(function() {    
    var scroll = $(window).scrollTop();    
    if (scroll <= 10) {
        $(".logo").removeClass("logo1");
    }else{
        $(".logo").addClass("logo1");
    }
});