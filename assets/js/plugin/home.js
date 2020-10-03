(function ($) {
 "use strict";
           /*-----------
           sticky menu
           -------------*/
            $(".header-area").sticky({topSpacing:0});
			 $('.smooth-menu a').bind('click', function(event){
			 	var $anchor=$(this);
			 	var $headerH='30';
			 	$('html,body').stop().animate({
			 	   scrollTop : $($anchor.attr('href')).offset().top - headerH +"px"},
			 	    1200, 'easeInOutExpo');
			 	event.preventDefault();
			 });
		//---------------------------------------------
		//Nivo slider
		//---------------------------------------------
			 $('#ensign-nivoslider').nivoSlider({
				effect: 'fade',
				slices: 15,
				boxCols: 8,
				boxRows: 4,
				animSpeed: 500,
				pauseTime: 5000,
				startSlide: 0,
				directionNav: true,
				controlNavThumbs: true,
				pauseOnHover: true,
				manualAdvance: true
			 });
			 
			$('#ensign-nivoslider-2').nivoSlider({
				effect: 'fade',
				slices: 15,
				boxCols: 8,
				boxRows: 4,
				animSpeed: 500,
				pauseTime: 5000,
				startSlide: 0,
				directionNav: true,
				controlNavThumbs: true,
				pauseOnHover: true,
				manualAdvance: true
			 });

			$('#ensign-nivoslider-3').nivoSlider({
				effect: 'fade',
				slices: 15,
				boxCols: 8,
				boxRows: 4,
				animSpeed: 500,
				pauseTime: 5000,
				startSlide: 0,
				directionNav: true,
				controlNavThumbs: true,
				pauseOnHover: true,
				manualAdvance: true
			 }); 
		
		
})(jQuery); 