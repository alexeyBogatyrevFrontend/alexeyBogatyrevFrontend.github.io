<?php
    $conn = mysqli_connect("localhost", "root", "root", "fortunewheel");
        
    // Check connection
    if($conn === false){
        die("ERROR: Could not connect. "
            . mysqli_connect_error());
    }

    $phoneNumber =  $_REQUEST['phoneNumber'];
        
    // Performing insert query execution
    // here our table name is college
    $sql = "INSERT INTO phonenumbers (phoneNumber) VALUES ('$phoneNumber')";
        
    if(mysqli_query($conn, $sql)){
        echo "<h3>Success</h3>";

        echo nl2br("$phoneNumber");
    } else{
        echo "ERROR: Hush! Sorry $sql. "
            . mysqli_error($conn);
    }
        
    // Close connection
    mysqli_close($conn);
?>