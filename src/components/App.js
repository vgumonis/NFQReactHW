import React from 'react';
import Card from './Card';
import axios from 'axios';
import { endpoints, getImageUrl } from '../../config';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      movieList: [],
    };
    
    this.getMovies();
  }
  
  getMovies = () => {
    axios
      .get(endpoints.mostPopularMovies())
      .then((res) => this.setMovieList(res.data.results))
      .catch((error) => console.log(error));
  };
  
  setMovieList = (list) => {
    this.setState({
      movieList: list,
    });
  };
  
  render() {
    const { movieList } = this.state;
    
    return (
      <div>
        {movieList.map((listItem) => (
          <Card
            backgroundImage={getImageUrl(listItem.backdrop_path)}
            title={listItem.original_title}
            releaseDate={listItem.release_date}
            score={listItem.vote_average}
            votes={listItem.vote_count}
            description={listItem.overview}
          />
        ))}
      </div>
    );
  }
}

export default App;
