import React from 'react';
import Imagenes from "./Components/Imgs";
import NavBar from "./Components/Nav";
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
      margin: '1%',
      height: '17rem'
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
      height: '7rem'
    }
  };

  return (
    <>
      <NavBar />

      <footer id='Contacto'>
        <img src={Imagenes[10]} style={styles.ImgF} alt='relax' />


        <div style={{ margin: '0%', paddingBottom: '2%' }}>
          <h4 className='Titulo' >Medios de comunicación</h4>
          
          <p style={{ color: 'white' }}>Número de telefono movil: +57 3157403766</p>

          <a href="mailto:almanzad404@gmail.com" rel="noreferrer" target="_blank">
            <img src={Imagenes[11]} alt="" width='25px' height='25px' style={{ marginLeft: '10px' }} />  Correo electronico</a>

          <a href="https://www.linkedin.com/in/daniel-alejandro-gonzalez-almanza-66141720a/?originalSubdomain=co" rel="noreferrer" target="_blank">
            <img src={Imagenes[12]} alt="" width='25px' height='25px' style={{ marginLeft: '10px' }} />  LinKedin</a>
        </div>
      </footer>
    </ >
  );
};

export default App;
