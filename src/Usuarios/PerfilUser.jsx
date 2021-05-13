import { Component } from "react";


class PerfilUser extends Component {
    render() {
        return (
            <div style={{marginLeft: '1%', marginRight: '1%'}}>
                <form action="../PHP/update.php" method="POST" enctype="multipart/form-data">
                    <h2 style={{textAlign: 'center'}}>Formulario para actualizar usuario</h2>
                    <input type="hidden" name="id" value="<?php echo $fila['id'] ?>" required />
                    <div style={{marginBottom: '1%'}}>
                        <img id="userimg" src="./imgup/<?php echo $fila['imgs'] ?>" alt='imgPerfil' width='110px' height='110px' />
                        <input type="file" accept="image/" name="foto" id="foto" alt="imagen del usuaro" required />
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="nombre" name="nombre" value="<?php echo $fila['nombre'] ?>" required />
                        <label for="nombre">Nombre de usuario</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="correo" name="correo" value="<?php echo $fila['correo'] ?>" required />
                        <label for="correo">Correo electronico</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="password" name="password" value="<?php echo $fila['clave'] ?>" required />
                        <label for="password">Clave de usuario</label>
                    </div>
                    <button style={{marginLeft: '1%'}} class="btn btn-primary" id="Mclave" type="button" onclick="mostrarContrasena()">
                        Mostrar Contraseña
            </button>
                    <button class="btn btn-primary" type="submit">
                        Actualizar datos
            </button>
                </form>
            </div>
        );
    }
}

export default PerfilUser;