/* eslint-disable */
import { React, Component } from 'react';

const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';
const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';


class MovieDetails extends Component {
  state = {
    movie: {},
  }

  async componentDidMount() {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=7fc4be7e5a0582ab7a8a43e3e9b966fd&language=en-US`);
      const movie = await res.json();
      console.log(movie);
      this.setState({
        movie: movie,
      });
    } catch(e) {
      console.log(e);
    }
  }

  render() {
    const {movie} = this.state;
    return (
      <div>
        <img src={`${BACKDROP_PATH}${movie.backdrop_path}`} alt={movie.title} />
        <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
        <h1>{movie.title}</h1>
        <h3>{movie.release_date}</h3>
        <p>{movie.overview}</p>
      </div>
    );
  }
}

export default MovieDetails;

