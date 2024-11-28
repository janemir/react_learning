import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';

function App() {
  let [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Javascript 2', body: 'Description' },
    { id: 3, title: 'Javascript 3', body: 'Description' },
  ])

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Список постов</h1>
      {posts.map((post) =>
        <PostItem post={post} key={post.id} />
      )}
    </div>
  );
}

export default App;
