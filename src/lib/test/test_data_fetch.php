<?php
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
header('Content-Type: application/json');
require_once "../utils.php";

$sql_connection = get_sql_connection();

$query = "SELECT * FROM users";
$result = $sql_connection->query($query);

$data = $result->fetch_all(MYSQLI_ASSOC);
echo json_encode($data);

$sql_connection->close();
