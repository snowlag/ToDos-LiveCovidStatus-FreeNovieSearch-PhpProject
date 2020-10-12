<!DOCTYPE html>
<html>
<head>
<title>Covid Status</title>

<link rel="stylesheet" type="text/css" href="../../assets/css/graph.css">
<link rel="stylesheet" type="text/css" href="../../assets/css/todos.css">
<script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script type="text/javascript" src="../../assets/js/lib/jquery-2.1.4.min.js"></script>
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" >
<!-- Highcharts scripts -->
<meta name="viewport" content="width=device-width, initial-scale=1">


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
 
    <div class="page-header">
		 <h1 id = "header-for-lists">Live Covid-19 Analytics</h1>
	   </div>
 <div class = "row">
	<div class = "col-md-6 analytics-grid-item" id="container-for-covid-status">
	   <div  id="container-for-movielist">
		<h1 class="list-headers">Top 10 States confirmed cases</h1>	
		<ul id="state-list" >
		</ul>
	</div>	   
	</div>

 <div class = "col-md-6 analytics-grid-item">
 <figure class="highcharts-figure">
        <div id="container"></div>
</figure>
</div>
 </div>




</body>

<script src="https://code.highcharts.com/highcharts.js"></script>

<script type="text/javascript" src="covid.js"></script>
<link rel="stylesheet" type="text/css" href="../../assets/css/todos.css">
</html>