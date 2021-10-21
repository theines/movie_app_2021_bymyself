import PropTypes from "prop-types";
import React from "react";
import axios from "axios";
import Movie from "./Movie";


class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {
      data:
      { data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });
  }
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading ? "Loading..." : movies.map(movie => {
          return (
            <Movie 
              key={movie.id}
              id={movie.id} 
              year={movie.year} 
              title={movie.title} 
              summary={movie.summary} 
              poster={movie.medium_cover_image} 
            />
          );
        })}
      </div>
    );
  }
}

/*
const options = {
  method: 'GET',
  url: 'https://yh-finance.p.rapidapi.com/stock/v2/get-summary',
  params: {symbol: 'AMRN', region: 'US'},
  headers: {
    'x-rapidapi-host': 'yh-finance.p.rapidapi.com',
    'x-rapidapi-key': '04f36f0fa1msh968f496b4b8068dp162ad2jsn02864c1da27a'
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
*/

export default App;
