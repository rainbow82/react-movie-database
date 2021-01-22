import {React, Component} from 'react';
import PropTypes from "prop-types";

class Movie extends Component {
  // every prop should have a proptype
  // have an isRequired or a default prop
  static propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  }

  // static defaultProps = {
  //   desc: 'Movie description not available'
  // }

  render(){
    return(
      <div>
          <h3>{this.props.movie.title}</h3>
      </div>
    )
  }
}

export default Movie;