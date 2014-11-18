function crearLista(){
	
	var id = $('#div').length;
	
	if($(".userfound").length==0){
		var contact="<p>You have 0 contacts</p>";
	}
	
	$('#containerInfo').append("<div class='list'><div class='title'><div class='options' id='div"+id+"' onclick='mostrarSubmenu(this);'><a style='color:white;'><span  class='glyphicon glyphicon-th' ></span></a></div><div class='submenu'><div class='edit' onclick='editarNombreLista(this);' style='float:left;'><a  style='color:black;'><span class='glyphicon glyphicon-pencil' style='font-size:1.8em;margin-top:6px;'></a></span></div><div class='erase' style='float:right;' onclick='removeList(this)'><a  style='color:red;'><span class='glyphicon glyphicon-minus' style='font-size:1.8em;color:red;margin-top:8px;'></a></span></div></div><div class='editName'><div class='input-group'><input type='text' class='form-control'><span class='input-group-btn'><button class='btn btn-default changeName' type='button' onclick='cambiarNombreLista(this);'>Change Name</button></span></div></div><span id='newList' class='newList'>New List</span><div class='iconarrow'><span id='down' class='glyphicon glyphicon-chevron-down'></span></div></div><div class='infoList' id='list1' ondrop='drop(event)' ondragover='allowDrop(event)'>"+contact+"</div></div>");
		
	$(function() {
	   	$('#tilt').tooltip({placement: 'bottom'});
	});
		
}
function mostrarSubmenu(elemento){
	$(elemento).parent().find(".submenu").toggle(300);
}

function editarNombreLista(elemento){
		$(elemento).parent().parent().find('.editName').toggle(300);
}

function cambiarNombreLista(elemento){
	var name = $(elemento).parent().parent().find(".form-control");
	var oldName = $(elemento).parent().parent().parent().parent().find(".newList");
	
	console.log(oldName);
	
	if(name.length!=0){
		$(oldName).text(name.val());	
	}
}

function removeList(elemento){
	$(elemento).parent().parent().parent().remove();
}

function removeFind(elemento){
	$(elemento).parent().parent().parent().find(".userfound").remove();
}
/*$(document).ready(function(){
	$(this).click(function(){
		var name = $('.form-control').val();
		if(name.length!=0){
			$('.newList').text(name);	
		}
	});
});*/

