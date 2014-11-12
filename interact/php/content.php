<?php

if($_REQUEST['usuario']){
	$user = $_REQUEST['usuario'];
}

if($_REQUEST['email']){
	$email= $_REQUEST['email'];
}

?>

<!DOCTYPE>
<html lang ="es">
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
		<script src="../js/jquery.js">
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

			<div id="containerInfo">
				<div class="addList">+</div>
				<div class="list">
					<div class="title">
						<div class="options">

							<div class="btn-group">
							  <button class="btn btn-default btn-xs dropdown-toggle" type="button" data-toggle="dropdown">
							    <img src="../img/menu.png" width="32" height="32"/> <span class="caret"></span>
							  </button>
							  <ul class="dropdown-menu" role="menu">
							    ...
							  </ul>
							</div>
							</div>
						Default List
						<div class="iconarrow"><span id="down" class="glyphicon glyphicon-chevron-down"></span></div>
					</div>
					<div class="infoList">
					</div>
					
				</div>
			</div>

			<div id="finder">
				<h3>Find contacts by tags</h3>
				<div class="find">
					    <div class="input-group">
					      <input type="text" class="form-control">
					      <span class="input-group-btn">
					        <button class="btn btn-default" type="button" onclick="findTags('<?php echo $user?>');"><span id="down" class="glyphicon glyphicon-search"></span>&nbsp;</button>
					      </span>
					    </div>
					
					<div class="list-group">
					  <a href="#" class="list-group-item">
					    <h4 class="list-group-item-heading">Contact 1</h4>
					    <p class="list-group-item-text">tags:</p>
					  </a>
					</div>
					
				</div>	
			</div>

		</div>
	</body>
</html>