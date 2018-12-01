<?php
	$serverName = "localhost";
	$userName = "root";
	$pwd = "root";
	$dbName = "h5_bl_project";

	$conn = new mysqli($serverName,$userName,$pwd,$dbName);

	mysqli_set_charset($conn, "utf8");

	if($conn->connect_error){
		die("连接失败：".$conn->connect_error);
	}
	
	


?>