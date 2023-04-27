import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, reset} from "./redux";


const App = ()=> {

    const state = useSelector(state=>state);
    const dispatch = useDispatch();

    const onInc = () => {
        dispatch(increment())
    }

    const onDec = () => {
        dispatch(decrement())

    }

    const onRes = () => {
        dispatch(reset())

    }

    return (
    <div>
        <button onClick={onInc}>Increment</button>
        <button onClick={onDec}>Decrement</button>
        <button onClick={onRes}>Reset</button>
        <h1>{state}</h1>
    </div>
  );
}

export default App;
