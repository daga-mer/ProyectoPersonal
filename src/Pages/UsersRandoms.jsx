import { Component } from "react";
import { Button, Modal, ModalBody, ModalHeader, Spinner } from "reactstrap";
import "../App.css";

class UsersRandoms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            modals: []
        }
    }
    state = {}

    async obtenerUsuarios() {
        try {
            const peticion = await fetch('https://randomuser.me/api?results=10')
            let respuesta = await peticion.json()
            respuesta['results'].map(item => item.active = false)
            this.setState({ data: respuesta })
        } catch (error) {
            console.error('Error al obtener los usuarios: ', error);
        }
    }

    async componentDidMount() {
        await this.obtenerUsuarios()
    }

    setStateModal(id) {
        let updatedResults = { results: [...this.state.data['results']] };
        updatedResults['results'][id].active = !updatedResults['results'][id].active;

        this.setState({ data: updatedResults });
    }

    pintarInformacion() { }

    listar() {
        return this.state.data['results'].map((item, key) => {
            return <div key={key}>
                <Button className="card_1"
                    color="transparent" onClick={() => this.setStateModal(key)}>
                    <img key={`${key}${item.id.value}`} src={item.picture.large} style={{ width: '12rem', borderRadius: '50%' }} alt="Imagen del usuario" />
                    <b>Nombre: </b>{item.name.first} {item.name.last}
                    <b>Correo electrónico: </b>{item.email}
                    <b>Genero: </b>{item.gender}
                </Button>
                <Modal isOpen={this.state.data['results'][key]['active']} size="lg"
                    toggle={() => this.setStateModal(key)}>
                    <ModalHeader toggle={() => this.setStateModal(key)}>
                        ({item['id']['name']} - {item['id']['value']}) {item['name']['title']} {item['name']['first']} {item['name']['last']}
                    </ModalHeader>
                    <ModalBody style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', justifyContent: 'flex-start' }}>
                        {Object.keys(item).map(key => {
                            if (key === 'picture') {
                                return <img key={`${key}${item[key]}`} src={item[key]['large']} alt="" />;
                            } else {
                                return this.pintarObjeto(item)
                            }
                        })}
                    </ModalBody>
                </Modal>
            </div>
        });
    }

    pintarObjeto(elemento, styles = 'nowrap') {
        return typeof elemento == 'object' ?
            Object.keys(elemento).forEach((key) => {
                if (elemento[key] != null && typeof elemento[key] == 'object') {
                    return <div className="objeto_1" key={`${key}_${elemento[key]}`} style={{ display: 'flex', width: '100%', flexWrap: styles }}>
                        {this.pintarObjeto(elemento[key], 'wrap')}
                    </div>
                } else if (elemento[key] != null) {
                    return <div className="objeto_2" key={`${key}_${elemento[key]}`} style={{ display: 'flex', width: '100%', flexWrap: 'nowrap', justifyContent: 'space-around' }}>
                        <b>{key}: </b>
                        <p>{elemento[key]}</p>
                    </div>
                }
            }) : <div className="objeto_3" key={`${elemento}`} style={{ display: 'flex', width: '100%' }}>{elemento}</div>
    }

    render() {
        return (<>
            <br />
            <h5>Generador de usuarios random</h5>
            <br />
            {this.state.data != null ?
                <div style={{ justifyContent: 'space-around', display: 'flex', margin: '10px', flexWrap: 'wrap' }}>
                    {this.listar()}
                </div>
                :
                <Spinner color="secondary" size="sm">
                    Cargando...
                </Spinner>}
        </>
        );
    }
}

export default UsersRandoms;