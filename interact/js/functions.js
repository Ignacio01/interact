function crearLista(){
	var id = $('.list');
			
	$('#containerInfo').append("<div class='list'><div class='title'><div class='options' id='div' onclick='mostrarSubmenu(this);'><a href='#' style='color:white;'><span  class='glyphicon glyphicon-th' ></span></a></div><div class='submenu'><div class='edit' onclick='editarNombreLista(this);' style='float:left;'><a href='#' style='color:black;'><span class='glyphicon glyphicon-pencil' style='font-size:1.8em;margin-top:6px;'></a></span></div><div class='erase' style='float:right;'><a href='#' style='color:red;'><span class='glyphicon glyphicon-minus' style='font-size:1.8em;color:red;margin-top:8px;'></a></span></div></div><div class='editName'><div class='input-group'><input type='text' class='form-control'><span class='input-group-btn'><button class='btn btn-default changeName' type='button'>Change Name</button></span></div></div><span class='newList'>New List</span><div class='iconarrow'><span id='down' class='glyphicon glyphicon-chevron-down'></span></div></div><div class='infoList' id='list1'>You have 0 contacts.</div></div>");
		
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
	var name = $(elemento).parent().find(".form-control");
	console.log(name);
	if(name.length!=0){
		$('.newList').text(name);	
	}
}

/*$(document).ready(function(){
	$(this).click(function(){
		var name = $('.form-control').val();
		if(name.length!=0){
			$('.newList').text(name);	
		}
	});
});*/

