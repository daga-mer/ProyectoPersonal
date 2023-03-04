
import { useState } from 'react';
import Reloj from "./Reloj";
import { Collapse, NavbarToggler, Navbar, NavbarText, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


export default function NavBar () {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="black" light expand="sm" id='nav'>
            <NavbarBrand href="#Bienvenida">
                Bienvenida
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink href="#Tech">Tecnologías</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#Ptiempos">Pasatiempos</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#Contacto">Contacto</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavbarText><Reloj /></NavbarText>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}
