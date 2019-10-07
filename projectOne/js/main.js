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
        		+"<input name='' class='form-control' placeholder='Email Address' type='email'>"
    		+"</div>"
		+"<div class='form-group input-group'>"
    			+"<div class='input-group-prepend'>"
		    		+"<span class='input-group-text'> <i class='fa fa-lock'></i> </span>"
		 	+"</div>"
        		+"<input name='' class='form-control' placeholder='New Password' type='password'>"
    		+"</div>"
		+"<div class='form-group input-group'>"
    			+"<div class='input-group-prepend'>"
		    		+"<span class='input-group-text'> <i class='fa fa-lock'></i> </span>"
		 	+"</div>"
        		+"<input name='' class='form-control' placeholder='Confirm Password' type='password'>"
    		+"</div>"
		+"<div class='form-group'>"
			+"<button type='submit' class='btn btn-primary btn-block'> Create Account  </button>"
    		+"</div>"
	);
	$("#signin").append(
		"<div class='header'>Sign In</div>"
		+"<div class='g-signin2 g_button' data-onsuccess='onSignIn'></div>"
		+"<div class='form-group input-group'>"
    			+"<div class='input-group-prepend'>"
		    		+"<span class='input-group-text'> <i class='fa fa-envelope'></i> </span>"
		 	+"</div>"
        		+"<input name='' class='form-control' placeholder='Email' type='email'>"
    		+"</div>"
		+"<div class='form-group input-group'>"
    			+"<div class='input-group-prepend'>"
		    		+"<span class='input-group-text'> <i class='fa fa-lock'></i> </span>"
		 	+"</div>"
        		+"<input name='' class='form-control' placeholder='Password' type='password'>"
    		+"</div>"
		+"<div class='form-group'>"
			+"<button type='submit' class='btn btn-primary btn-block'>Login</button>"
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
