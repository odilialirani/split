<?php
	include 'db.php';
	$name = $_POST["name"];

	$sql = $db->prepare("INSERT INTO people (ppl_name) VALUES (?)");
	$sql->bind_param("s", $name);
	$sql->execute();
	$sql->close();
	
?>
