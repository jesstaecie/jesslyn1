$(function() {
	$(".navcontent").hide();
	$(".navappetizer").show();

	$("#navappetizer").click(function(){
		$(".nav li").removeClass("active");
		$(this).addClass("active");
		$(".navcontent").hide();
		$(".appetizer").show();
	})

	$("#navpresent").click(function(){
		$(".nav li").removeClass("active");
		$(this).addClass("active");
		$(".navcontent").hide();
		$(".present").show();
	})

	$("#navfuture").click(function(){
		$(".nav li").removeClass("active");
		$(this).addClass("active");
		$(".navcontent").hide();
		$(".future").show();
	})
});