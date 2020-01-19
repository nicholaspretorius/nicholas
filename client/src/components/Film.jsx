import React from "react";
import { Link } from "react-router-dom";

class Film extends React.Component {
  render() {
    const { film } = this.props;
    return (
      <div>
        <h3>{film.title.rendered}</h3>
        <div>Watch it on: {film.acf.network}</div>
        <Link to={`/films/${film.id}`}>Find out more</Link>
      </div>
    );
  }
}

export default Film;
