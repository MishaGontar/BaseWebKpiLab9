<?php
$conn = new mysqli("localhost","Misha","124578","test");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$arrays =array();
if($result = $conn->query("SELECT * FROM images ORDER BY uploaded_on DESC")){
    while($row = $result->fetch_array(MYSQLI_ASSOC)) {
        $arrays[] = $row;
    }
    exit(json_encode($arrays));
}