$(function() {
	$(".navcontent").hide();
	$(".appetizer").show();

	$("#navappetizer").click(function(){
		$(".nav li").removeClass("active");
		$(this).addClass("active");
		$(".navcontent").hide();
		$(".appetizer").fadeIn(100);
	})

	$("#navpresent").click(function(){
		$(".nav li").removeClass("active");
		$(this).addClass("active");
		$(".navcontent").hide();
		$(".present").fadeIn(100);
	})

	$("#navfuture").click(function(){
		$(".nav li").removeClass("active");
		$(this).addClass("active");
		$(".navcontent").hide();
		$(".future").fadeIn(100);
	})
});