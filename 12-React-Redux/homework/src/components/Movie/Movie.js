import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

// Funcion que se ejecuta luego de renderizado por primera vez el componente
componentDidMount() {
const movieId = this.props.match.params.id;
this.props.getMovieDetail(movieId);

}

    render() {
        return (
            <div className="movie-detail">
                <h1>Detalle de la pelicula</h1>
                <h2>Titulo: {this.props.movieDetail.Title}</h2>
                <img src= {this.props.movieDetail.Poster} alt='Img not found' />
                <h4>{`Año: ${this.props.movieDetail.Year}`}</h4>
                <h4>{`Duracion: ${this.props.movieDetail.Runtime}`}</h4>
                <h4>{`Elenco: ${this.props.movieDetail.Actors}`}</h4>
                <h4>{`Director: ${this.props.movieDetail.Director}`}</h4>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getMovieDetail: id => dispatch(getMovieDetail(id)),
    }
}

function mapStateToProps(state) {
    return {
        movieDetail: state.movieDetail,
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Movie);

//export default (Movie);