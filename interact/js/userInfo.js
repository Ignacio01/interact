function contacts(userToken){
	$.ajax({
		type : "GET",
		url : "https://api.interact.io/v2/contacts?offset=5&limit=10", 
		headers : { 
			authToken : userToken
		}, 
		dataType : "json",
		success : function(data) {
		console.log(data); },
		error : function(data) { console.log(data);
		}
	}).done(function(data){
		var data = data.data;
		for (val of data){
			infoContacts(val.id,userToken);
		}
	});

}


function infoContacts(id,userToken){
	$.ajax({
		type : "GET",
		url : "https://api.interact.io/v2/contacts/"+id,
		headers : {
			authToken : userToken
		}, 
		dataType : "json",
		success : function(data) {
			console.log(data); 
		},
		error : function(data) { 
			console.log(data);
		}
	}).done(function(data){
		var name=data.firstName
		if(name!=undefined){
			$('.infoList').append("<div class=\"contact\">"+name+"<div class=\"call\"><span class=\"glyphicon glyphicon-phone-alt\"></span></div></div>");
		}
	});
}

function logOut(userToken){
	$.ajax({
		type : "POST",
		url : "https://api.interact.io/v2/logout",
		dataType : "json",
		contentType : "application/json", data : JSON.stringify({
		"authToken" : userToken }),
		success : function(data) { console.log(data);
		},
		error : function(data) {
		console.log(data); }
	}).done(function(){
		alert("OUT");
		window.location.href="../index.html";
	});

}

function findTags(userToken){
	$.ajax({
		type : "GET",
		url : "https://api.interact.io/v2/tags",
		headers : {
			authToken : userToken
		},
		dataType : "json",
		success : function(data) {
			console.log(data); 
			
		},
		error : function(data) { 
			console.log(data);
		} 
	}).done(function(data){
		alert(data);
	});
}

