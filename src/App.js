import React, {useState} from "react";
import './App.css'
import Posts from "./components/Posts/Posts";
import FullPost from "./components/FullPost/FullPost";
import SpaceX from "./components/SpaceX/SpaceX";


function App() {

    const [fullPost, setFullPost] = useState(null)
    const details = (post) => {
        setFullPost({...post})
    }
    return (
        <div>
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
            <div className={'space'}>
                <SpaceX/>
            </div>
        </div>

    );
}

export default App;
