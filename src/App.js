import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import config from '../config.js'

class App extends Component {
  uploadImage() {
    const r = new XMLHttpRequest()
    const d = new FormData()
    const e = document.getElementsByClassName('input-image')[0].files[0]
    var u

    d.append('image', e)

    r.open('POST', 'https://api.imgur.com/3/image/')
    r.setRequestHeader('Authorization', `Client-ID ${config.client}`)
    r.onreadystatechange = function () {
      if(r.status === 200 && r.readyState === 4) {
        let res = JSON.parse(r.responseText)
        u = `https://i.imgur.com/${res.data.id}.png`

        const d = document.createElement('div')
        d.className = 'image'
        document.getElementsByTagName('body')[0].appendChild(d)

        const i = document.createElement('img')
        i.className = 'image-src'
        i.src = u
        document.getElementsByClassName('image')[0].appendChild(i)

        const a = document.createElement('a')
        a.className= 'image-link'
        a.href = u
        document.getElementsByClassName('image')[0].appendChild(a)

        const p = document.createElement('p')
        p.className = 'image-url'
        p.innerHTML = u
        document.getElementsByClassName('image-link')[0].appendChild(p)
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
          <input type="file" className="input-image" onChange={this.uploadImage.bind(this)}/>
        </form>
      </div>
    );
  }
}

export default App;
