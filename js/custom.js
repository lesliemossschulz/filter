

$(document).ready(function(){
	
$('#all').click(function(event){
		event.preventDefault();
		$("div").filter(".all").css("display", "block");
})
$('#dog').click(function(event){
		event.preventDefault();
		$("div").filter(".dog").css("display", "block");
		$("div").filter(".cat").css("display", "none");
		$("div").filter(".horse").css("display", "none");
})	
$('#cat').click(function(event){
		event.preventDefault();
		$("div").filter(".dog").css("display", "none");
		$("div").filter(".cat").css("display", "block");
		$("div").filter(".horse").css("display", "none");
})		  
$('#horse').click(function(event){
		event.preventDefault();
		$("div").filter(".dog").css("display", "none");
		$("div").filter(".cat").css("display", "none");
		$("div").filter(".horse").css("display", "block");
})	
	
});
