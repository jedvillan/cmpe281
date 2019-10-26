<?php
session_start();
header('Access-Control-Allow-Origin: *');
?>
<html>
	<head>
		<title>Test Login</title>
		<link rel='icon' href='../imgs/favicon.ico' type='image/x-icon'/>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
		<meta name="google-signin-client_id" content="151253503551-6laaogg1jaeiovuf9kvcci8mkh9aji1n.apps.googleusercontent.com">
		<script src="https://apis.google.com/js/platform.js" async defer></script>
		<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js" integrity="sha384-xrRywqdh3PHs8keKZN+8zzc5TX0GRTLCcmivcbNJWm2rs5C8PRhcEn3czEjhAO9o" crossorigin="anonymous"></script>
		<script src="https://kit.fontawesome.com/a215ff507f.js" crossorigin="anonymous"></script>
		<script src="js/main.js?t=<?php echo time();?>" type="text/javascript"></script>
		<script src="js/dist/aws-sdk.min.js?t=<?php echo time();?>" type="text/javascript"></script>
		<link rel="stylesheet" href="css/main.css?t=<?php echo time();?>">
		<script>
			$(document).ready(function() {
				init_form_ui();
			});
		</script>
	</head>
	<body>
		<div id='root'></div>
		<script>
			function onSignIn(googleUser) {
				var profile = googleUser.getBasicProfile();
				console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
				console.log('Name: ' + profile.getName());
				console.log('Image URL: ' + profile.getImageUrl());
				console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

				var id_token = googleUser.getAuthResponse().id_token;
        			console.log("ID Token: " + id_token);
				
			}
		</script>
	</body>
</html>
