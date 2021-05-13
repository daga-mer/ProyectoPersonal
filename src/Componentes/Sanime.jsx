import { Component } from "react";
import '../anime.css';
import '../anime';

class Sanime extends Component {
    render() {
        return (
            <div style={{ marginBottom: '6%' }}>
                <form id="search_form">
                    <div className="input-field">
                        <label htmlFor="search">
                            <h2>Ingrese el nombre del anime</h2>
                            <h4>La API utilizada en este buscador es Jikan API, link de la página: <a href='https://jikan.moe/' rel="noreferrer" target="_blank">Click aqui</a></h4>
                        </label><br />
                        <input placeholder="Ingrese el nombre del anime" name="search" id="search" type="text" className="validate" />
                        <button type="submit" className="btn btn-primary">
                            Buscar
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </button>
                    </div>
                </form>

                <div id="search-results" className="container" />
            </div>
        )
    }
}

export default Sanime;