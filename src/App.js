import React, { Component } from 'react';
import NoteTaking from './component/noteTaking';
import './component/noteTaking.css'
class App extends Component{
  render(){
  return (
    <div className="note-taking-app">
      <NoteTaking/>
    </div>
  );
  }
}

export default App;
