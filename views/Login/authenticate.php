<?php
require "../../common.php";
//Take the data from post form
// Check connection

if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['save']) && $_POST['save'] == 1) {
    $email 		= 	mysqli_real_escape_string($con,$_POST['email']);
    $password   = 	mysqli_real_escape_string($con,$_POST['password']);
    //encrypt the password
    $Encryptedpassword   =   md5($password); 
    //check if the mail is present in database or not
    $email = str_replace(".com", "",$email );
    $querymail= "SELECT id , name  FROM register WHERE email = '$email' and password = '$Encryptedpassword'";
    $checkResult = $con->query($querymail);
    $row_cnt = $checkResult->num_rows;

        if($row_cnt==0){	    
            //if present send alert to user
            echo json_encode(['code'=>400, 'msg'=>"Incorrect email or password"]);
            }
         else {   
            //start the user session
            if(session_id() == '' || !isset($_SESSION)) {
                // session isn't started
                session_start();
            }
            $data = mysqli_fetch_row($checkResult);
            $_SESSION["id"] = $data[0];
            $_SESSION["name"] = $data[1];
            echo json_encode(['code'=>200, 'msg'=>"User Logged in" , 'id' => $data[0] , 'name' => $data[1]]);
    }
}

?>