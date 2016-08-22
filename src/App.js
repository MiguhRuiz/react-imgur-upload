import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  uploadImage() {
    console.log("Se colocó una imágen nueva")
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Elige una imagen para subir a Imgur</h2>
        </div>
        <form>
          <input type="file" class="input-image" onChange={this.uploadImage}/>
        </form>
      </div>
    );
  }
}

export default App;
