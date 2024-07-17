import React, { Component } from 'react'
import './App.css'
import Login from './pages/login'
import Home from './pages/Home'
import Signup from './pages/signup'
import '../../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path ="/" element ={<Home/>} />
          <Route exact path ="/login" element ={<Login />} />
          <Route exact path ="/signup" element ={<Signup />} />
        </Routes>
      </Router>
     
    )
  }
}

export default App