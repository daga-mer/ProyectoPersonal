<?php
include 'conexion.php';

$Cdestino = 'almanzad404@gmail.com';
$nombre = $_POST['NombreC'];
$correo = $_POST['CorreoE'];
$asunto = $_POST['asuntoC'];
$cuerpo = $_POST['cuerpoC'];

mail($Cdestino,$asunto,$cuerpo);
header("location:../index.php");

?>