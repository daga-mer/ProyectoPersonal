<?php
include 'conexion.php';

$nombre = $_POST['nombreR'];
$correo = $_POST['correoR'];
$pass = $_POST['claveR'];


$imagen=($_FILES['foto']!="")?$id.$_FILES['foto']['name']:"descarga.png";

$tmpf=$_FILES['foto']['tmp_name'];

if ($tmpf!="") {
    move_uploaded_file($tmpf,"../imgup/".$imagen);
}


$ins = $con->query("INSERT INTO usuarios (id,nombre,correo,clave,imgs) VALUES('','$nombre','$correo','$pass','$imagen')");

if ($ins) {
    echo "<script> 
    alert('Se han guardado los datos del usuario $nombre');
    history.go(-5);
    location.reload();
    </script>";
} else {
    echo "fallo al almacenar los datos";
}
