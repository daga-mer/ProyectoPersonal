import { Component } from "react"
import { CardGroup, Jumbotron } from 'reactstrap';
import CardS from "../Components/Cards";
import Imagenes from "../Components/Imgs";
import 'animate.css';
import '../App.css';


class Index extends Component {
    state = {}
    render() {

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
                meses: 10,
                dias: 30
            },
            {
                empresa: 'Soluciones 360',
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
                <Jumbotron id='Bienvenida'>
                    <img id='pc' style={styles.ImgP} src={Imagenes[0]} width='25%' alt="presentacion" />
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
                            <img src={Imagenes[1]} alt="" width='25px' height='25px' style={{ backgroundColor: "white", borderRadius: "100px" }} /> GitHub
                        </a>.
                    </p>
                </Jumbotron>
                <img id='cel' style={styles.ImgP} src={Imagenes[0]} width='25%' alt="presentacion" />

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
                            Img={Imagenes[2]}
                        />
                        <CardS
                            Img={Imagenes[3]}
                        />
                        <CardS
                            Img={Imagenes[4]}
                        />
                    </CardGroup>

                    <CardGroup >
                        <CardS
                            Img={Imagenes[5]}
                        />
                        <CardS
                            Img={Imagenes[6]}
                        />
                    </CardGroup>

                    <h2 style={styles.estilos}>Herramientas</h2>

                    <CardGroup >
                        <CardS
                            Img={Imagenes[7]}
                        />
                        <CardS
                            Img={Imagenes[8]}
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

                    <img src={Imagenes[9]} style={styles.ImgR} alt='relax' width='22%' />
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

                <div style={{ height: '150px' }} >
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                        <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#262626' }}>
                        </path>
                    </svg>
                </div>
            </>
        );
    }
}

export default Index;