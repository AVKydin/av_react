import React, {useState} from "react";
import './App.css'
import Posts from "./components/Posts/Posts";
import FullPost from "./components/FullPost/FullPost";


function App() {

    const [fullPost, setFullPost] = useState(null)
    const details = (post) => {
        setFullPost({...post})
        console.log(post)
    }
    return (
        <div className={'flex'}>

            <div>
                <Posts details={details}/>
            </div>
            {
                fullPost && (<div className={'full-post'}>
                        {
                            <FullPost fullPost={fullPost}/>
                        }
                    </div>
                )
            }
        </div>

    );
}

export default App;
