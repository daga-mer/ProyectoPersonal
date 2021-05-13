import { BrowserRouter as Switch, Route } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import PerfilUser from "../Usuarios/PerfilUser";

export default function Login(props) {


    return (
        <Form style={{ textAlign: 'center', margin: '1%' }}>
            <h2>Ingresa a nuestra plataforma</h2>

            <FormGroup>
                <Label htmlFor="nombre">Nombre de usuario:</Label>
                <Input type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre de usuario" />
            </FormGroup>

            <FormGroup>
                <Label htmlFor="clave">Contraseña:</Label>
                <Input type="password" name="clave" id="clave" placeholder="Ingrese su contraseña" />
            </FormGroup>

            <FormGroup>
                <Button style={{ margin: '1%' }} color='primary' id='Mclave' onClick={() => {
                    var tipo = document.getElementById("clave");
                    var Mclave = document.getElementById("Mclave");

                    if (tipo.type === "password") {
                        tipo.type = "text";
                        Mclave.innerHTML = "Ocultar contraseña";
                    } else {
                        tipo.type = "password";
                        Mclave.innerHTML = "Mostrar contraseña";
                    }
                }} >Mostrar contraseña</Button>

                <Button style={{ margin: '1%' }} color='primary' onClick={() => {
                    var name = document.getElementById("nombre").value;
                    var clave = document.getElementById("clave").value;

                    console.log(name + ' Y ' + clave);
                }}>Ingresar</Button>
            </FormGroup>

            <hr />
                    Si deseas acceder a nuestra plataforma puede usar:<br />
            <strong>El nombre usuario:</strong> Userprueba<br />
            <strong>clave usuario:</strong> Userprueba
        </Form>
    );
}
