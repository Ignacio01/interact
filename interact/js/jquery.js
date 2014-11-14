/*$(document).ready(function(){
	$("#down").click(function(){
		$(".infoList").slideToggle("slow");
		if($("#down").attr("class")=="glyphicon glyphicon-chevron-up"){
			$("#down").attr("class","glyphicon glyphicon-chevron-down");
		}else{
			$("#down").attr("class","glyphicon glyphicon-chevron-up");
		}
	});
});*/

$(document).ready(function(){
	$(".addList").click(function(){
		$('#containerInfo').append("<div class=\"list\"><div class=\"title\"><div class=\"options\"><a href=\"#\" style=\"color:white;\"><span class=\"glyphicon glyphicon-th\"></span></a></div><div class=\"submenu\"><div class=\"edit\" style=\"float:left;\"><a href=\"#\" style=\"color:black;\"><span class=\"glyphicon glyphicon-pencil\" style=\"font-size:1.8em;margin-top:6px;\"></a></span></div><div class=\"erase\" style=\"float:right;\"><a href=\"#\" style=\"color:red;\"><span class=\"glyphicon glyphicon-minus\" style=\"font-size:1.8em;color:red;margin-top:8px;\"></a></span></div></div>New List<div class=\"iconarrow\"><span id=\"down\" class=\"glyphicon glyphicon-chevron-down\"></span></div></div><div class=\"infoList\"><div class=\"contact\">You have 0 contacts.</div></div></div>");
		
		$(function() {
	    	$('#tilt').tooltip({placement: 'bottom'});
		});
		
	});
});

$(document).ready(function(){
	$(".options").click(function(){
		$(".submenu").toggle(300);
	});
});