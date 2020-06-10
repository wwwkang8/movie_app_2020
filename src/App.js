import React from 'react';

function Food({fav}){
  console.log({fav});
  return <h1> I like {fav}</h1>;
}

function App() {
  return (
    <div className="App" >
      Hello!!
      <Food fav="kimchi"/>
      <Food fav="ramen"/>
      <Food fav="samgyupsal"/>
      <Food fav="쭈꾸미"/>
    </div>
  );
}

export default App;
