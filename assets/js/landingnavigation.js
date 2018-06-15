$(document).ready(function () {
    $('nav ul').navigation(85);

    
    $('body > nav > ul').navigation(105);

    $("#logo").click(function () {
        $("body, html").animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    

});