var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function ($) {
	"use strict";

	$(function () {
		var header = $(".start-style");
		$(window).scroll(function () {
			var scroll = $(window).scrollTop();

			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});

	//Animation

	$(document).ready(function () {
		$('body.hero-anime').removeClass('hero-anime');
	});

	//Menu On Hover

	$('body').on('mouseenter mouseleave', '.nav-item', function (e) {
		if ($(window).width() > 750) {
			var _d = $(e.target).closest('.nav-item'); _d.addClass('show');
			setTimeout(function () {
				_d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
			}, 1);
		}}
	);
	
	//Switch light/dark

	$("#switch").on('click', function () {
		if ($("body").hasClass("dark")) {
			$("body").removeClass("dark");
			$("#switch").removeClass("switched");
		}
		else {
			$("body").addClass("dark");
			$("#switch").addClass("switched");
		}
	});
	


	// Cleanup Menus
	
	$(".iw4x-menu").on('click', function () {
		$(".iw6x-menu").removeClass("open");
		$(".iw6x-menu").removeClass("show");
		$(".guides").removeClass("open");
		$(".guides").removeClass("show");
		$(".s1x-menu").removeClass("open");
		$(".s1x-menu").removeClass("show");
		$(".socials").removeClass("open");
		$(".socials").removeClass("show");
	});
	
	$(".iw6x-menu").on('click', function () {
		$(".iw4x-menu").removeClass("open");
		$(".iw4x-menu").removeClass("show");
		$(".guides").removeClass("open");
		$(".guides").removeClass("show");
		$(".s1x-menu").removeClass("open");
		$(".s1x-menu").removeClass("show");
		$(".socials").removeClass("open");
		$(".socials").removeClass("show");
	});
	
	$(".s1x-menu").on('click', function () {
		$(".iw6x-menu").removeClass("open");
		$(".iw6x-menu").removeClass("show");
		$(".iw4x-menu").removeClass("open");
		$(".iw4x-menu").removeClass("show");
		$(".guides").removeClass("open");
		$(".guides").removeClass("show");
		$(".socials").removeClass("open");
		$(".socials").removeClass("show");
	});
	
	$(".guides").on('click', function () {
		$(".iw6x-menu").removeClass("open");
		$(".iw6x-menu").removeClass("show");
		$(".iw4x-menu").removeClass("open");
		$(".iw4x-menu").removeClass("show");
		$(".s1x-menu").removeClass("open");
		$(".s1x-menu").removeClass("show");
		$(".socials").removeClass("open");
		$(".socials").removeClass("show");
	});
	
	$(".socials").on('click', function () {
		$(".iw6x-menu").removeClass("open");
		$(".iw6x-menu").removeClass("show");
		$(".iw4x-menu").removeClass("open");
		$(".iw4x-menu").removeClass("show");
		$(".s1x-menu").removeClass("open");
		$(".s1x-menu").removeClass("show");
		$(".guides").removeClass("open");
		$(".guides").removeClass("show");
	});

	// Clean up hover menus

	$('.iw4x-menu').mouseover(function() {
		$(".iw6x-menu").removeClass("open");
		$(".iw6x-menu").removeClass("show");
		$(".guides").removeClass("open");
		$(".guides").removeClass("show");
		$(".s1x-menu").removeClass("open");
		$(".s1x-menu").removeClass("show");
		$(".socials").removeClass("open");
		$(".socials").removeClass("show");
	  });

	$('.iw6x-menu').mouseover(function() {
		$(".iw4x-menu").removeClass("open");
		$(".iw4x-menu").removeClass("show");
		$(".guides").removeClass("open");
		$(".guides").removeClass("show");
		$(".s1x-menu").removeClass("open");
		$(".s1x-menu").removeClass("show");
		$(".socials").removeClass("open");
		$(".socials").removeClass("show");
	  });
	  
	$('.s1x-menu').mouseover(function() {
		$(".iw4x-menu").removeClass("open");
		$(".iw4x-menu").removeClass("show");
		$(".iw6x-menu").removeClass("open");
		$(".iw6x-menu").removeClass("show");
		$(".guides").removeClass("open");
		$(".guides").removeClass("show");
		$(".socials").removeClass("open");
		$(".socials").removeClass("show");
	  });
	  
	$('.guides').mouseover(function() {
		$(".iw4x-menu").removeClass("open");
		$(".iw4x-menu").removeClass("show");
		$(".iw6x-menu").removeClass("open");
		$(".iw6x-menu").removeClass("show");
		$(".s1x-menu").removeClass("open");
		$(".s1x-menu").removeClass("show");
		$(".socials").removeClass("open");
		$(".socials").removeClass("show");
	  });
	  
	$('.socials').mouseover(function() {
		$(".iw4x-menu").removeClass("open");
		$(".iw4x-menu").removeClass("show");
		$(".iw6x-menu").removeClass("open");
		$(".iw6x-menu").removeClass("show");
		$(".s1x-menu").removeClass("open");
		$(".s1x-menu").removeClass("show");
		$(".guides").removeClass("open");
		$(".guides").removeClass("show");
	  });

})(jQuery); 

}
/*
     FILE ARCHIVED ON 23:22:42 Apr 29, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:39:17 May 24, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 77.293
  exclusion.robots: 0.269
  exclusion.robots.policy: 0.252
  cdx.remote: 0.091
  esindex: 0.012
  LoadShardBlock: 45.776 (3)
  PetaboxLoader3.datanode: 190.114 (5)
  load_resource: 303.943 (2)
  PetaboxLoader3.resolve: 143.942 (2)
*/