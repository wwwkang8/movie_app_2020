import React from 'react';

function Food({myfood}){
  console.log({myfood});
  return <h1> I like {myfood}</h1>;
}

function App() {
  return (
    <div className="App" >
      Hello!!
      <Food myfood="kimchi"/>
      <Food myfood="ramen"/>
      <Food myfood="samgyupsal"/>
      <Food myfood="쭈꾸미"/>
    </div>
  );
}

export default App;
