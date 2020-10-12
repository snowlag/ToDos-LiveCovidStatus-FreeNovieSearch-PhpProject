<!DOCTYPE html>
<html>
<head>
	<title>Registration</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" >
<link rel="stylesheet" type="text/css" href="../../assets/css/todos.css">
<link href='https://fonts.googleapis.com/css?family=Roboto:400,700,500' rel='stylesheet' type='text/css'>
<script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script type="text/javascript" src="../../assets/js/lib/jquery-2.1.4.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>
 <?php 
  require "../../common.php";
  ?>
	<div class="container">
		<center>
        <div class="box auth-forms" id="auth-forms">
       
      <div class="panel panel-secondary">
      <div class="panel-heading"><h3><center><b>User Registration</b></center></h3></div>
       <center><p>Create your account. Its free and only takes a minute</p></center><hr></hr>
       <div class="panel-body">
       <form method="post" ">
          
          <div class="form-group">
           <input type="text" id = "name" name="name" class="form-control" placeholder="Full name*" required>
          </div>
                
          <div class="form-group col-xs-offset-0.5">
           <input type="email" id="email" name="email" class="form-control" placeholder="Email*" required>
          </div>

          <div class="form-group">
              <input type="number" id = "phone" pattern="\d{10}" id="box" name="phone" class="form-control" placeholder="phone number*" maxlength="10" required>
          </div>
          
          <div class="form-group">
              <input type="password" id = "password" id="box" name="pwd" class="form-control" placeholder="password*" required>
          </div>
           
          <div class="form-group">
            <center>
                <button type="button" id="saveuser" class="btn btn-success btn-lg" name="register" value="register">Register</button>
            </center>
          </div>
             <div id="result"> </div>
        </form>
        <center><a href="../Login/Login.php">Already registered? Log in</a></center>

      </div>
      </div>
  
    </div>
    </div>
  </div>


</body>
</html>

<script
  src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"> </script>


<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>

<!-- custom script js -->

<script type="text/javascript" src="./registeruser.js"></script>