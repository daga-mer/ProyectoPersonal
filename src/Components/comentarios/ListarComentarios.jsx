import React, { Component } from 'react'

export default class ListarComentarios extends Component {

    constructor() {
        super();
        this.state = {
            listaDecomentarios: [
                {
                    id: 1,
                    nombreUsuario: "Daniel",
                    comentario: "Comentario de prueba.",
                    fecha_creacion: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`
                }
            ]
        }
    }

    async obtenerComentarios() {
        try {
            const peticion = await fetch('https://randomuser.me/api?results=10')
            let respuesta = await peticion.json()
            respuesta['results'].map(item => item.active = false)
            console.log('respuesta: ', respuesta);
            this.setState({ data: respuesta })
        } catch (error) {
            console.error('Error al obtener los comentarios: ', error);
        }
    }

    componentDidMount() {
        this.obtenerComentarios()
    }

    imprimirComentarios() {
        return this.state.listaDecomentarios.map((value) => {
            return <div className='divComentario' key={value.id}>
                <div className='tituloComentario'>
                    <h5>{value.nombreUsuario}</h5>
                    <p className='fechaCreacion'>{value.fecha_creacion}</p>
                </div>
                <h6 className='comentario'>{value.comentario}</h6>
            </div>
        })
    }

    render() {
        return (
            <div className='ListaComentarios'>
                {this.imprimirComentarios()}
            </div>
        )
    }
}
