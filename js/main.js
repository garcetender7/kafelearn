jQuery(document).ready(function($) {
    "use strict";

    //counter
	if ($(".counter_box").length) {
		$(window).ready(function() {
			$('.counter_value').each(function() {
			  let $this = $(this),
				countTo = $this.attr('data-count');
			  $({
				countNum: $this.text()
			  }).animate({
				  countNum: countTo
				},
				{
				  duration: 2000,
				  easing: 'swing',
				  step: function() {
					$this.text(Math.floor(this.countNum));
				  },
				  complete: function() {
					$this.text(this.countNum);
				  }
			});
		});
			
	});}

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

    //slider-product
    $('.total_products').slick({
		rtl:true,
        infinite:true,
		arrows:false,
		slidesToShow:4,
		slidesToScroll:1,
		autoplay:true,
		autoplaySpeed:2000,
        dots: true,
		responsive: [
            {
				breakpoint: 2000,
				settings: {
				  slidesToShow: 5,
				  slidesToScroll: 1,
				}
			},
			{
				breakpoint: 1500,
				settings: {
				  slidesToShow: 4,
				  slidesToScroll: 1,
				}
			},
			{
				breakpoint: 1199,
				settings: {
				  slidesToShow: 3,
				  slidesToScroll: 1,
				}
			},
			{
				breakpoint: 991,
				settings: {
				  slidesToShow: 3,
				  slidesToScroll: 1,
				}
			},
			{
			  breakpoint: 870,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			  }
			},
			{
			  breakpoint: 575,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			},
			
		]
	});

    //slider-article
    $('.total_articles').slick({
		rtl:true,
        infinite:true,
		arrows:false,
		slidesToShow:4,
		slidesToScroll:1,
		autoplay:true,
		autoplaySpeed:2000,
        dots: true,
		responsive: [
            {
				breakpoint: 2000,
				settings: {
				  slidesToShow: 5,
				  slidesToScroll: 1,
				}
			},
			{
				breakpoint: 1500,
				settings: {
				  slidesToShow: 4,
				  slidesToScroll: 1,
				}
			},
			{
				breakpoint: 1199,
				settings: {
				  slidesToShow: 3,
				  slidesToScroll: 1,
				}
			},
			{
				breakpoint: 991,
				settings: {
				  slidesToShow: 3,
				  slidesToScroll: 1,
				}
			},
			{
			  breakpoint: 870,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			  }
			},
			{
			  breakpoint: 575,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			},
			
		]
	});

	//slider-comment
    // $('.total_comments').slick({
	// 	// infinite:false,
	// 	// vertical: true,
	// 	// verticalSwiping: true,
	// 	// slidesToShow: 1,
	// 	// slidesToScroll: 1,
	// });

// GoToTop button 
	$("#back_top").hide();$(function () 
	{$(window).scroll(function(){if ($(this).scrollTop() > 150)
	{$('#back_top').fadeIn();} else{$('#back_top').fadeOut();}});
	$('#back_top a').click(function(){$('body,html').animate({scrollTop:0},800);
	return false;});});


});