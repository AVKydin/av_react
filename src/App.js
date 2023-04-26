import {Posts} from "./components/Posts/Posts";

import './components/Posts/post.css'
import {Comments} from "./components/Comments/Comments";
import {useEffect, useReducer} from "react";

const reducer = (state, action)=>{
    switch (action.type){
        case 'AddCat':
            return {...state, countCat:state.countCat+1, Cats:state.Cats}
        case 'AddDog':
            return {...state, countDog:state.countDog+1}
    }
    return {...state}
}

function App() {
    const [state, dispatch] = useReducer(reducer, {countCat:0, countDog:0, Cats:[], Dogs:[]});

    console.log(state)
  return (
      <div>
              {state.countCat}
          <form action="">

              <span className={'cat'}>Add Cat</span>
              <input type="text" name={'Cat'}/>
              <button className={'btn'} onClick={(e)=>{dispatch({type:'AddCat'})} }>Save Cat</button>
              <span className={'dog'}>Add Dog</span>
              <input type="text" name={'Dog'}/>
              <button className={'btn'} onClick={()=>dispatch({type:'AddDog'})}>Save Dog</button>
          </form>
              {state.Cats.map(cat=><div>cat</div>)}
          <div className="App">
              <Posts/>
              <Comments/>
          </div>
      </div>
  );
}

export default App;
