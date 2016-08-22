import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import config from '../config.js'

class App extends Component {
  uploadImage() {
    const r = new XMLHttpRequest()
    const d = new FormData()
    const e = document.getElementsByClassName('input-image')[0].files[0]

    d.append('image', e)

    r.open('POST', 'https://api.imgur.com/3/image/')
    r.setRequestHeader('Authorization', `Client-ID ${config.client}`)
    r.onreadystatechange = function () {
      if(r.status === 200 && r.readyState === 4) {
        let res = JSON.parse(r.responseText)
        console.log(`La imagen fue subida a => https://i.imgur.com/${res.data.id}.png`)
      }
    }
    r.send(d)
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Elige una imagen para subir a Imgur</h2>
        </div>
        <form>
          <input type="file" className="input-image" onChange={this.uploadImage}/>
        </form>
      </div>
    );
  }
}

export default App;
