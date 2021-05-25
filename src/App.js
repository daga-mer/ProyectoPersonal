import React from 'react';
import { CardGroup, Jumbotron, Button } from 'reactstrap';
import LinKedin from './IMGS/linkedin-icon.svg';
import Angular from './IMGS/angular-icon.svg';
import Bootstrap from './IMGS/bootstrap.svg';
import GitHub from './IMGS/github-icon.svg';
import Gmail from './IMGS/google-gmail.svg';
import CardS from './Componentes/Cards';
import Git from './IMGS/git-icon.svg';
import REACT from './IMGS/React.png';
import HTML5 from './IMGS/HTML5.png';
import MySQL from './IMGS/MySQL.png';
import CSS3 from './IMGS/CSS3.svg';
import PHP from './IMGS/PHP.png';
import JS from './IMGS/JS.png';
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
          Mucho gusto, mi nombre es Daniel soy un joven colombiano desarrollador
          web de nivel junior de 18 años de edad con 6 meses de experiencia,
          resido en el municipio de Soacha. Conozco diversidad de lenguajes y
          herrramientas con las que puedo llegar a desempeñar mi labor de la mejor
          manera.
        </p>
      </Jumbotron>

      <div id='Tech' style={{ height: '150px', overflow: 'hidden' }} >
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
          <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#000' }}>
          </path>
        </svg>
      </div>

      <h1 style={{ textAlign: 'center', backgroundColor: 'black', margin: 0, color: 'white' }}>
        Tecnologias y herramientas que manejo
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
          Img={MySQL}
        />
        <CardS
          Img={REACT}
        />
      </CardGroup>

      <CardGroup style={{ backgroundColor: 'black' }}>
        <CardS
          Img={Angular}
        />
        <CardS
          Img={Bootstrap}
        />
        <CardS
          Img={Git}
        />
      </CardGroup>

      <div style={{ height: '150px', overflow: 'hidden' }} >
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
          <path d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{ stroke: 'none', fill: '#000' }}>
          </path>
        </svg>
      </div>

      <div style={{ textAlign: 'center' }}>
        <a href='https://drive.google.com/file/d/1CTI-4c47ImBjL2y2gJ90R2owXIG-pkA5/view?usp=sharing' rel="noreferrer" target="_blank">
          <Button color="primary">
            Descarga mi CV
          </Button>
        </a>
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
            <img src={GitHub} alt="" width='25px' height='25px' style={{ backgroundColor: "white", borderRadius: "100px" }} /> GitHub</a>

          <a href="mailto:almanzad404@gmail.com" rel="noreferrer" target="_blank">
            <img src={Gmail} alt="" width='25px' height='25px' style={{ marginLeft: '10px' }} />  Correo electronico</a>

          <a href="http://www.linkedin.com/in/daniel-alejandro-gonzalez-almanza-66141720a" rel="noreferrer" target="_blank">
            <img src={LinKedin} alt="" width='25px' height='25px' style={{ marginLeft: '10px' }} />  LinKedin</a>
        </p>
      </footer>
    </div >
  );
};

export default App;
