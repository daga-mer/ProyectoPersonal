import React, { useState } from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, CardGroup, Nav, NavItem, NavLink, Jumbotron, Button } from 'reactstrap';
import Logo from './IMGS/web-fundamentals.svg';
import CardS from './Componentes/Cards';
import HTML5 from './IMGS/HTML5.png';
import CSS3 from './IMGS/CSS3.svg';
import JS from './IMGS/JS.png';
import PHP from './IMGS/PHP.png';
import REACT from './IMGS/React.png';
import MySQL from './IMGS/MySQL.png';
import './anime.css';
import './anime';
import './App.css';


const App = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>

      <Nav>
        <NavItem>
          <NavLink id='logo'>
            <img src={Logo} width='50px' alt='logo' />
            <p>Página web</p>
          </NavLink>
        </NavItem>
      </Nav>

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

      <div>
        <form id="search_form">
          <div className="input-field">
            <label htmlFor="search">
              <h2>Ingrese el nombre del anime</h2>
            </label><br />
            <input placeholder="Buscar animes" name="search" id="search" type="text" className="validate" />
            <button type="submit" className="btn btn-primary">
              Buscar
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
          </div>
        </form>

        <div id="search-results" className="container" />
      </div>

      <div style={{ height: '150px', overflow: 'hidden' }} >
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
          <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#000' }}>
          </path>
        </svg>
      </div>

      <footer>
        <h4>Medios de comunicación</h4>
        <p><strong>Celular:</strong> +57 31574043766</p>
        <p style={{ margin: '0%', paddingBottom: '2%' }}><strong>Correo:</strong> almanzad404@gmail.com</p>
      </footer>

      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Iniciar sesión</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
            </FormGroup>
            <FormGroup style={{ textAlign: 'center' }}>
              <Row>
                <Col>
                  <Button color='primary'>Ingresar</Button>
                </Col>
                <Col>
                  <Button color='primary'>Mostrar contraseña</Button>
                </Col>
              </Row>
            </FormGroup>
            <hr />
            <FormGroup>
              Si deseas acceder a nuestra plataforma puede usar:<br />
              <strong>El nombre usuario:</strong> Userprueba<br />
              <strong>clave usuario:</strong> Userprueba
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>

    </div >
  );
};

export default App;
