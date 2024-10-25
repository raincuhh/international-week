<?php

require "env_access.php";
loadEnv(__DIR__ . "/../../.env");

function get_sql_connection()
{
  $sql_connection = mysqli_connect(
    getenv('DB_HOST'),
    getenv('DB_USER'),
    getenv('DB_PASS'),
    getenv('DB_NAME')
  );

  if ($sql_connection->connect_error) {
    echo ("Error: Something went wrong: " . $sql_connection->connect_error);
    return;
  }
  return $sql_connection;
}
