$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();//这里的this表示li，上一行的this表示span
	});
	event.stopPropagation(); //使本次click不会影响到上面对li的click
})

$("input[type='text']").keypress(function(event){
	if(event.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i> </span> " + todoText + "</li>");
	}
})

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})