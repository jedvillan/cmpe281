<?php
session_start();
header('Access-Control-Allow-Origin: *');
?>

<html>
	<head>
		<title>File Management</title>
		<link rel='shortcut icon' href='../imgs/favicon.ico' type='image/x-icon'>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
		<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js" integrity="sha384-xrRywqdh3PHs8keKZN+8zzc5TX0GRTLCcmivcbNJWm2rs5C8PRhcEn3czEjhAO9o" crossorigin="anonymous"></script>
                <script src="https://kit.fontawesome.com/a215ff507f.js" crossorigin="anonymous"></script>
		<script src="js/file_mgmt.js?t=<?php echo time(); ?>"></script>
		<link rel='stylesheet' href="css/file_mgmt.css?t=<?php echo time();?>">
		<script>
			$(document).ready(function() {
				initPage();
			});
		</script>
	</head>
	<body>
		<div id='root'></div>
	</body>
</html>
