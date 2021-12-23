<?php
$conn = new mysqli("localhost:3307","Misha","124578","test");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = $_POST['idi'];
$sql = "Delete from images where id = $name";
if($conn->query($sql)) ;