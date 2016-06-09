'use strict';

function l(m) {console.log(m);};


window.mobileAndTabletcheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

/* jshint devel:true */
$(document).foundation({
	'magellan-expedition': {
	  active_class: 'active',
	  threshold: 0, // how many pixels until the magellan bar sticks, 0 = auto
	  destination_threshold: 10, // pixels from the top of destination for it to be considered active
	  throttle_delay: 50, // calculation throttling to increase framerate
	  fixed_top: 88, // top distance in pixels assigend to the fixed element on scroll
	  offset_by_height: true // whether to offset the destination by the expedition height. Usually you want this to be true, unless your expedition is on the side.
	}
});


$('.videolink').on('click', function(){
	
	$('.overlay').removeClass('inactive');

});

$('.kickstartervideo').on('click', function(e){
	e.preventDefault();
	$('.overlaytwo').removeClass('inactive');

});



$('.close').on('click', function(){


	var vimeoWrap = $('.vimeowrap');
	vimeoWrap.html(vimeoWrap.html());

	var vimeoWrapTwo = $('.vimeowraptwo');
	vimeoWrapTwo.html(vimeoWrapTwo.html());

	$('.overlay, .overlaytwo').addClass('inactive');

});



var introHeight = $(window).height();

$(window).on('scroll', function(e){
	if(!mobileAndTabletcheck()){
		var current = e.currentTarget.pageYOffset;
		if (current > introHeight - 120) {
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

		$('.bgimage').css({
			'opacity': opacOffset 
		})
		
		//console.log( 'a' );

		$('.intro div.medium-7').css({
			'transform': 'translateY(' + offset / 1.5 + 'px)',
			'opacity': opacOffset
		});
	}
});




$(window).load( function(){
	$('.loader').addClass('disable');
	startSlideshow(5000);
});


function startSlideshow(delay){

	setInterval(function(){
		// find the active slide, remove active class get next child if there is one and give it active class
		// if there isnt a next one get the first one and give that and active class
		if($('.intro .bg li.active').next().length > 0) {
			$('.intro .bg li.active').removeClass('active').next().addClass('active');

		} else {
			$('.intro .bg li').removeClass('active');
			$('.intro .bg li:first-child').addClass('active');
		}
	}, delay);

}



$(document).on('click', '.slides ul li.active', function(){

	if($(this).next().length == 0) {
		$('.slides ul li').removeClass('active');
		$('.slides ul li:first-child').addClass('active');
	} else {
		$(this).removeClass('active').next().addClass('active');
	}

}).on('click', '.solution span.next', function(){

	$('.solution .bg').addClass('hidden');
	setTimeout(function(){
		$('.solution .medium-5').addClass('hidden');

			$('.solution .nav').addClass('active');
			setTimeout(function(){
				$('.solution .singles').addClass('active');
			}, 150);

	}, 150);
	$(this).removeClass('next').addClass('prev');

}).on('click', '.solution span.prev', function(){

	$('.solution .bg').removeClass('hidden');
	setTimeout(function(){
		$('.solution .medium-5').removeClass('hidden');

			$('.solution .nav').removeClass('active');
			setTimeout(function(){
				$('.solution .singles').removeClass('active');
			}, 150);

	}, 150);
	$(this).removeClass('prev').addClass('next');

}).on('click', '.solution .nav li a', function(e){
	
	e.preventDefault();
	var index = $(this).parent().index();

	if(!$(this).parent().hasClass('active')) {
		l(index);
		$('.solution .nav li').removeClass('active');
		$(this).parent().addClass('active');
		$('.solution .singles li').removeClass('active').eq(index).addClass('active');
	}

}).on('click', '.principles .nav li a', function(e) {
	e.preventDefault();
	// l('har har');
	var index = $(this).parent().index();
	if(!$('.principles .nav').hasClass('inuse')) {
		// if menu isnt active
		$('.principles').addClass('black');
		$('.principles .nav li').removeClass('active');
		$(this).parent().parent().addClass('inuse');
		$(this).parent().addClass('active');
		$('.principles .info').addClass('hidden');
		$('.principles .singles li').removeClass('active').eq(index).addClass('active');
	} else {
		// if menu is active
		$('.principles .nav li').removeClass('active');
		$(this).parent().addClass('active');
		l(index);
		$('.principles .singles li').removeClass('active').eq(index).addClass('active');
	}
}).on('click', '.principles h4.title', function(){

	$('.principles').removeClass('black');
	$('.principles .info').removeClass('hidden');
	$('.principles .nav').removeClass('inuse');
	$('.principles .singles li, .principles .singles li').removeClass('active')

}).on('click', '.problem .first .next.arrow', function () {

	//l($(this).parent().next());
	$(this).parent().removeClass('active').next().addClass('active');

}).on('click', '.problem .second .next.arrow', function () {
	 
	//l($(this).parent().next());
	$(this).parent().removeClass('active').next().addClass('active');
	$('.problem h4.title').empty().append('Process').addClass('black');
	$('.problem').addClass('white');

}).on('click', '.problem .process .prev.arrow', function() {

	$(this).parent().removeClass('active');
	$('.problem ul li.first').addClass('active');
	$('.problem h4.title').empty().append('Problem').removeClass('black');
	$('.problem').removeClass('white');

}).on('click', '.problem .process .nav li a', function(e){

	e.preventDefault();
	var index = $(this).parent().index();
	$('.problem .process .nav li').removeClass('active');
	$(this).parent().addClass('active');
	$('.problem .content li').removeClass('active').eq(index).addClass('active');

});













