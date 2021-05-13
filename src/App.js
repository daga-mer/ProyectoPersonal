import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, CardGroup, Button,Jumbotron } from 'reactstrap';
import Login from './Componentes/Login';
import Dado from './Componentes/Dado';
import CardS from './Componentes/Cards';
import HTML5 from './IMGS/HTML5.png';
import CSS3 from './IMGS/CSS3.svg';
import JS from './IMGS/JS.png';
import PHP from './IMGS/PHP.png';
import REACT from './IMGS/React.png';
import MySQL from './IMGS/MySQL.png';
import './App.css';
import './PHP/conexion.php';

const App = (props) => {

  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Jumbotron style={{ textAlign: 'center', backgroundColor: 'white' }}>
        <h1>Bienvenido</h1>
        <p>
          Mucho gusto mi nombre es Daniel soy un desarrollador web de nivel
          junior colombiano de 18 años que reside en el municipio de soacha que
          conoce diversidad de lenguajes y herrramientas con las que puedo llegar
          a desempeñar mi labor de la mejor manera.
        </p>
        <Button color="primary" onClick={toggle}>Bienvenido</Button>
      </Jumbotron>

      <div style={{ height: '150px', overflow: 'hidden' }} >
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
          <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#000' }}>
          </path>
        </svg>
      </div>

      <CardGroup style={{ backgroundColor: 'black' }}>
        <CardS
          Img={HTML5}
          Title='HTML5'
          Subtitle='Usos'
          Texts='HTML, siglas en inglés de HyperText Markup Language, hace referencia 
        al lenguaje de marcado para la elaboración de páginas web.'
        />
        <CardS
          Img={CSS3}
          Title='CSS3'
          Subtitle='Usos'
          Texts='CSS, en español «Hojas de estilo en cascada», es un lenguaje de diseño 
        gráfico para definir y crear la presentación de un documento estructurado 
        escrito en un lenguaje de marcado.'
        />
        <CardS
          Img={JS}
          Title='JavaScript'
          Subtitle='Usos'
          Texts='JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. 
        Se define como orientado a objetos, ​ basado en prototipos, imperativo, débilmente tipado y dinámico.'
        />
      </CardGroup>

      <CardGroup style={{ backgroundColor: 'black' }}>
        <CardS
          Img={PHP}
          Title='PHP'
          Subtitle='Usos'
          Texts='PHP es un lenguaje de programación de uso general que se adapta especialmente al 
        desarrollo web.​Fue creado inicialmente por el programador danés-canadiense Rasmus Lerdorf en 
        1994.​ En la actualidad, la implementación de referencia de PHP es producida por The PHP Group.'
        />
        <CardS
          Img={REACT}
          Title='React'
          Subtitle='Usos'
          Texts='React es una biblioteca Javascript de código abierto diseñada para crear interfaces de 
        usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es 
        mantenido por Facebook y la comunidad de software libre.'
        />
        <CardS
          Img={MySQL}
          Title='MySQL'
          Subtitle='Usos'
          Texts='MySQL es un sistema de gestión de bases de datos relacional desarrollado bajo licencia 
        dual: Licencia pública general/Licencia comercial por Oracle Corporation y está considerada como 
        la base de datos de código abierto más popular del mundo, y una de las más populares en general 
        junto a Oracle y Microsoft SQL Server, todo para entornos de desarrollo web.'
        />
      </CardGroup>

      <div style={{ height: '150px', overflow: 'hidden' }} >
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
          <path d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{ stroke: 'none', fill: '#000' }}>
          </path>
        </svg>
      </div>

      <Dado/>


      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Iniciar sesión</ModalHeader>
        <ModalBody>
          {Login()}
        </ModalBody>
      </Modal>

    </div >
  );
};

export default App;
