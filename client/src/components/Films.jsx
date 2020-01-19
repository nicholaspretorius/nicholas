import React, { Component } from "react";
import axios from "axios";

import Film from "./Film";

class Films extends Component {
  state = {
    films: [],
    isLoaded: false
  };

  async componentDidMount() {
    try {
      const res = await axios.get(`${process.env.REACT_APP_WP_API}/wp-json/wp/v2/films`);
      console.log(res, this.state.isLoaded);
      this.setState({ isLoaded: true, films: res.data });
    } catch (ex) {
      console.log(ex);
    }
  }

  render() {
    const { films, isLoaded } = this.state;

    console.log("isLoaded? ", isLoaded);

    return (
      <div>
        <h3>Films</h3>
        {!isLoaded && <p>Loading...</p>}

        {isLoaded && (
          <ul>
            {films.map(film => (
              <li key={film.id}>
                <Film film={film} />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Films;
