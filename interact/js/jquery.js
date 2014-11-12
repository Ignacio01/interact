$(document).ready(function(){
	$("#down").click(function(){
		$(".infoList").slideToggle("slow");
		if($("#down").attr("class")=="glyphicon glyphicon-chevron-up"){
			$("#down").attr("class","glyphicon glyphicon-chevron-down");
		}else{
			$("#down").attr("class","glyphicon glyphicon-chevron-up");
		}
	});
});

$(document).ready(function(){
	$(".addList").click(function(){
		$('#containerInfo').append("<div class=\"list\"><div class=\"title\"><div class=\"options\"><span class=\"glyphicon glyphicon-th\"></span></div>New List<div class=\"iconarrow\"><span id=\"down\" class=\"glyphicon glyphicon-chevron-down\"></span></div></div><div class=\"infoList\"><div class=\"contact\">You have 0 contacts.</div>");
	});
});
