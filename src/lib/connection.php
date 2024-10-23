<?php
function get_sql_connection($host_name, $user_name, $password, $db_name)
{
  $sql_connection = mysqli_connect($host_name, $user_name, $password, $db_name);
  if ($sql_connection->connect_error) {
    die("Error: Something went wrong: " . $sql_connection->connect_error);
    return;
  }

  return $sql_connection;
}
