import React, { useState } from "react";

function App() {
  let [likes, setLikes] = useState(5)
  
  function increment(){
    setLikes(likes += 1)
  }

  function decrement(){
    setLikes(likes -= 1)
  }

  return (
    <div className="App">
      <h1>{likes}</h1>
      <button onClick={increment}>Increment</button> 
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
