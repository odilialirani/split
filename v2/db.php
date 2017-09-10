<html>
	<?php
		$db = mysqli_connect('sql9.freemysqlhosting.net','sql9193855','LMIYInjsQb','sql9193855');
		if (!$db) {
		    die('Could not connect: ' . mysql_error());
		}
		echo 'Connected successfully';
		mysql_close($db);
	?>

</html>