import React from 'react';
import { CardGroup, Jumbotron } from 'reactstrap';
import ModalC2 from "./Componentes/ModalC2";
import ModalC from "./Componentes/ModalC";
import CardS from "./Componentes/Cards";
import Array1 from "./Componentes/Imgs";
import NavBar from "./Componentes/Nav";
import 'animate.css';
import './App.css';

const App = () => {

  const styles = {
    estilos: {
      textAlign: 'center',
      margin: 0,
      color: 'white',
      paddingTop: '20px',
      paddingBottom: '20px'
    },
    ImgP: {
      animation: 'bounce',
      animationDuration: '1s',
      float: 'left',
      margin: '1%'
    },
    ImgR: {
      animation: 'bounce',
      animationDuration: '1s',
      float: 'right',
      margin: '1%'
    },
    ImgF: {
      animation: 'bounce',
      animationDuration: '1s',
      float: 'left',
    }
  };
  let fechaNacimiento = new Date("April 19, 2003")
  let hoy = new Date()
  let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
  let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
  
  if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
    edad--
  }

  let mesesTrabajo = [
    {
      empresa: 'INSERCORS S.A.S',
      meses: 5,
      dias: 28
    },
    {
      empresa: 'NONGRATA GAMMING',
      meses: 11,
      dias: 30
    },
  ]
  let sumaMeses = 0
  let sumaDias = 0
  let cantDias = 0

  for (let i = 0; i < mesesTrabajo.length; i++) {
    sumaMeses += mesesTrabajo[i].meses;
    sumaDias += mesesTrabajo[i].dias;
  }

  for (let i = 0; i < sumaDias; i++) {
    cantDias++
    if (cantDias === 30) {
      cantDias = 0
      sumaMeses++
    }

  }



  return (
    <>
      <NavBar />

      <Jumbotron id='Bienvenida'>
        <img id='pc' style={styles.ImgP} src={Array1[0]} width='25%' alt="presentacion" />
        <h1 style={{ marginTop: '50px' }}>Bienvenido</h1>
        <p>
          Mucho gusto, mi nombre es Daniel soy un joven colombiano desarrollador
          web de {edad} años de edad, cuento con {sumaMeses} meses de experiencia 
          laboral, resido en el municipio de Soacha. Conozco diversidad de 
          lenguajes y herrramientas con las que puedo llegar a desempeñar mi 
          labor de la mejor manera.
          <br />
          Aqui hay un link a mi repositorio de trabajos en la página de
          <a style={{ marginLeft: '10px' }} href='https://github.com/daga-mer' rel="noreferrer" target="_blank">
            <img src={Array1[1]} alt="" width='25px' height='25px' style={{ backgroundColor: "white", borderRadius: "100px" }} /> GitHub
          </a>.
        </p>
      </Jumbotron>
      <img id='cel' style={styles.ImgP} src={Array1[0]} width='25%' alt="presentacion" />

      {/* <div style={{textAlign:'center'}}>
        <ModalC
          buttonLabel='Ver certificados SENA'
        />
        
        <ModalC2
          buttonLabel='Ver otros certificados'
        />
      </div> */}

      <div id='Tech' style={{ height: '150px', overflow: 'hidden' }} >
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
          <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#000' }}>
          </path>
        </svg>
      </div>

      <div style={{ backgroundColor: '#000000' }}>
        <h2 style={styles.estilos}>Principales tecnologias que manejo</h2>

        <CardGroup >
          <CardS
            Img={Array1[2]}
          />
          <CardS
            Img={Array1[3]}
          />
          <CardS
            Img={Array1[4]}
          />
        </CardGroup>

        <CardGroup >
          <CardS
            Img={Array1[5]}
          />
          <CardS
            Img={Array1[6]}
          />
        </CardGroup>

        <h2 style={styles.estilos}>Herramientas</h2>

        <CardGroup >
          <CardS
            Img={Array1[7]}
          />
          <CardS
            Img={Array1[8]}
          />
        </CardGroup>
      </div>

      <div style={{ height: '150px', overflow: 'hidden' }} >
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
          <path d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{ stroke: 'none', fill: '#000' }}>
          </path>
        </svg>
      </div>

      <div>
        <h1 className='Titulo' id='Ptiempos' style={{ textAlign: 'center' }}>Pasatiempos</h1>

        <img src={Array1[9]} style={styles.ImgR} alt='relax' width='32%' />
        <ul style={{ listStyleType: 'upper-roman' }}>
          <li>Videojuegos.🎮</li>
          <li>Aprender nuevas tecnologías fuera de mi enfoque.🤓<br />
            <b>Ej:</b> Lenguajes como: C++, JAVA; Diseño web, etc.</li>
          <li>Mejorar proyectos antiguos.🖥</li>
          <li>Iniciar proyectos nuevos con tecnologías ya conocidas.🖥</li>
          <li>Informarme sobre el avance tecnológico en todo el mundo.🤓</li>
          <li>Escuchar música, especialmente: Rap, salsa, merengue, etc.🎧</li>
        </ul>
      </div>

      <div style={{ height: '150px'}} >
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
          <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#262626' }}>
          </path>
        </svg>
      </div>

      <footer id='Contacto'>
        <img src={Array1[10]} style={styles.ImgF} alt='relax' width='20%' />

        <h4 className='Titulo' >Medios de comunicación</h4>

        <div style={{ margin: '0%', paddingBottom: '2%' }}>
          <p style={{ color: 'white' }}>Número de telefono movil: +57 3157403766</p>

          <a href="mailto:almanzad404@gmail.com" rel="noreferrer" target="_blank">
            <img src={Array1[11]} alt="" width='25px' height='25px' style={{ marginLeft: '10px' }} />  Correo electronico</a>

          <a href="https://www.linkedin.com/in/daniel-alejandro-gonzalez-almanza-66141720a/?originalSubdomain=co" rel="noreferrer" target="_blank">
            <img src={Array1[12]} alt="" width='25px' height='25px' style={{ marginLeft: '10px' }} />  LinKedin</a>
        </div>
      </footer>
    </ >
  );
};

export default App;
