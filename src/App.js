import {React, Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie'

const movies = [
  {
    id: 1,
    title: 'Star Wars',
    desc: 'Space movie'
  },
  {
    id: 2,
    title: 'Willow'
  },
  {
    id: 3,
    title: 'Moana'
  },
  {
    id: 4,
    title: 'Frozen'
  },
  {
    id: 5,
    title: 'Sing'
  },
]
class App extends Component{
  state = {
    movies: []
  }

  async componentDidMount(){
    try {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=7fc4be7e5a0582ab7a8a43e3e9b966fd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movies = await res.json();
      console.log(movies);
      this.setState({
        movies: movies.results
      });
    } catch(e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {this.state.movies.map((movie)=>
          <Movie key={movie.id} movie={movie} />
        )}

      </div>
    );
  }
}

export default App;
