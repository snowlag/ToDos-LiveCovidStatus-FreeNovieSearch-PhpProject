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

	<div class= "container ">
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
      <a class="navbar-brand" href="../ToDoList/index.php">To-Dos and More!</a>
      </div>
      <ul class="nav navbar-nav">  
        <li ><a href="../ToDoList/index.php">To Dos</a></li>
        <li class = "active" ><a>Covid Status</a></li>
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
  </div>
 
<div class= "container ">
 <div class = "row">
	<div class = "col-md-12 " id="container-for-covid-status">
		<div class="page-header">
		 <h1 id = "header-for-lists">Live Covid-19 status</h1>
	   </div>
	   <div  id="container-for-movielist">
		<h1 class="list-headers">Top 10 States confirmed cases</h1>	
		<ul id="state-list" >
		</ul>
	</div>	   
	</div>
 </div>
</div>

<script type="text/javascript" src="covid.js"></script>
</body>
</html>