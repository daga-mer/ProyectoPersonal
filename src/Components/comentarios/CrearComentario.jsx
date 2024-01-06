import React, { Component } from 'react'
import { Button, Form, FormFeedback, FormGroup, Input, Label } from 'reactstrap'

export default class CrearComentario extends Component {
    constructor() {
        super()
        this.state = {
            nombre: "",
            comentario: "",
            validarUsuario: null,
            validarComentario: null
        }
    }

    crearComentario = (event) => {
        event.preventDefault(); // Evita que la página se recargue
        console.log(
            'nombre: ', this.state.nombre, this.state.validarUsuario === null, this.state.nombre.length === 0,
            '\ncomentario: ', this.state.comentario, this.state.validarComentario === null, this.state.comentario.length === 0
        );
        if (this.state.validarUsuario === null || this.state.nombre.length === 0) {
            this.setState({ validarUsuario: false })
        } else {
            this.setState({ validarUsuario: true })
        }

        if (this.state.validarComentario === null || this.state.comentario.length === 0) {
            this.setState({ validarComentario: false })
        } else {
            this.setState({ validarComentario: true })
        }
    }

    render() {
        return (
            <Form onSubmit={this.crearComentario}>
                <FormGroup>
                    <Label for='NombreDeUsuario'>Nombre con el que te quieres identificar.</Label>
                    <Input onChange={(data) => { this.setState({ nombre: data.target.value }) }}
                        invalid={this.state.validarUsuario != null && !this.state.validarUsuario}
                        maxLength={15} className='inputNombreUsuario' id='NombreDeUsuario' />
                </FormGroup>
                <FormFeedback>
                    ttexto de apoyo
                </FormFeedback>
                <FormGroup>
                    <Label for='ComentarioUsuario'>Añade tu comentario.</Label>
                    <Input onChange={(data) => { this.setState({ comentario: data.target.value }) }}
                        invalid={this.state.validarComentario != null && !this.state.validarComentario}
                        maxLength={255} type="textarea" className='inputComentarioUsuario' id='ComentarioUsuario' />
                </FormGroup>
                <FormFeedback>
                    ttexto de apoyo
                </FormFeedback>

                <Button color='primary'>Comentar</Button>
            </Form>
        )
    }
}
