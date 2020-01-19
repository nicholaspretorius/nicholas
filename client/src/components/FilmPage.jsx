import React, { Component } from "react";
import axios from "axios";

class FilmPage extends Component {
  state = {
    film: {},
    author: {},
    isLoaded: false
  };

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_WP_API}/wp-json/wp/v2/films/${this.props.match.params.id}`)
      .then(res1 => {
        axios
          .get(`${process.env.REACT_APP_WP_API}/wp-json/wp/v2/users/${res1.data.author}`)
          .then(res2 => {
            this.setState({ film: res1.data, author: res2.data, isLoaded: true });
          });
      });
  }

  render() {
    const { author, film, isLoaded } = this.state;
    return (
      <div>
        {isLoaded && (
          <div>
            <h3>{film.title.rendered}</h3>
            <p>Author: {author.name}</p>
            <div>Watch it on: {film.acf.network}</div>
            <p dangerouslySetInnerHTML={{ __html: film.content.rendered }}></p>
          </div>
        )}
        {!isLoaded && <div>Loading...</div>}
      </div>
    );
  }
}

export default FilmPage;
