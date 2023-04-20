import {Link, Route, Routes} from "react-router-dom";
import {Home} from "./components/home/Home";
import {Todos} from "./components/todos/Todos";
import {Albums} from "./components/albums/Albums";
import {Comments} from "./components/comments/Comments";


function App() {
    return (
        <div>
            <div>
              <h2>menu</h2>
                <ul>
                    <li>
                        <Link to={'/'}>home</Link>
                    </li>
                    <li>
                        <Link to={'/todos'}>todos</Link>
                    </li>
                    <li>
                        <Link to={'/albums'}>albums</Link>
                    </li>
                    <li>
                        <Link to={'/comments'}>comments</Link>
                    </li>


                </ul>
            </div>
            <div>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/todos'} element={<Todos/>}/>
                    <Route path={'/albums'} element={<Albums/>}/>
                    <Route path={'/comments'} element={<Comments/>}/>

                </Routes>
            </div>
        </div>
    );
}

export default App;
