<?php

if($_REQUEST['usuario']){
	$user = $_REQUEST['usuario'];
}

if($_REQUEST['email']){
	$email= $_REQUEST['email'];
}

if($_REQUEST['id']){
	$id= $_REQUEST['id'];
}

?>

<!DOCTYPE>
<html lang ="en">
	<head>
		<meta charset="utf-8"/>
		<title>interact.io</title>
		<link href="../css/styles.css" rel="stylesheet" type="text/css">
		<link href="../dist/css/bootstrap.css" rel="stylesheet" type="text/css">
		<link href="../dist/js/bootstrap.min.js" rel="stylesheet" type="text/css">
		<link href="../dist/js/npm.js" rel="stylesheet" type="text/css">
		<link rel="shortcut icon" href="../img/favicon.png">
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
		<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
	</head>
	<body onload="contacts('<?php echo $user?>');">
		
		<script src="../js/userInfo.js">
		</script>
		<script src="../js/functions.js">
		</script>
		<div id="container">
			<div id="header">
				<img src="../img/logo.png">
				<div class="config">

					<div class="dropdown">
					  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true">
					    <?php echo $email?>
					    <span class="caret"></span>
					  </button>
					  <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
					    <li role="presentation"><a role="menuitem" tabindex="-1" href="#" onclick="logOut('<?php echo $user?>')">Log out</a></li>
					  </ul>
					</div>
					
				</div>
			</div>
			
			<div class="addList" onclick="crearLista();">+</div>
			<div id="containerInfo">
				
				<div class="list">
					<div class="title">
						<div class="options">

							<div class="btn-group">
							  <ul class="dropdown-menu" role="menu">
							    ...
							  </ul>
							</div>
							</div>
						All Contacts
						<div class="iconarrow"><span id="down" class="glyphicon glyphicon-chevron-down"></span></div>
					</div>
					<div class="infoList" id="default">
					</div>
					
				</div>
				<div class="list">
					<div class="title">
						<div class="options" id="div" onclick="mostrarSubmenu(this);">
							<a href="#" style="color:white;"><span  class="glyphicon glyphicon-th" ></span></a>
						</div>
						<div class="submenu">
							<div class="edit" onclick="editarNombreLista(this);" style="float:left;"><a href="#" style="color:black;"><span class="glyphicon glyphicon-pencil" style="font-size:1.8em;margin-top:6px;"></a></span></div>
							<div class="erase" style="float:right;"><a href="#" style="color:red;"><span class="glyphicon glyphicon-minus" style="font-size:1.8em;color:red;margin-top:8px;"></a></span></div>
						</div>
						<div class="editName">
							<div class="input-group">
						      <input type="text" class="form-control">
						      <span class="input-group-btn">
						        <button class="btn btn-default changeName" type="button" onclick="cambiarNombreLista(this);">Change Name</button>
						      </span>
						    </div>
						</div>
						<span class="newList">New List</span>
						<div class="iconarrow">
							<span id="down" class="glyphicon glyphicon-chevron-down"></span>
						</div>
					</div>
					<div class="infoList" id="list1">
						You have 0 contacts.
					</div>
				</div>
				
			</div>

			<div id="finder">
				<h3>Find contacts by tags</h3>
				<div class="find">
					    <div class="input-group">
					      <input id="tagValue" type="text" class="form-control">
					      <span class="input-group-btn">
					      	<script type="text/javascript">function values(){var value= document.getElementById("tagValue").value; contacts2('<?php echo $user?>',value);}</script>
					        <button class="btn btn-default" type="button" onclick="values()"><span id="down" class="glyphicon glyphicon-search"></span>&nbsp;</button>
					      </span>
					    </div>
					
					<div id="tagsFound">
						
					</div>
					
					
				</div>	
			</div>

		</div>
	</body>
</html>