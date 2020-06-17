import React from 'react';
import PropTypes from "prop-types";

function Food({name,image, rating}){
  return (
  <div> 
    <h2>I like {name} </h2>
    <h4>{rating}/5.0 </h4>
    <img src={image} alt = "food"/>
    
    </div>
  );
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number
};


function renderFood(dish){
  return (<Food key = {dish.id} name = {dish.name} image = {dish.image} rating={dish.rating}/>);

}

class App extends React.Component{

  state = {
    isLoading: true,
    movie: []
  };

  componentDidMount(){
    setTimeout(() => {
      this.setState({isLoading:false});
    }, 6000);
  }

  render(){
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading" : "We are ready"}</div>;
  }

}

export default App;
