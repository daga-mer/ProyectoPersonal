<?php
include 'conexion.php';

$id = $_REQUEST['id'];

$del = $con->query("DELETE FROM usuarios WHERE id='$id'");

if ($del) {
    echo "<script> 
    alert('ha eliminado el usuario con exito');
    history.go(-1);
    </script>";
}else{
    echo "<script> 
    alert('ha fallado al eliminar el usuario');
    history.go(-1);
    </script>";
}

?>