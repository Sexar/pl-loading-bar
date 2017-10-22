<?php
/**
 * Created by PhpStorm.
 * User: cesarmejia
 * Date: 22/10/2017
 * Time: 11:23 AM
 */

// Simulate the time that an ajax request could late. (Sending mails, saving in the DB, etc.)
$seconds = (rand(1000, 2000)) / 1000;
sleep($seconds);

// Return a success response in JSON format.
$response = array(
    "success" => true,
    "message" => sprintf("All processes are ok!. The process took %s seconds", $seconds)
);

echo json_encode($response);
