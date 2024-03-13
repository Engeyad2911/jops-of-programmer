<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $phone = $_POST["phone"];

    $data = "Name: $name\nEmail: $email\nPassword: $password\nPhone Number: $phone\n";

    file_put_contents("data.txt", $data, FILE_APPEND);

    echo "<h2>Registration Complete</h2>";
    echo "<p>Thank you for registering. We will contact you soon.</p>";
    }