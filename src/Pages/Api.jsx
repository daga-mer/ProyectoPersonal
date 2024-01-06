import { Component } from "react";
import '../App.css';
import { Jumbotron } from "reactstrap";

import React from 'react';
import {
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import UsersRandoms from "./UsersRandoms";
import { withRouter } from 'react-router-dom';
import PaginaComentarios from "./PaginaComentarios";


class Api extends Component {
    state = {
        //dropdownOpen: false
        api1: false,
        api2: false,
        rutaActual: this.props.location.pathname
    }
    //toggle = () => this.setState({ dropdownOpen: !this.state.dropdownOpen });


    alternarUbicacion(nuevaRuta) {
        switch (nuevaRuta) {
            case '/Api/usuarios':
                this.setState({ api1: true });
                this.setState({ api2: false });

                break;

            case '/Api/nestjs':
                this.setState({ api2: true });
                this.setState({ api1: false });

                break;

            default:
                break;
        }
    }

    componentDidMount() {
        this.alternarUbicacion(this.state.rutaActual)
    }

    render() {
        return (
            <>
                <Jumbotron id='Bienvenida'>
                    <Router>
                        <Nav tabs>
                            <NavItem>
                                <NavLink tag={Link} active={this.state.api1} onClick={() => this.alternarUbicacion("/Api/usuarios")}
                                    to="/Api/usuarios">
                                    Lista de usuarios
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} active={this.state.api2} onClick={() => this.alternarUbicacion("/Api/nestjs")}
                                    to="/Api/comentarios">
                                    Mi Api
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Switch>
                            <Route exact path="/Api/usuarios">
                                <UsersRandoms />
                            </Route>
                            <Route exact path="/Api/comentarios">
                                <PaginaComentarios />
                            </Route>
                        </Switch>
                    </Router>
                </Jumbotron>
            </>
        );
    }
}

export default withRouter(Api);