<?php
$con = new mysqli('localhost','root','','plataforma');

if (!$con) {
    echo "<script> alert('fallo al conectar a la base de datos')</script> ";
}
?>