
import { useState } from 'react';
import Reloj from "./Reloj";
import { Collapse, NavbarToggler, Navbar, NavbarText, NavbarBrand, Nav, NavItem } from 'reactstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Api from '../Pages/Api';
import Index from '../Pages/Index';
import 'animate.css';
import '../App.css';


export default function NavBar () {
 
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Router>
            <Navbar color="black" light expand="sm" id='nav'>
                <NavbarBrand href="#Bienvenida">
                    Bienvenida
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <Link to="/">Inicio</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/Api">Consumo de Api</Link>
                        </NavItem>
                        <NavItem>
                            <NavbarText><Reloj /></NavbarText>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
                
            <Switch>
                <Route exact path="/">
                    <Index />
                </Route>
                <Route path="/Api">
                    <Api />
                </Route>
            </Switch>
        </Router>
    )
}
