<?php
$conn = new mysqli("localhost","Misha","124578","test");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$targetDir = "uploads/";
$fileName = basename($_FILES["file"]["name"]);
$targetFilePath = $targetDir . $fileName;
$fileType = pathinfo($targetFilePath,PATHINFO_EXTENSION);
$name = $_POST['name'];

if(isset($_POST["submit"]) && !empty($_FILES["file"]["name"])){
    $allowTypes = array('jpg','png','jpeg','gif','pdf');
    if(in_array($fileType, $allowTypes)){
        if(move_uploaded_file($_FILES["file"]["tmp_name"], $targetFilePath)){
            $insert = $conn->query("INSERT into images (file_name, uploaded_on,name) VALUES ('".$fileName."', NOW(),'$name')");
        }
    }
}
header('Location:index.html');