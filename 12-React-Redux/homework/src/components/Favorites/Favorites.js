import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { remove } from "../../actions";
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.favoriteMovie?.map(m =>
            <div>
              <Link to={`/movie/${m.id}`}>
                Titulo: {m.title}
              </Link>
              <button onClick={() => { this.props.remove(m.id) }}>X</button>
            </div>
          )}
        </ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    remove: (id) => dispatch(remove(id))
  }
}

function mapStateToProps(state) {
  return {
    favoriteMovie: state.moviesFavourites,
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
//export default (ConnectedList);
