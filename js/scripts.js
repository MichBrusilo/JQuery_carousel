$(function() {
	var $carousel = $(".carousel ul")

	function moveRight() {
	$carousel.animate({ marginLeft: "-400px" }, 1000, moveFirstSlide);
	}

	function moveFirstSlide() {
		$(".carousel ul li:last-child").after($(".carousel ul li:first-child"));
		$(".carousel ul").css("marginLeft", 0);
	}

	setInterval(moveRight, 3000);
})