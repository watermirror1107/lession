import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './welcome'
import NameCard from './NameCard'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <Welcome/>
            <NameCard name={'giao'} telphone={136} sex={'man'} age={18}/>
        </div>
    );
}

export default App;
