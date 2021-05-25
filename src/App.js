import React from 'react';
import { CardGroup, Jumbotron } from 'reactstrap';
import CardS from './Componentes/Cards';
import HTML5 from './IMGS/HTML5.png';
import CSS3 from './IMGS/CSS3.svg';
import JS from './IMGS/JS.png';
import PHP from './IMGS/PHP.png';
import REACT from './IMGS/React.png';
import MySQL from './IMGS/MySQL.png';
import Gmail from './IMGS/google-gmail.svg';
import GitHub from './IMGS/github-icon.svg';
import './App.css';

const App = (props) => {

  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href='#Bienvenida'>Bienvenida</a>
          </li>
          <li>
            <a href='#Tech'>Tecnologías</a>
          </li>
          <li>
            <a href='#Contacto'>Contacto</a>
          </li>
        </ul>
      </nav>

      <Jumbotron id='Bienvenida' style={{ textAlign: 'center', backgroundColor: 'white' }}>
        <h1 style={{ marginTop: '50px' }}>Bienvenido</h1>
        <p>
          Mucho gusto mi nombre es Daniel soy un desarrollador web de nivel
          junior colombiano de 18 años que reside en el municipio de soacha que
          conoce diversidad de lenguajes y herrramientas con las que puedo llegar
          a desempeñar mi labor de la mejor manera.
        </p>
      </Jumbotron>

      <div id='Tech' style={{ height: '150px', overflow: 'hidden' }} >
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
          <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#000' }}>
          </path>
        </svg>
      </div>

      <h1 style={{ textAlign: 'center', backgroundColor: 'black', margin: 0, color: 'white' }}>
        Tecnologias que manejo
        </h1>

      <CardGroup style={{ backgroundColor: 'black' }}>
        <CardS
          Img={HTML5}
        />
        <CardS
          Img={CSS3}
        />
        <CardS
          Img={JS}
        />
      </CardGroup>

      <CardGroup style={{ backgroundColor: 'black' }}>
        <CardS
          Img={PHP}
        />
        <CardS
          Img={REACT}
        />
        <CardS
          Img={MySQL}
        />
      </CardGroup>

      <div style={{ height: '150px', overflow: 'hidden' }} >
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
          <path d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{ stroke: 'none', fill: '#000' }}>
          </path>
        </svg>
      </div>

      <div style={{ height: '150px', overflow: 'hidden' }} >
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
          <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#000' }}>
          </path>
        </svg>
      </div>
      <footer id='Contacto'>
        <h4>Medios de comunicación</h4>
        <p style={{ margin: '0%', paddingBottom: '2%' }}>
          <a href='https://github.com/daga-mer' rel="noreferrer" target="_blank">
            <img src={GitHub} alt="" width='25px' height='25px' style={{ backgroundColor: "white", borderRadius: "100px" }} /> Click Aqui</a>
          <a href="mailto:almanzad404@gmail.com">
            <img src={Gmail} alt="" width='25px' height='25px' style={{ marginLeft: '10px' }} />  almanzad404@gmail.com</a>
        </p>
      </footer>
    </div >
  );
};

export default App;
