<?php 
	require "./config/db.php";

	if($_SESSION['id']) {
		echo $_SESSION['id'];
		echo $_SESSION['name'];
		header("Location: views/ToDoList/index.php");
	}else{
		header("Location: ./config/logout.php");
	}
	
	?>