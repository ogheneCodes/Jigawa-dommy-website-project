
$("document").ready(function(){
	$("#save").click(function(){
		$("input").prop("disabled",false);
		$("#add").prop("disabled",true);
		$(this).hide();
		$("#save").show();
	});
})