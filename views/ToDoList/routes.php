<?php
require "../../config/db.php";
//Take the data from post form
// Check connection
//Route to add new item in todo list

if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['type']) && $_POST['type'] == "Post in Todolist") {

    //take inputs
    $item 		= 	mysqli_real_escape_string($con,$_POST['item']);
    $userid    =    $_SESSION['id'];

    //insert in database
    $query= "INSERT INTO todos (userid, item) VALUES ('$userid', '$item') ";
    $result = $con->query($query);
    //check if we register user successfully
    if($result){
        echo json_encode(['code'=>200, 'msg'=>"Added new item" ]);          
    }else{
        echo json_encode(['code'=>404, 'msg'=>"Network or database error"]);
     }		
}

//Route to add new item in completed list
if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['type']) && $_POST['type'] == "Post in Completedlist") {

    //take inputs
    $item 	   = 	$_POST['item'];
    $userid    =    $_SESSION['id'];
    $created   =    $_POST['created'];

    //insert in database
    $query= "INSERT INTO completedlist (userid, item , created) VALUES ('$userid', '$item' , '$created') ";
    $result = $con->query($query);
    //check if we register user successfully
    if($result){
        echo json_encode(['code'=>200, 'msg'=>"Added new item" , 'query' => $query ]);          
    }else{
        echo json_encode(['code'=>404, 'msg'=>"Network or database error"]);
     }		
}


//Route to render todolist list
if($_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET['type']) && $_GET['type'] == "Get Todolist") {
    //check if we register user successfully\
    $userid    =    $_SESSION['id'];
    $query= "SELECT item , created FROM todos WHERE userid = '$userid' ";
    $Result = $con->query($query);
    if( $Result){
        while($data = mysqli_fetch_row($Result))
        {   
            echo "<li class = 'items todolist' ><span class = 'delete-icon-span'><i class='fa fa-trash'></i></span> <span id= check-icon class='glyphicon glyphicon-check pull-right'></span>$data[1] : $data[0]</li>";
           
        }
    }else{
        //Render no  data
    }
   
}

//Route to render completed list
if($_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET['type']) && $_GET['type'] == "Get Completedlist") {
    //check if we register user successfully\
    $userid    =    $_SESSION['id'];
    $query= "SELECT item , completed  FROM completedlist WHERE userid = '$userid' ";
    $Result = $con->query($query);
    if( $Result){
        while($data = mysqli_fetch_row($Result))
        {   
            echo "<li class = 'items completedlist' ><span class = 'delete-icon-span'><i class='fa fa-trash'></i></span>$data[1] : $data[0]</li>";
          
        }
    }else{
        //Render no  data
    }
   
}


//Route to remove item from todo list
if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['type']) && $_POST['type'] == "Remove Todolistitem") {
    //check if we register user successfully\
      //take inputs
      $item 	 =  $_POST['item'];
      $userid    =  $_SESSION['id'];
      $created   =  $_POST['date'];


    $query= "DELETE FROM todos where userid = $userid AND created = '$created' AND item = '$item' ";
    $Result = $con->query($query);
    if( $Result){        
            echo json_encode(['code'=>200, 'msg'=>"Removed $item from todo list" , 'query'=> $query ]);          
    }else{
            echo json_encode(['code'=>400, 'msg'=>"Failed to remove $item from todo list" ]);  
    }
   
}


//Route to remove item from completed list
if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['type']) && $_POST['type'] == "Remove Completedlistitem") {
    //check if we register user successfully\
      //take inputs
      $item 	 =  $_POST['item'];
      $userid    =  $_SESSION['id'];
      $completed   =  $_POST['completed'];

    $query= "DELETE FROM completedlist where userid = $userid AND completed = '$completed' AND item = '$item' ";
    $Result = $con->query($query);
    if( $Result){        
            echo json_encode(['code'=>200, 'msg'=>"Removed $item from todo list" , 'query'=> $query ]);          
    }else{
            echo json_encode(['code'=>400, 'msg'=>"Failed to remove $item from todo list" ]);  
    }
   
}


?>