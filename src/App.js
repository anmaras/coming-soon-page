import heroImgMobile from './assets/images/hero-mobile.jpg';
import heroImgDesktop from './assets/images/hero-desktop.jpg';
import logo from './assets/images/logo.svg';
import { Email } from './components/forms';
import './App.css';

import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="logo-wrapper">
          <img src={logo} alt="company logo"></img>
        </section>
        <picture>
          <source media="(min-width:1440px)" srcSet={heroImgDesktop} />
          <img src={heroImgMobile} alt="woman photograph" />
        </picture>
        <section className="statement-wrapper">
          <div>
            We're<span> coming soon</span>
          </div>
          <div>
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals
          </div>
        </section>
        <Email />
      </div>
    );
  }
}

export default App;
