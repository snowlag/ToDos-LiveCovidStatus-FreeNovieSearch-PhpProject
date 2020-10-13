<?php
require "../../config/db.php";
//Take the data from post form
// Check connection

if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['save']) && $_POST['save'] == 1) {
    $name 		= 	mysqli_real_escape_string($con,$_POST['name']);
    $email 		= 	mysqli_real_escape_string($con,$_POST['email']);
    $password   = 	mysqli_real_escape_string($con,$_POST['password']);
    $phone      =   mysqli_real_escape_string($con,$_POST['phone']); 
    //encrypt the password
    $Encryptedpassword   =   md5($password);
    
    //check if the mail is present in database or not
    $email = str_replace(".com", "",$email );
    $querymail= "SELECT email FROM register WHERE email = '$email' ";
    $checkResult = $con->query($querymail);
    $row_cnt = $checkResult->num_rows;

        if($row_cnt!=0){	    
            //if present send alert to user
            echo json_encode(['code'=>400, 'msg'=>"Email is already registered"]);
            }
         else {   
            //Register the user
            $query= "INSERT INTO register (name, email, phone, password) VALUES ('$name', '$email','$phone', '$Encryptedpassword') ";
            $result = $con->query($query);
            //check if we register user successfully
            if($result){
                echo json_encode(['code'=>200, 'msg'=>"Registered User" ]);          
            }else{
                echo json_encode(['code'=>404, 'msg'=>"Network or database error"]);
             }		
    }
}

?>