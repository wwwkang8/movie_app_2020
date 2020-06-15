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

  constructor(props){
    super(props);
    console.log("constructor");
  }

  state = {
    count: 0
  };

  add = () => {
    console.log("add");
    this.setState({count: this.state.count + 1});
  };

  minus = () => {
    console.log("minus");
    this.setState({count: this.state.count-1});
  };

  componentDidMount(){
    console.log("component Did mount");
  }

  componentDidUpdate(){
    console.log("component Did update");
  }

  componentWillUnmount(){
    console.log("good bye world");
  }

  

  render(){
    console.log("I am rendering");
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
      
  }

}

export default App;
