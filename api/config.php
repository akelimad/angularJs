<?php
 
//connect with database
try {
    $dbc=new PDO("mysql:host=localhost;dbname=zinycore","root","") or die("Unable to connect.");
}
catch(PDOException $e)
    {
    echo "Error: " . $e->getMessage();
    }
 
?>