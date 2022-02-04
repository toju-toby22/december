const { data } = require("jquery");

let btn = document.getElementById('btn');

let fname_v = document.getElementById('fname')
let name_error = document.getElementById('name_error')

let lname_v = document.getElementById('lname')
let lname_error = document.getElementById('lname_error')


let email_v = document.getElementById('email')
let email_error = document.getElementById('email_error')


let dob_v = document.getElementById('password')
let dob_error = document.getElementById('dob_error')


function validate_form() {
    
    if(fname_v.value == '' || fname_v.value == null){
        name_error.innerHTML = 'First Name required';
        name_error.style.color = 'Red';
    }else{
        name_error.innerHTML = '';
    }


    if(lname_v.value == '' || lname_v.value == null){
        lname_error.innerHTML = 'Last Name required';
        lname_error.style.color = 'Red';
    }else{
        lname_error.innerHTML = '';
    }


    if(email_v.value == '' || email_v.value == null){
        email_error.innerHTML = 'Email required';
        email_error.style.color = 'Red';
    }else{
        email_error.innerHTML = '';
    }


    if(dob_v.value == '' || dob_v.value == null){
        dob_error.innerHTML = 'Password Required';
        dob_error.style.color = 'Red';
    }else{
        dob_error.innerHTML = '';
    }
}

btn.addEventListener('click', function(e){
    e.preventDefault();
    validate_form();
})




$(document).ready(function(){
    $("#btn").click(function(){

        if(newEmail.val() == ""){
            $('email').html('Please enter a valid email');
        }else{
            let newEmail = $('#email');
            let newfname = $('#fname');
            let newphone = $('#phone');
            let newpsw = $('#password');
                    $.ajax({
                        url: "http://159.65.21.42:9000/Register",
                        method: "POST",
                        data: JSON.stringify({
                            "name": "fname.value",
                            "phone": "phone.value",
                            "email": "email.value",
                            "password": "Password.value"    
                        }),
                        dataType: "JSON",
                        contentType : "application/json",
                        success:function(response){
                            $('.name_error')
                            .html(response);
                            console.log('done');
                            window.location.href= "./login.html"
                        },
                        error: function(err){
                            alert(err);
                            console.log(err);
                        }

                    })

            
        }
    })

    $('#buttn').click(function(){
        $.ajax({
            url: "http://159.65.21.42:9000/login",
            method: "POST",
            data: JSON.stringify({
                    email:$('#email').val(),
                    password: $('#password').val
            }),
            dataType: "json",
            contentType: "application/json",
            success: function(data){
                if($("#email").val() == data.email){
                    alert(data.name + "Login Successful");
                    $('#email.error').html("");
                    $('#email').val("");
                    window.location.href = "./index.html";
                }else{
                    $('#email-error').html("Email/Password is incorrect");
                }
            
                Error: function (err){
                    console.log
                    (err,data);
                }
            }
        })
    })
})