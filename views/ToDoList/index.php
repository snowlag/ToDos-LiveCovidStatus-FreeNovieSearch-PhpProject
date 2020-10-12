<!DOCTYPE html>
<html>
<head>
<title>Covid Status</title>
<link rel="stylesheet" type="text/css" href="../../assets/css/todos.css">

<script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script type="text/javascript" src="../../assets/js/lib/jquery-2.1.4.min.js"></script>
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" >

</head>
<body>
	<?php 
	require "../../common.php";

	if($_SESSION['id']) {
	}else{
		header("Location: logout.php");
	}
	
	?>

  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
      <a class="navbar-brand" href="#">To-Dos and More!</a>
      </div>
      <ul class="nav navbar-nav">     
        <li class="active"><a >To Dos</a></li>
        <li ><a href = "../Covid/index.php">Covid Status</a></li>
        <li ><a href = "../MovieSearch/index.php">Movies</a></li>	      
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li>
          <a>
            <?php
            if($_SESSION['name']){
              $name = $_SESSION['name'];
              echo "$name";
            }              
            ?>
          </a>
       </li>
        <li><a href="../../logout.php">Logout</a></li>
      </ul>
    </div>
    </nav>
  <div class= "container ">
  
  <div class = "row">
	<div class = "col-md-6 " id="container-for-todolist">
		<h1 class="list-headers ">Tasks to complete </h1>
		<input id = "input-for-new-todo" type="text" placeholder="Add New Todo">	
		<ul id="to-do-list" class = "list">
			
		</ul>
	</div>
	<div  class = "col-md-6" id="container-for-completedlist">
		<h1 class="list-headers ">Completed tasks<span id="toggle-form"></span></h1>
		<ul id="complete-list" class = "list"> 
		</ul>
	</div>
 </div>
 </div>

<script type="text/javascript" src="todos.js"></script>
</body>
</html>
