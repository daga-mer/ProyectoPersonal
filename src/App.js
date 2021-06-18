import React from 'react';
import { CardGroup, Jumbotron } from 'reactstrap';
import NavBar from "./Componentes/Nav";
import LinKedin from './IMGS/linkedin-icon.svg';
import Angular from './IMGS/angular-icon.svg';
import Bootstrap from './IMGS/bootstrap.svg';
import GitHub from './IMGS/github-icon.svg';
import Gmail from './IMGS/google-gmail.svg';
import CardS from './Componentes/Cards';
import Git from './IMGS/git-icon.svg';
import REACT from './IMGS/react.svg';
import HTML5 from './IMGS/html-5.svg';
import MySQL from './IMGS/mysql.svg';
import CSS3 from './IMGS/css-3.svg';
import PHP from './IMGS/php.svg';
import JS from './IMGS/javascript.svg';
import './App.css';
import 'animate.css';

const App = () => {

  const styles = {
    estilos: {
      textAlign: 'center',
      margin: 0,
      color: 'white',
      paddingTop: '20px',
      paddingBottom: '20px'
    }
  };

  return (
    <div>
      <NavBar />

      <Jumbotron id='Bienvenida'>
        <h1 style={{ marginTop: '50px' }}>Bienvenido</h1>
        <p>
          Mucho gusto, mi nombre es Daniel soy un joven colombiano desarrollador
          web de nivel junior de 18 años de edad con 6 meses de experiencia,
          resido en el municipio de Soacha. Conozco diversidad de lenguajes y
          herrramientas con las que puedo llegar a desempeñar mi labor de la mejor
          manera.
          <br />
          Aqui hay un link a mi repositorio de trabajos en la página de
          <a style={{ marginLeft: '10px' }} href='https://github.com/daga-mer' rel="noreferrer" target="_blank">
            <img src={GitHub} alt="" width='25px' height='25px' style={{ backgroundColor: "white", borderRadius: "100px" }} /> GitHub
          </a>.
        </p>
      </Jumbotron>

      <div id='Tech' style={{ height: '150px', overflow: 'hidden' }} >
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
          <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#000' }}>
          </path>
        </svg>
      </div>
      
      <div style={{backgroundColor:'#000000'}}>
        <h1 className='Titulo' style={{ textAlign: 'center', margin: 0, color: 'white' }}>
          Tecnologias y herramientas que manejo
        </h1>

        <h2 style={styles.estilos}>Tecnologias que manejo a un nivel medio</h2>

        <CardGroup >
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

        <CardGroup >
          <CardS
            Img={REACT}
          />
        </CardGroup>

        <h2 style={styles.estilos}>Tecnologias que manejo a un nivel bajo</h2>

        <CardGroup >
          <CardS
            Img={Angular}
          />
          <CardS
            Img={PHP}
          />
          <CardS
            Img={MySQL}
          />
        </CardGroup>

        <h2 style={styles.estilos}>Herramientas</h2>

        <CardGroup >
          <CardS
            Img={Bootstrap}
          />
          <CardS
            Img={Git}
          />
        </CardGroup>

      </div>
      
      <div style={{ height: '150px', overflow: 'hidden' }} >
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
          <path d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{ stroke: 'none', fill: '#000' }}>
          </path>
        </svg>
      </div>

      <h1 className='Titulo' id='Ptiempos' style={{ textAlign: 'center' }}>Pasatiempos</h1>

      <ul style={{ listStyleType: 'upper-roman' }}>
        <li>Videojuegos.🎮</li>
        <li>Aprender nuevas tecnologías fuera de mi enfoque.🤓<br />
          <b>Ej:</b> Lenguajes como: C++, JAVA, SQL; Diseño web, etc.</li>
        <li>Rehacer o modificar proyectos antiguos.🖥</li>
        <li>Iniciar proyectos nuevos con tecnologías ya conocidas.🖥</li>
        <li>Informarme sobre el avance tecnológico en todo el mundo.🤓</li>
        <li>Escuchar música, especialmente: Rap, salsa, merengue, etc.🎧</li>
      </ul>

      <div style={{ height: '150px', overflow: 'hidden' }} >
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
          <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#262626' }}>
          </path>
        </svg>
      </div>

      <footer id='Contacto'>

        <h4 className='Titulo' >Medios de comunicación</h4>

        <div style={{ margin: '0%', paddingBottom: '2%' }}>
          <p style={{ color: 'white' }}>Número de telefono movil: +57 3157403766</p>

          <a href="mailto:almanzad404@gmail.com" rel="noreferrer" target="_blank">
            <img src={Gmail} alt="" width='25px' height='25px' style={{ marginLeft: '10px' }} />  Correo electronico</a>

          <a href="https://www.linkedin.com/in/daniel-alejandro-gonzalez-almanza-66141720a/?originalSubdomain=co" rel="noreferrer" target="_blank">
            <img src={LinKedin} alt="" width='25px' height='25px' style={{ marginLeft: '10px' }} />  LinKedin</a>
        </div>
      </footer>
    </div >
  );
};

export default App;
