# FE2

To start, clone this repo and run:
1. `npm install` (install all needed dependencies)
2. `npm start` (start our local development server)

> `http://0.0.0.0:3000` is the default path to our served site

##### Get movies
```javascript
axios
  .get(endpoints.mostPopularMovies())
  .then((res) => this.setMovieList(res.data.results))
  .catch((error) => console.log(error));
```

##### Movie response data
```javascript
const response = {
  backdrop_path,
  original_title,
  overview,
  release_date,
  vote_average,
  vote_count,
}
```
