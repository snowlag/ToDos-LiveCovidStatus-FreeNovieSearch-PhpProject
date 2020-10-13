
$(document).ready(function() {

console.log("Script attached")
//Register User
    $("#saveuser").click(function() {
        console.log("Pressed Register user");
        // calling validate function
        var response =  validateForm();

        // if form validation fails			
        if(response == 0) {
            return;
        }


        // getting all form data
        var email     =   $("#email").val();
        var name      =   $("#name").val();
        var phone      =   $("#phone").val();
        var password  =   $("#password").val();
        console.log("------------Form Input ---------------")
        console.log(email);
        console.log(name);
        console.log(password);
        console.log(phone);
        console.log("------Sending Request ---------------------")
        // sending ajax request
        $.ajax({

            url: './authenticate.php',
            type: 'post',
            data: {
                     'name' : name, 
                     'email': email,
                     'phone': phone,
                     'password': password,
                     'save' : 1
                },

            // before ajax request
            beforeSend: function() {
                $("#result").html("<p class='text-success'> Please wait.. </p>");
            },	

            // on success response
            success:function(data) {
                console.log(data)
                response = JSON.parse(data)
                console.log(response)
                if (response.code == "200"){
                    window.location.href ="../Login/login.php";
                } else {
                    $("#result").html(`<p class='text-error'>${response.msg}</p>`);
                }
            },

            // error response
            error:function(e) {
                $("#result").html("Some error encountered while registering user.");
            }

        });
        //To Update tabel dynamically
    });


// ------------- form validation -----------------

    function validateForm() {
        // removing span text before message
        $("#error").remove();


        // validating input if empty
        if($("#name").val() == "") {
            $("#name").after("<span id='error' class='text-danger'> Enter your name </span>");
            return 0;
        }

        if($("#email").val() == "") {
            $("#email").after("<span id='error' class='text-danger'> Enter your email </span>");
            
            return 0;
        }

        
        if($("#phone").val() == "") {
            $("#phone").after("<span id='error' class='text-danger'> Enter phone number </span>");
            return 0;
        }



        if($("#password").val() == "") {
            $("#password").after("<span id='error' class='text-danger'> Enter your password </span>");
            return 0;
        }

        if( `${$("#phone").val()}`.length !== 10) {
            $("#phone").after("<span id='error' class='text-danger'>Enter a valid phone number </span>"); 
            return 0;
        }

        if($("#password").val().length < 8) {
            $("#password").after("<span id='error' class='text-danger'>Please enter password more than 8 characters</span>");
            return 0;
        }

        if($("#email").val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            $("#email").after("<span id='error' class='text-danger'>Please enter a valid email address </span>");
            return 0;
        }


        return 1;

    }

// -----------[ Clear span after clicking on inputs] -----------

$("#name").keyup(function() {
    $("#error").remove();
});


$("#email").keyup(function() {
    $("#error").remove();
});

$("#password").keyup(function() {
    $("#error").remove();
});

$("#phone").keyup(function() {
    $("#error").remove();
});


});