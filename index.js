$(function() {
	$(".navcontent").hide();
	$(".appetizer").show();

	$("#navappetizer").click(function(){
		$(".nav li").removeClass("active");
		$(this).addClass("active");
		$(".navcontent").hide();
		$(".appetizer").fadeIn(500);
	})

	$("#navpresent").click(function(){
		$(".nav li").removeClass("active");
		$(this).addClass("active");
		$(".navcontent").hide();
		$(".present").fadeIn(500);
	})

	$("#navfuture").click(function(){
		$(".nav li").removeClass("active");
		$(this).addClass("active");
		$(".navcontent").hide();
		$(".future").fadeIn(500);
	})
});