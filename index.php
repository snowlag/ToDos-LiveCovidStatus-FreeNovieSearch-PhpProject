<?php 
	require "common.php";

	if($_SESSION['id']) {
		echo $_SESSION['id'];
		echo $_SESSION['name'];
		header("Location: views/ToDoList/index.php");
	}else{
		header("Location: logout.php");
	}
	
	?>