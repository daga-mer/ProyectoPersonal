import React, { Component } from 'react'
import CrearComentario from '../Components/comentarios/CrearComentario'
import ListarComentarios from '../Components/comentarios/ListarComentarios'

export default class PaginaComentarios extends Component {

  constructor(){
    super();
    this.state = {
      comentarios: []
    };
  }

  render() {
    return (
      <>
        <h1>Bienvenido a los comentarios</h1>
        <p>Puedes agregar un comentario sobre la página, con tu propio alias para mejorar la presentación o su funcionalidad.</p>
        
        <br/>

        <CrearComentario />

        <hr />

        <ListarComentarios />
      </>
    )
  }
}
