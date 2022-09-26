jQuery(document).ready(function($) {
    $(".navbar_toggle").click(function () {
        $("body").css("overflow", "hidden"), $(".overlay").hasClass("show") ? $(".overlay").removeClass("show") : $(".overlay").addClass("show")
    }), $(".overlay").click(function () {
        $("body").css("overflow", "")
    }), $(".main_menu li i").click(function (s) {
        $(this).hasClass("iconopen_menu") ? $(this).removeClass("iconopen_menu").next("ul").slideUp(300) : $(this).parents().siblings("i").hasClass("iconopen_menu") ? ($(".clicked").slideDown(), $(this).addClass("iconopen_menu").next("ul").slideDown(300)) : ($(".main_menu li i").removeClass("iconopen_menu").next("ul").slideUp(300), $(this).addClass("iconopen_menu").next("ul").slideDown(300))
    }), $("button.navbar_toggle").click(function () {
        $(".menu_container").css("right", "0%")
    }), $("#iconbtn-close").click(function () {
        $(".overlay").addClass("show")
    }), $(".overlay").click(function () {
        $(".overlay").removeClass("show"), $(".menu_container").css("right", "-100%")
    }) ,$(".closebtn_menu").click(function () {
      $(".overlay").removeClass("show"), $(".menu_container").css("right", "-100%")
    }) ;







});