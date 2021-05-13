import { Component } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Nav, NavItem } from "reactstrap"
import Logo from './IMGS/web-fundamentals.svg';
import Sanime from "./Componentes/Sanime";
import Login from "./Componentes/Login";
import './App.css';
import App from "./App";


class Navegador extends Component {
    render() {
        return (
            <Router>
                <Nav style={{ alignItems: 'center' }}>
                    <NavItem>
                        <Link to='/' id='logo'>
                            <img src={Logo} width='50px' alt='logo' />
                            <p>Página principal</p>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/API'>
                            Jikan API
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/InicioSesion'>
                            Iniciar sesión
                        </Link>
                    </NavItem>
                </Nav>
                <Switch>
                    <Route exact path='/' component={App} />
                    <Route exact path='/API' component={Sanime} />
                    <Route exact path='/InicioSesion' component={Login} />
                </Switch>
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
            </Router>
        )
    }
}

export default Navegador;