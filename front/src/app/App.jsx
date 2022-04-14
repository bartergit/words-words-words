import {useEffect, useState} from "react";
import Post from '../post/Post'
import "./App.css";

function App() {
    function next_post() {
    }

    useEffect(() => {
        next_post();
    }, []);
    return <>
        <Post text={text} img_url={img_url} author={author} tags={tags} next_post={next_post}/>
        <Post/>
        <Post/>
    </>
}

export default App;
