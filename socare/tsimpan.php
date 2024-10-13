<?php
$pdo = new PDO("mysql:host=127.0.0.1;dbname=contact", "root", "");
$sql = "insert into contact_us (username, email, pesan) values (:username, :email, :pesan)";
$query = $pdo->prepare($sql);
$query->execute(array(
    'username' => $_POST['username'],
    'email' => $_POST ['email'],
    'pesan' => $_POST ['pesan'],
));
echo "<script>
        window.location.href = 'tentang.html'; // Mengarahkan kembali ke halaman tentang
      </script>";
?>