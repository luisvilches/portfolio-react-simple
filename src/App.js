import React, { Component } from 'react';
import Nav from './Nav'

class App extends Component {
  render() {
    return (
      <div>
        <header id="header">
          <div className="intro">
            <div className="container">
              <div className="row">
                <div className="intro-text">
                  <h1>Hola, soy <span className="name">Luis Vilches</span></h1>
                  <p>Fullstck JS Developer & Android Developer</p>
                  <a href="#about" className="btn btn-default btn-lg page-scroll">Saber mas...</a> </div>
              </div>
            </div>
          </div>
        </header>
        <Nav />
      </div>
    );
  }
}

export default App;
