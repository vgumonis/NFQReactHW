import React from 'react';
import Card from './Card';
import Genres from './Genres';
import axios from 'axios';
import { endpoints, getImageUrl } from '../../config';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      movieList: [],
      genres: [],
      likedMovies: [],
    };
    
    this.getMovies();
    this.getGenres();
  }
  
  getMovies = () => {
    axios
      .get(endpoints.mostPopularMovies())
      .then((res) => this.setMovieList(res.data.results))
      .catch((error) => console.log(error));
  };
  
 getGenres = () => {
        axios
            .get(endpoints.genres())
            .then((res) => this.setGenres(res.data.genres))
            .catch((error) => console.log(error));
    };

  setMovieList = (list) => {
    this.setState({
      movieList: list,
    });
  };
  
 setGenres = (list) => {
        this.setState({
            genres: list,
        });
    };

    getMoviesByGenre = (id) => {
        axios
            .get(endpoints.genreMovies(id))
            .then((res) => this.setMovieList(res.data.results))
            .catch((error) => console.log(error));
    };

   handleLike = (id) => {
        const likedMovies = this.state.likedMovies;

        const index = likedMovies.indexOf(id);
        likedMovies.includes(id) ? likedMovies.splice(index, 1) : likedMovies.push(id);

        this.setState({likedMovies})
    };
 

  render() {
    const { movieList, genres } = this.state;
    
    return (
      <div>

        {genres.map((listItem) => (
                    <Genres
                        genre={listItem.name}
                        click={this.getMoviesByGenre.bind(this, listItem.id)}
                    />
                ))}


        {movieList.map((listItem) => (
          <Card
            backgroundImage={getImageUrl(listItem.backdrop_path)}
            title={listItem.original_title}
            releaseDate={listItem.release_date}
            score={listItem.vote_average}
            votes={listItem.vote_count}
            description={listItem.overview}
            itemId={listItem.id}
            like={this.state.likedMovies.includes(listItem.id)}
            handleLike={this.handleLike}
          />
        ))}
      </div>
    );
  }
}

export default App;
