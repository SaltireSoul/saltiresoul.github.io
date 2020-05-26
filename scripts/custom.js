/***************************************************
					Poshy Tip
***************************************************/
jQuery.noConflict()(function($){
$(document).ready(function() {
	$('.poshytip').poshytip({
	className: 'tip-twitter',
	showTimeout: 1,
	alignTo: 'target',
	alignX: 'center',
	offsetY: 5,
	allowTipHover: false,
	fade: false,
	slide: false
  });
  
  $('#powered a').poshytip({
	className: 'tip-yellowsimple',
	showTimeout: 1,
	alignTo: 'target',
	alignX: 'center',
	offsetY: 5,
	allowTipHover: false
  });

	});
});

/***************************************************
					External Links
***************************************************/
jQuery.noConflict()(function($){
$(document).ready(function() {  
  $("a[rel$='external']").click(function(){
  this.target = "_blank";
  });
  
	});
});


/***************************************************
		CYCLE SLIDER
***************************************************/
jQuery.noConflict()(function($){
$(document).ready(function() {
    $('#details').cycle({
		fx:     'fade', 
        prev:    '#prev',
        next:    '#next',
		speedIn:  800, 
		speedOut: 800, 
		delay:   7000
       
	});
	
	});
});


/***************************************************
	GRID PORTFOLIO/GRID HOMEPAGE  IMAGE HOVER
***************************************************/
jQuery.noConflict()(function($){
$(document).ready(function() {
	
		$(".item-hover").hover(function(){
		$(this).find(".portfolio-thumbnail").stop(true, true).animate({ opacity: 'show' }, 800);
	}, function() {
		$(this).find(".portfolio-thumbnail").stop(true, true).animate({ opacity: 'hide' }, 800);		
	});
		
	});
	});

/***************************************************
		PORTFOLIO IMAGE HOVER
***************************************************/
jQuery.noConflict()(function($){
$(document).ready(function() {  
            $('.portfolio-img').each(function() {
                $(this).hover(
                    function() {
                        $(this).stop().animate({ opacity: 0.5 }, 400);
                    },
                   function() {
                       $(this).stop().animate({ opacity: 1.0 }, 400);
                   })
                });
});
});
jQuery.noConflict()(function($){
$(document).ready(function() {  
            $('.portfolio-img-fancy').each(function() {
                $(this).hover(
                    function() {
                        $(this).stop().animate({ opacity: 0.7 }, 400);
                    },
                   function() {
                       $(this).stop().animate({ opacity: 1.0 }, 400);
                   })
                });
});
});

/***************************************************
		CYCLE SLIDE
***************************************************/
jQuery.noConflict()(function($){
$(document).ready(function() {
    $('#slider-two-third').cycle({
		fx:'fade',
		speedIn:  1000, 
		speedOut: 1000, 
		delay:   2000
		
	});
});
});

/***************************************************
		PRETTY PHOTO
***************************************************/
jQuery.noConflict()(function($){
$(document).ready(function() {  

$("a[rel^='prettyPhoto']").prettyPhoto({opacity:0.80,default_width:500,default_height:344,theme:'pp_default',hideflash:false,modal:false,social_tools:false});

});
});

/*----------------------------------------------------------------------*/
		/*PORTFOLIO FILTERABLE CODE*/
/*----------------------------------------------------------------------*/
jQuery.noConflict()(function($){
jQuery(document).ready(function($){
var 
speed = 700,   // animation speed
$wall = $('#portfolio').find('.portfolio-container ul');
$wall.masonry({
singleMode: true,
// only apply masonry layout to visible elements
itemSelector: '.one-fourth:not(.invis)',
animate: true,
animationOptions: {
duration: speed,
queue: false
}
});
$('#filterable a').click(function(){
var colorClass = '.' + $(this).attr('class');
if(colorClass=='.all') {
// show all hidden boxes
$wall.children('.invis')
.toggleClass('invis').fadeIn(speed);
} else {  
// hide visible boxes 
$wall.children().not(colorClass).not('.invis')
.toggleClass('invis').fadeOut(speed);
// show hidden boxes
$wall.children(colorClass+'.invis')
.toggleClass('invis').fadeIn(speed);
}
$wall.masonry();
 return false;
});
});
});


jQuery.noConflict()(function($){
jQuery(document).ready(function($){
var 
speed = 700,   // animation speed
$wall = $('#portfolio').find('.portfolio-container ul');
$wall.masonry({
singleMode: true,
// only apply masonry layout to visible elements
itemSelector: '.one-third:not(.invis)',
animate: true,
animationOptions: {
duration: speed,
queue: false
}
});
$('#filterable a').click(function(){
var colorClass = '.' + $(this).attr('class');
if(colorClass=='.all') {
// show all hidden boxes
$wall.children('.invis')
.toggleClass('invis').fadeIn(speed);
} else {  
// hide visible boxes 
$wall.children().not(colorClass).not('.invis')
.toggleClass('invis').fadeOut(speed);
// show hidden boxes
$wall.children(colorClass+'.invis')
.toggleClass('invis').fadeIn(speed);
}
$wall.masonry();
 return false;
});
});
});

jQuery.noConflict()(function($){
jQuery(document).ready(function($){
var 
speed = 700,   // animation speed
$wall = $('#portfolio').find('.portfolio-container ul');
$wall.masonry({
singleMode: true,
// only apply masonry layout to visible elements
itemSelector: '.one-half:not(.invis)',
animate: true,
animationOptions: {
duration: speed,
queue: false
}
});
$('#filterable a').click(function(){
var colorClass = '.' + $(this).attr('class');
if(colorClass=='.all') {
// show all hidden boxes
$wall.children('.invis')
.toggleClass('invis').fadeIn(speed);
} else {  
// hide visible boxes 
$wall.children().not(colorClass).not('.invis')
.toggleClass('invis').fadeOut(speed);
// show hidden boxes
$wall.children(colorClass+'.invis')
.toggleClass('invis').fadeIn(speed);
}
$wall.masonry();
 return false;
});
});
});
