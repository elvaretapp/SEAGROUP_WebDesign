<?php
require 'koneksi.php';
$email = $_POST["email"];
$password = $_POST["password"];

$query_sql = "SELECT * FROM tbl_users
WHERE email = '$email' AND password = '$password'";

$result = mysqli_query($conn, $query_sql);

if (mysqli_num_rows($result) > 0) {
    header("Location: home.html");
    exit(); // pastikan script berhenti setelah redirect
} else {
    // Jika salah, redirect ke halaman login error
    header("Location: salah.html");
    exit(); 
}