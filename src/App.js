import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Login from './component/Login'
import Register from './component/Register';
import Covid from './component/Covid';
import State from './component/State';
import Stylesheet from './component/Stylesheet';
import Hero from './component/Hero';
import ToDo from './component/ToDo';
import styled from 'styled-components'
import './component/new.css'
import Form from './component/Form1';
import CHeader from './component/CHeader';
class App extends Component {
  render() {
    return (

      <Router>
        <div className="navbar">
          <ul>
          <li>
              <Link to='/todo' > To Do List </Link>
            </li>
            <li>
              <Link to='/r' > Register </Link>
            </li>
            <li>
              <Link to='/state' > State </Link>
            </li>
            <li>
              <Link to='/covid'>Covid</Link>
            </li>
            <li>
              <Link to='/hero'>Hero</Link>
            </li>
            <li>
              <Link to='/form'>Form</Link>
            </li>
            <li>
              <Link to='/ch'>CHeader</Link>
            </li>
            <li>

              <Link to='/style'>Stylesheet</Link>
            </li>
          </ul>
        </div>

        < Switch >
          <Route path='/todo' > <ToDo /></Route >
          <Route path='/login' > <Login /></Route >
          <Route path='/r' > <Register /></Route >
          <Route path='/hero' > <Hero /></Route >
          <Route path='/form' > <Form /></Route >
          <Route path='/ch' > <CHeader /></Route >

          <Route path='/state' > <State /></Route >
          <Route path='/covid'><Covid /></Route>
          <Route path='/style'><Stylesheet isValue={false} /></Route>


        </Switch>
      </Router>



    )
  }
}
export default App;
