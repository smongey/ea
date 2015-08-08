/* jshint devel:true */
$(document).foundation({
"magellan-expedition": {
  active_class: 'active',
  threshold: 0, // how many pixels until the magellan bar sticks, 0 = auto
  destination_threshold: 10, // pixels from the top of destination for it to be considered active
  throttle_delay: 50, // calculation throttling to increase framerate
  fixed_top: 120, // top distance in pixels assigend to the fixed element on scroll
  offset_by_height: true // whether to offset the destination by the expedition height. Usually you want this to be true, unless your expedition is on the side.
}
});

$(document).ready(function(){

});



$('.videolink').on('click', function(){
	
	$('.overlay').removeClass('inactive');

});

$('.kickstartervideo').on('click', function(e){
	e.preventDefault();
	$('.overlaytwo').removeClass('inactive');

});



$('.close').on('click', function(e){


	var vimeoWrap = $('.vimeowrap');
	vimeoWrap.html(vimeoWrap.html());

	var vimeoWrapTwo = $('.vimeowraptwo');
	vimeoWrapTwo.html(vimeoWrapTwo.html());

	$('.overlay, .overlaytwo').addClass('inactive');

});



var introHeight = $(window).height();

$(window).on('scroll', function(e){
	var current = e.currentTarget.pageYOffset;
	if (current > introHeight - 80) {
		$('.contain-to-grid.fixed').addClass('active');
	} else {
		$('.contain-to-grid.fixed').removeClass('active');
	}
	var offset = current;
	var opacOffset = 1 - offset / 1000;

	$('.intro div.medium-5').css({
		'transform': 'translateY(' + offset / 2 + 'px)',
		'opacity': opacOffset 
	});
	
	//console.log( 'a' );

	$('.intro div.medium-7').css({
		'transform': 'translateY(' + offset / 1.5 + 'px)',
		'opacity': opacOffset
	});

});