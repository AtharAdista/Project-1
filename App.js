import './App.css';
import Home from './pages/home';
import FAQ from './pages/FAQ';
import Testimonial from './pages/Testimonial';
import {BrowserRouter, Switch, Route, Link } from "react-router-dom";
import React from 'react';
import img2 from "./img/Ellipse 1.svg"

function App() {
  return (
    <div className="App">
      <div className='gambar'>
        <img src={img2}></img>
      </div>
    <BrowserRouter>
      <Switch>
        <Route  exact path='/' component= {Home}/>
        <Route path="/Testimonial" component={Testimonial}/>
        <Route path='/FAQ' component = {FAQ}/>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
