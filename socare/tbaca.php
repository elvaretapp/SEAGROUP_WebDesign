<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Komentar</title>
        <style>
            /* Reset CSS */
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Raleway:wght@400;500;600;700&family=Roboto+Slab:wght@400;500;600;700&display=swap');
            /* variabel */
            :root {
                --poppins-font: "Poppins", sans-serif;
                --font-family-1: "Raleway", sans-serif;
                --font-family-2: "Roboto Slab", serif;
            }
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                scroll-behavior: smooth;
                scroll-padding-top: 3rem;
                font-family: var( --font-family-2);
            }
            body {
                color: var( --text-color);
                padding: 20px;
            } 
           
            table {
                border-collapse: collapse;
                width: 80%;
                margin: 20px auto;
                background-color: #fff;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                border-radius: 8px;
                overflow: hidden;
            }

            thead {
                background-color: #00008B;
                color: white;
                text-align: left;
                font-size: 18px;
            }

            th, td {
                padding: 15px;
                text-align: left;
                border-bottom: 1px solid #ddd;
            }

            tbody tr:nth-child(even) {
                background-color: #f9f9f9;
            }

            h1 {
                font-size: 28px;
                text-align: center;
                margin-bottom: 20px;
            }

            /* Responsive Design */
            @media (max-width: 768px) {
                table {
                    width: 100%;
                }

                th, td {
                    padding: 10px;
                }
            }
        </style>
    </head>
    <body>
        <h1>Daftar Pesan</h1>
        <table>
            <thead>
                <tr>
                    <th>Nama</th>
                    <th>Email</th>
                    <th>Pesan</th>
                </tr>
            </thead>
            <tbody>
                <?php
                $pdo = new PDO("mysql:host=127.0.0.1;dbname=contact", "root", "");
                $sql = "select * from contact_us";
                $query = $pdo->prepare($sql);
                $query->execute();
                while($data = $query->fetch()) {
                    echo '<tr>';
                    echo '<td>'.htmlentities($data['username']).'</td>';
                    echo '<td>'.htmlentities($data['email']).'</td>';
                    echo '<td>'.htmlentities($data['pesan']).'</td>';
                    echo '</tr>';
                } 
                ?>
            </tbody>
        </table>
    </body>
</html>
