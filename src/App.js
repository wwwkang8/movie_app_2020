import React from 'react';
import axios from "axios";
import Movie from "./Movie";
import "./Movie.css";
import "./App.css";

class App extends React.Component{

  state = {
    isLoading: true,
    movie: []
  };

  getMovies = async() => {

    const {
      data: {
        data : {movies}
      } 
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    console.log(movies);
    this.setState({movies, isLoading: false});
    
  }

  componentDidMount(){

    this.getMovies();

  }

  render(){
    const { isLoading, movies } = this.state;
    return <div>{ isLoading 
      ? 
      (<div class ="loader">
        <span class="loader__text">Loading...</span>
      </div>)
      : 
      <div class = "movies">
        {movies.map( movie => (
          <Movie 
          id={movie.id} 
          year={movie.year} 
          title={movie.title} 
          summary={movie.summary} 
          poster={movie.medium_cover_image} />
      ))}
      </div>

    }
    </div>;
  }

}

export default App;
