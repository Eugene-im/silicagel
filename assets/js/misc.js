$(document).ready(function () {

    //Clone menu top nav for mobile
    var nav = $('nav').clone();
    $("body").prepend(nav);
    $("<button>Заказать</button>").insertBefore($("body > nav .auth_block"));
    $("<div class='close_menu_mob'><span></span><span></span></div>").insertBefore($("body > nav > ul"));


    $('.progress_bar').scroolly([
        {
            cssFrom: {
                width: '0.0%',
                'background-color': '#F5D653'
            },
            cssTo: {
                width: '100%',
                'background-color': '#F5D653'
            }
        }

    ], $('body'));


    // Inline popups
    // $('#inline-popups').magnificPopup({
    //     delegate: 'a',
    //     removalDelay: 500,
    //     callbacks: {
    //         beforeOpen: function () {
    //             this.st.mainClass = this.st.el.attr('data-effect');
    //         }
    //     },
    //     midClick: true
    // });


    // $('.guifei').magnificPopup({
    //     // type: 'ajax',
    //     // alignTop: true,
    //     // overflowY: 'scroll',
    //     removalDelay: 500,
    //     callbacks: {
    //         beforeOpen: function () {
    //             this.st.mainClass = this.st.el.attr('data-effect');
    //         }
    //     },
    //     midClick: true
    // });

    // $('.money-back').magnificPopup({
    //     // type: 'ajax',
    //     // alignTop: true,
    //     // overflowY: 'scroll',
    //     removalDelay: 500,
    //     callbacks: {
    //         beforeOpen: function () {
    //             this.st.mainClass = this.st.el.attr('data-effect');
    //         }
    //     },
    //     midClick: true
    // });

    // $('.zayavka').magnificPopup({
    //     // type: 'ajax',
    //     // alignTop: true,
    //     // overflowY: 'scroll',
    //     removalDelay: 500,
    //     callbacks: {
    //         beforeOpen: function () {
    //             this.st.mainClass = this.st.el.attr('data-effect');
    //         }
    //     },
    //     midClick: true
    // });



    $('.burger').click(function () {
        $('body').css('overflow', 'hidden');
        $("body > nav").addClass('animatedLeft');
        $(".burger").fadeOut();
        $('.fon').addClass('fon_menu');
    });

    $('body > nav ul li a,.close_menu_mob').click(function () {
        $('body').css('overflow', 'auto');
        $("body > nav").removeClass('animatedLeft');
        $(".burger").fadeIn();
        $('.fon').removeClass('fon_menu');
    });


    $("#top").click(function () {
        $("body, html").animate({
            scrollTop: 0
        }, 800);
        return false;
    });


    if ($(window).width() < 1024) {
        var headerTop = 27;
    } else {
        var headerTop = 57;
    }

    $(window).scroll(function () {

        if ($(this).scrollTop() > headerTop) {
            $('header > .header_top').addClass('fixed');
            $('#top').addClass('show_top');
        } else {
            $('header .header_top').removeClass('fixed');
            $('#top').removeClass('show_top');
        }

    });

    $('.tesimonials_item_block').owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        margin: 40,
        responsiveClass: true,
        navText: false,
        responsive: {
            380: {
                items: 1,
                loop: true,
                autoHeight: true
            },
            1000: {
                items: 2,
                nav: true,
                loop: true
            }
        }
    });

    $('.instruction_item_block').owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        margin: 40,
        responsiveClass: true,
        navText: false,
        responsive: {
            767: {
                items: 4,
                autoHeight: true,
                loop: false
            }
        }
    });

    $('.item_after_h1').owlCarousel({
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        
        loop: true,
        items: 1,
        nav: false,
        margin: 40,
        responsiveClass: true,
        navText: false
    });


    


    $("form#nl_modalForm").submit(function () {

        var checkboxPolitica = $(".nl_politica_area_form input[type=checkbox]");

        if (checkboxPolitica.prop("checked")) {

            console.log('cheked');

            $('.nl_info_request').text('').removeClass('attention error');

            $.ajax({
                type: "POST",
                url: "mail.php",
                data: $("form#nl_modalForm").serialize()
            }).done(function (a) {

                console.log(a);

                $('.nl_info_request').text(a).addClass('attention success');

                setTimeout(function () {
                    $('.nl_info_request').text('').removeClass('attention success');
                    $('.mfp-close').trigger('click');

                }, 1000);

            });

        } else {

            $('.nl_info_request').text('Необходимо принять политику конфиденциальности').addClass('attention error');

        }

        return false;

    });

    $(".nl_politica_area_form input[type=checkbox]").on('click', function () {

        if ($(this).prop('checked')) {

            $('.nl_info_request').text('').removeClass('attention error');

        }

    });


});


var burgerMenu = $('.burger-menu');

function handlingBurgerMenu(state) {
    var burgerMenu = $('.burger-menu'), ctx = state;
    switch (ctx) {
        case'hide':
            burgerMenu.addClass('hide-state');
            break;
        case'color-black':
            burgerMenu.removeClass('hide-state burger-menu_color_white').addClass('burger-menu_color_black');
            break;
        case'color-white':
            burgerMenu.removeClass('hide-state burger-menu_color_black').addClass('burger-menu_color_white');
            break;
        default:
            console.log('handlingBurgerMenu() need fix');
    }
}















