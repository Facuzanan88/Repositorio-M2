import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getMovies, addMovieFavorite } from "../../actions";
import './Buscador.css';



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  // Funcion que ejecuta los cambios y los guarda en el estado interno
  handleChange(event) {
    console.log(this.state.title)
    this.setState({ title: event.target.value });
  }
  // Funcion que envia los datos 
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title)
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
          {this.props.moviesLoaded && this.props.moviesLoaded.map(m =>
            <div>
              <Link to={`/movie/${m.imdbID}`}>
                Titulo: {m.Title}
              </Link>
              <button onClick={() => {this.props.addMovieFavorite({title: m.Title, id: m.imdbID})}}>FAV</button>
            </div>
          )}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    moviesLoaded: state.moviesLoaded,
  }
}

// Funcion que le va a permitir al componente ejecutar action creator
// Permite recibir al componente las action creator en forma de props para utilizarlas
function mapDispatchToProps(dispatch) {
  return {
    getMovies: title => dispatch(getMovies(title)),
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);

// export default Buscador;
