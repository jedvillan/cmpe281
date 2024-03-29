function init_form_ui() {
	$("#root").append(
		"<div class='card mx-auto' style='width: 25rem; margin-top: 100px;'>"
			+"<div class='card-header'>"
				+"<a href='#' class='fancy_link' onclick='showSignIn();'>Sign In</a>"
				+"Or"
				+"<a href='#' class='fancy_link' onclick='showSignUp();'>Sign Up</a>"
			+"</div>"
			+"<div class='card-body mx-auto' style='max-width: 500px;'>"
				+"<div class='col-sm' id='signin'>"
				+"</div>"
				+"<div class='col-sm' id='signup'>"
				+"</div>"
			+"</div>"
		+"</div>"
	);
	$("#signup").append(
		"<div class='header'>Sign Up</div>"
		+"<div class='form-group input-group'>"
    			+"<div class='input-group-prepend'>"
		    		+"<span class='input-group-text'> <i class='fa fa-envelope'></i> </span>"
		 	+"</div>"
        		+"<input name='' id='new_email' class='form-control' placeholder='Email Address' type='email'>"
    		+"</div>"
		+"<div class='form-group input-group'>"
    			+"<div class='input-group-prepend'>"
		    		+"<span class='input-group-text'> <i class='fa fa-user'></i> </span>"
		 	+"</div>"
        		+"<input name='' id='new_fn' class='form-control' placeholder='First Name' type='text'>"
    		+"</div>"
		+"<div class='form-group input-group'>"
    			+"<div class='input-group-prepend'>"
		    		+"<span class='input-group-text'> <i class='fa fa-user'></i> </span>"
		 	+"</div>"
        		+"<input name='' id='new_ln' class='form-control' placeholder='Last Name' type='text'>"
    		+"</div>"
		+"<div class='form-group input-group'>"
    			+"<div class='input-group-prepend'>"
		    		+"<span class='input-group-text'> <i class='fa fa-lock'></i> </span>"
		 	+"</div>"
        		+"<input name='' id='new_password'  class='form-control' placeholder='New Password' type='password'>"
    		+"</div>"
		+"<div class='form-group input-group'>"
    			+"<div class='input-group-prepend'>"
		    		+"<span class='input-group-text'> <i class='fa fa-lock'></i> </span>"
		 	+"</div>"
        		+"<input name='' id='confirm_password' class='form-control' placeholder='Confirm Password' type='password'>"
    		+"</div>"
		+"<div class='form-group'>"
			+"<button type='submit' class='btn btn-primary btn-block' onclick='sendSignUpRequest();'> Create Account  </button>"
    		+"</div>"
	);
	$("#signin").append(
		"<div class='header'>Sign In</div>"
		+"<div class='g-signin2 g_button' data-onsuccess='onSignIn'></div>"
		+"<div class='form-group input-group'>"
    			+"<div class='input-group-prepend'>"
		    		+"<span class='input-group-text'> <i class='fa fa-envelope'></i> </span>"
		 	+"</div>"
        		+"<input name='' id='signin_email' class='form-control' placeholder='Email' type='email'>"
    		+"</div>"
		+"<div class='form-group input-group'>"
    			+"<div class='input-group-prepend'>"
		    		+"<span class='input-group-text'> <i class='fa fa-lock'></i> </span>"
		 	+"</div>"
        		+"<input name='' id='signin_password' class='form-control' placeholder='Password' type='password'>"
    		+"</div>"
		+"<div class='form-group'>"
			+"<button type='submit' class='btn btn-primary btn-block' onclick='authenticateUser();'>Login</button>"
    		+"</div>"
	);
	$("#signup").hide();
}

function showSignUp() {
	$("#signin").hide();
	$("#signup").fadeIn();
}

function showSignIn() {
	$("#signup").hide();
	$("#signin").fadeIn();
}

function authenticateUser() {
	let email = document.getElementById('signin_email').value;
	let pswd  = document.getElementById('signin_password').value;
	let url = "https://uauth.mymsseprojects.com/users/auth";

	$.ajax({
		url: url,
		type: "POST",
		data: {email:email,password:pswd},
		dataType: "json"
	}).done(function(data, stat) {
		if (data.message !== undefined) {
			return alert(data.message);
		} else {
			localStorage.setItem('tokens', JSON.stringify(data));
			window.location = "https://www.mymsseprojects.com/file_management_demo";
		}
	});
}

function sendSignUpRequest() {
	let email = document.getElementById('new_email').value;
	let fname = document.getElementById('new_fn').value;
	let lname = document.getElementById('new_ln').value;
	let pswd  = document.getElementById('new_password').value;
	let cpswd = document.getElementById('confirm_password').value;

	if (email !== "" && pswd !== "" && cpswd !== "") {
		if (pswd !== cpswd) {
			alert("Passwords don't match!");
			return;
		} else {
			$.ajax({
				url: "https://uauth.mymsseprojects.com/users",
				type: "POST",
				data: {email:email, password:pswd, firstname:fname, lastname:lname},
				dataType: "json"
			}).done(function(data, stat) {
				console.log(data);
			});
		}
	} else {
		alert("Please fill in everything.");
		return;
	}

}
