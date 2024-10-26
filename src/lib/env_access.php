<?php
function loadEnv($file): void
{
  if (file_exists($file)) {
    $lines = file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
      putenv(trim($line));
    }
  } else {
    error_log("Error: .env file not found at " . $file);
    echo "Error: .env file not found at " . $file;
  }
}
