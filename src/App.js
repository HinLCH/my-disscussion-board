import { useState } from 'react';
import './App.scss';
import Post  from './Components/Posts';


function App() {
  const [posts, setPosts] = useState([
    {
      username:"ken",
      caption:"first caption",
      imageUrl:"https://images.unsplash.com/photo-1498598457418-36ef20772bb9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      username:"ken2",
      caption:"second caption",
      imageUrl:"https://cdn.icon-icons.com/icons2/2699/PNG/512/firebase_logo_icon_168209.png"
    },
    {
      username:"ken3",
      caption:"sthird caption",
      imageUrl:"https://cdn.icon-icons.com/icons2/2699/PNG/512/firebase_logo_icon_168209.png"
    }
  ]);

  return (
    <div className="App">
      <h1> this is a discussion board</h1>
      {/* Header */}
       <div className="app-header">
         <img 
          className="app-header-image"
          src="https://img.icons8.com/ios-glyphs/30/000000/ask-question.png"
          alt=""/>
         <h1 className="app-header-text">this is a header</h1>
       </div>
      {
        posts.map(post => 
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
          )
      }
      {/* <Post username="ken" caption="first caption" imageUrl="https://images.unsplash.com/photo-1498598457418-36ef20772bb9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"/>
      <Post username="ken2" caption="second caption" imageUrl="https://cdn.icon-icons.com/icons2/2699/PNG/512/firebase_logo_icon_168209.png"/>
      <Post username="ken3" caption="third caption"/> */}
   

    </div>
  );
}

export default App;
