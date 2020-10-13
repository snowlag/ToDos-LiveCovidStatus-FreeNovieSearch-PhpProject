<?php 
	require "./config/db.php";
    //Check user authentication
	if($_SESSION['id']) {
		header("Location: views/ToDoList/index.php");
	}else{
		header("Location: ./config/logout.php");
	}
	
	?>