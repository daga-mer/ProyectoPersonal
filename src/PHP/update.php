<?php
include 'conexion.php';

$id = $_POST['id'];
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$clave = $_POST['password'];


$imagen=($_FILES['foto']!="")?$id.$_FILES['foto']['name']:"descarga.png";

$tmpf=$_FILES['foto']['tmp_name'];

if ($tmpf!="") {
    move_uploaded_file($tmpf,"../imgup/".$imagen);
}


$up = $con->query("UPDATE usuarios SET nombre='$nombre', correo='$correo', clave='$clave', imgs='$imagen' WHERE id='$id'");


if ($up && $imagen) {
    echo "<script> 
    alert('ha actualizado con exito el usuario de nombre $nombre, debes reingresar a la plataforma');
    location.href='../index.php';
    </script>";
} else {
    echo "<script> 
    alert('ha fallado al actualizar su usuario');
    location.href='../actualizar.php?id=" . $id . "';
    </script>";
}
