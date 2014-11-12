<?php

	if(isset($_POST['user']) && isset($_POST['pass'])){
		if(!empty($_POST['user']) || !empty($_POST['pass'])){
			$info = ['username'=>$_POST['user'],'password'=>$_POST['pass'],'scope'=>'web portal'];	
			$jsonEnconded = json_encode($info,JSON_UNESCAPED_UNICODE);;
		}
	}

?>