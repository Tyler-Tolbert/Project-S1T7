var $A = $('#section-a .content-wrap');
var $B = $('#section-b .content-wrap');
var $C = $('#section-c .content-wrap');


$A.waypoint(function () {
	$A.addClass('js-show');
}, { offset: '60%'});

$B.waypoint(function () {
	$B.addClass('js-show');
}, { offset: '60%'});

$C.waypoint(function () {
	$C.addClass('js-show');
}, { offset: '60%'});