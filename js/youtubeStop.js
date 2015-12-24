$(".modal").each(function(){
	$(this).on('hidden.bs.modal', function (e) {
		var iframe = $(this).find("iframe").first();
	    var src = iframe.attr("src");
	    iframe.attr("src", src);
	});
});