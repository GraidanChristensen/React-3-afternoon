import React, { Component } from 'react';
import './App.css';
import Navbar from "./Navbar";

class App extends Component{
  render(){
    return(
      <div className="body">
        <header className="header">
           <h2>Home</h2>
        </header>

        <main className="main">
          <div className="navBar">
            <Navbar/>
          </div>
        </main>
      </div>

    )
  }
}

export default App;
