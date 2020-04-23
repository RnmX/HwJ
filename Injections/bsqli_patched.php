<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);
include 'conf.php';
//echo "test";
$user_agent = $_SERVER['HTTP_USER_AGENT'];
$conn = new mysqli($servername, $username, $password,'HwJ');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully\n";
$sql_query = "SELECT id from UAs where useragent = ?";
$pst = $conn->prepare($sql_query);
$pst->bind_param("s", $user_agent);
$pst->execute();
 
if ($pst->num_rows > 0) {
echo "Your User Agent is not supported!";
}
else{
echo "OK! Your User Agent:\n";
echo $user_agent;}
$conn->close();
?>
