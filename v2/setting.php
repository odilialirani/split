<!DOCTYPE html>
<html>
  <head>
    
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

    <!-- Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

        
    <script src="http://code.jquery.com/jquery-2.2.4.js" integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI=" crossorigin="anonymous"></script>
    
    <?php include 'db.php'; ?>
    <script src="nav.js"></script>
    <link rel="stylesheet" href="index.css">
    
  </head>

  <body>
      <!-- navbar -->
      <header class="cf">
        <a href="#" id="navicon" class="closed">&#9776;</a>
      </header>
      <nav id="main-nav">
        <a href="index.html" ><div>home</div></a>
        <a href="display.html" ><div>show all</div></a>
        <a href="summary.html"><div>summary</div></a>
        <a href="#" class="current"><div>setting</div></a>
      </nav><!-- navbar -->

    <h1>SPLIT</h1>
    <br><br>

    <!-- Show current users -->
    <div class="container" align="center">
      <h4>current users</h4>
      <hr width="50%">
      <div id="show_users">
        <?php
          $query = "SELECT ppl_name FROM people";
          $result = $db->query($query);

          if ($result->num_rows >0) {
            while($row = $result->fetch_assoc()) {
              echo '<h5>';
              echo $row["ppl_name"];
              echo '</h5>';
              echo '<br>';
            }
          }

        ?>
      </div>
      <br><br>
      
    </div>
    <!-- Add users -->
    <div class="container" align="center">
        <h4>add user</h4>
        
    </div>
    <div id="snackbar"></div>
  </body>
</html>
