/* jshint devel:true */
$(document).foundation({
"magellan-expedition": {
  active_class: 'active',
  threshold: 0, // how many pixels until the magellan bar sticks, 0 = auto
  destination_threshold: -5, // pixels from the top of destination for it to be considered active
  throttle_delay: 50, // calculation throttling to increase framerate
  fixed_top: 60, // top distance in pixels assigend to the fixed element on scroll
  offset_by_height: true // whether to offset the destination by the expedition height. Usually you want this to be true, unless your expedition is on the side.
}
});

$(document).ready(function(){
	
});

var introHeight = $(window).height();

$(window).on('scroll', function(e){
	var current = e.currentTarget.pageYOffset;
	if (current > introHeight) {
		$('.contain-to-grid.fixed').addClass('active');
	} else {
		$('.contain-to-grid.fixed').removeClass('active');
	}
});