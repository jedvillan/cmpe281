<?php
session_start();

$servername = "http://ec2-3-219-170-125.compute-1.amazonaws.com";
$username = "admin	";
$password = "adminadmin";
$dbname = "project1";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
	echo "Success!";
}

#$sql = "INSERT INTO MyGuests (firstname, lastname, email)
#VALUES ('John', 'Doe', 'john@example.com')";
#
#if ($conn->query($sql) === TRUE) {
#    echo "New record created successfully";
#} else {
#    echo "Error: " . $sql . "<br>" . $conn->error;
#}

$conn->close();
?>
