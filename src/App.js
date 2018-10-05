import React, { Component } from 'react';
import GistsList from './components/GistsList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GitHubGist</h1>
        </header>
        
        <div className={"container"}>
          <GistsList></GistsList>
        </div>
      </div>
    );
  }
}

export default App;
