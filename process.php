<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $product = htmlspecialchars($_POST['product']);
    echo "<div style='text-align: center; margin-top: 50px;'>
            <h1>Thank you for buying: $product!</h1>
            <a href='main.html' style='text-decoration: none; font-size: 20px; display: block; margin-top: 20px;'>Back to Shop</a>
          </div>";
}
?>