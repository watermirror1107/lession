import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './welcome'
import NameCard from './NameCard'
import LikeButton from "./LikeButton";
import TimeBox from "./Lifecycle";
import CommentBox from "./CommentBox";

function App() {
    return (
        <div className="App">
            {/*<header className="App-header">*/}
            {/*    <img src={logo} className="App-logo" alt="logo"/>*/}
            {/*    /!*<p>*!/*/}
            {/*    /!*    Edit <code>src/App.js</code> and save to reload.*!/*/}
            {/*    /!*</p>*!/*/}
            {/*    /!*<a*!/*/}
            {/*    /!*    className="App-link"*!/*/}
            {/*    /!*    href="https://reactjs.org"*!/*/}
            {/*    /!*    target="_blank"*!/*/}
            {/*    /!*    rel="noopener noreferrer"*!/*/}
            {/*    /!*>*!/*/}
            {/*    /!*    Learn React*!/*/}
            {/*    /!*</a>*!/*/}
            {/*</header>*/}
            {/*<Welcome/>*/}
            {/*<LikeButton/>*/}
            {/*<TimeBox/>*/}
            {/*<NameCard name={'giao'} telphone={136} sex={'man'} age={18}/>*/}
            <CommentBox/>
        </div>
    );
}

export default App;
