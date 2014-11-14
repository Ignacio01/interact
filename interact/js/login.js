/*Validates the fields*/
function userEmpty(){
	var user = loginUser.user.value;
	var password = loginUser.pass.value;
	if(user.length==0 || password.length==0 ){
		if(user.length==0 && password!=0){
			loginUser.user.style.border="1px solid red";
			loginUser.pass.style.border="1px solid #CECECE";
		}else if(password.length==0 && user!=0){
			loginUser.user.style.border="1px solid #CECECE";
			loginUser.pass.style.border="1px solid red";
		}else{
			paintFields("incorrect","Empty fields")
		}
		document.getElementById("error").innerHTML="<br/>Empty fields.<br/>";

		return false;

	}else{
	
		login(user,password);
			
		
		document.getElementById("error").innerHTML="";


		return true;
	}
}

/* SENDS THE INFO TO THE SERVER*/
function login(user, password){
	$.ajax({
		type : "POST",
		url : "https://api.interact.io/v2/login",
		dataType : "json",
		contentType : "application/json",
		data : JSON.stringify({
			"username" : user,
			"password" : password,
			"scope" : "device app" 
		}),
		success : function(result,status,xhr,data) {
			/*alert(result.token.authToken+"\n"+result.user.email);*/
			paintFields("correct","");

			console.log(data);
		},
		error : function(data) {
			paintFields("incorrect","User or Password incorrects");
			console.log(data);
		}
	})
	.done(function(result,data){
		//redireccionar a un php
		window.location.href="php/content.php?usuario="+result.token.authToken+"&email="+result.user.email+"&id="+result.user.id;
	});
}


/*Depending on what value the function receives, the color of the inputs will change*/
function paintFields(value,message){
	if(value == "correct"){
		loginUser.user.style.border="1px solid #5cb85c";
		loginUser.pass.style.border="1px solid #5cb85c";
		loginUser.user.style.boxShadow = "0px 0px 3px #5cb85c";
		loginUser.pass.style.boxShadow = "0px 0px 3px #5cb85c";
	}else if(value == "incorrect"){
		document.getElementById("error").innerHTML="<br/>"+message+"...<br/>";
		loginUser.user.style.border="1px solid red";
		loginUser.pass.style.border="1px solid red";
	}else if(value=="clean"){
		loginUser.user.value="";
		loginUser.pass.value="";
		document.getElementById("error").innerHTML="";
		loginUser.user.style.border="1px solid #CECECE";
		loginUser.pass.style.border="1px solid #CECECE";
		loginUser.user.style.boxShadow = "0px 0px 0px";
		loginUser.pass.style.boxShadow = "0px 0px 0px";
	}
}
