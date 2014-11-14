function contacts(userToken){
	$.ajax({
		type : "GET",
		url : "https://api.interact.io/v2/contacts?offset=5&limit=1000", 
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


function contacts2(userToken,values){
	$.ajax({
		type : "GET",
		url : "https://api.interact.io/v2/contacts?offset=5&limit=1000", 
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
			findPersonTags(val.id,userToken,values);
		}
	});
}

function findPersonTags(userId,userToken,valueTag){
	
	$.ajax({
		type : "GET",
		url : "https://api.interact.io/v2/contacts/"+userId,
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
		var name=data.tags;
		var found = name.indexOf(valueTag);
		if(found!=-1){
			$("#tagsFound").append("<div class=\"list-group\"><a href=\"#\" class=\"list-group-item\"><h4 class=\"list-group-item-heading\">Name: "+data.firstName+"</h4><p class=\"list-group-item-text\">tags: "+name+"</p></a></div>");
		}
	});
}
