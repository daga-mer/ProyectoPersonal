import { Component } from 'react';
import { Input } from 'reactstrap';



class Dado extends Component {

    state = { nombre: '', password: '' };

    establecerValor = (target) => {
        this.setState(() => {
            return { [target.name]: target.value };
        });
    };


    render() {

        return (
            <div>
                <div id="dado">
                    <div id="circulo0" className="click"></div>
                    <div id="circulo1" className="click"></div>
                    <div id="circulo2" className="click"></div>
                    <div id="circulo3" className="click"></div>
                    <div id="circulo4" className="click"></div>
                    <div id="circulo5" className="click"></div>
                    <div id="circulo6" className="click"></div>
                    <div id="circulo7" className="click"></div>
                    <div id="circulo8" className="click"></div>
                </div >
                <p>Selecciona el color que deseas que posea el dado:
                <input type="color" id="colorid" />
                </p>

                <Input onChange={event => this.establecerValor(event.target)} className="col" type="select" name="selectNum" id="selectNum">
                    <option defaultValue={0}>Seleccione un valor para el dado</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={7}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                </Input>

                <div style={{textAlign:'center', marginTop:'1%'}}>
                    <button className="btn btn-primary col-2" onClick={
                        () => {
                            var valor = document.getElementById("selectNum").value;
                            for (let index = 0; index < valor; index++) {
                                var cin = 'circulo' + index;
                                var Eid = document.getElementById(cin);
                                Eid.style.backgroundColor = document.getElementById("colorid").value;
                            }
                        }
                    }>
                        Imprimir numero
                </button>
                </div>
            </div>
        )
    }
}

export default Dado;