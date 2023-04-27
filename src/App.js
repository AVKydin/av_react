import {Posts} from "./components/Posts/Posts";

import './components/Posts/post.css'
import {Comments} from "./components/Comments/Comments";
import {CatDog} from "./components/CatDog/CatDog";




function App() {

  return (
      <div>
          <CatDog/>
          <div className="App">
              <Posts/>
              <Comments/>
          </div>
      </div>
  );
}

export default App;
