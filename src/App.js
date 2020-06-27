import React from 'react';
import axios from "axios";
import Movie from "./Movie";
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
      (<div className ="loader">
        <span className="loader__text">정호의 영화 리스트 로딩중....</span>
      </div>)
      : 
      <div className = "movies">
        {movies.map( movie => (
          <Movie key={movie.id}
          id={movie.id} 
          year={movie.year} 
          title={movie.title} 
          summary={movie.summary} 
          poster={movie.medium_cover_image}
          genres= {movie.genres} />
      ))}
      </div>

    }
    </div>;
  }

}

export default App;
