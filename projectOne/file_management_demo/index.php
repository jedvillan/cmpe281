<?php
session_start();
header('Access-Control-Allow-Origin: *');
?>

<html>
	<head>
		<title>File Management</title>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
		<script src="js/file_mgmt.js?t=<?php echo time(); ?>"></script>
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
