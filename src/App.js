import './App.scss';
import Post  from './Components/Posts';


function App() {
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
      {/* Post */}
      <Post/>
      {/* Post */}

    </div>
  );
}

export default App;
