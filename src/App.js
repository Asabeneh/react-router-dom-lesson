import React, { Component } from 'react';
import { BrowserRouter, Route, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact'
import User from './components/User';
import Topics from './components/Topics';
import Navbar from './components/Navbar';

class App extends Component {
    state = {
        isLoggedIn:false
    }
    handleLogin = () => {
        this.setState({
            isLoggedIn:!this.state.isLoggedIn
        })
    }
  render() {
      const {isLoggedIn} = this.state;
      const status = isLoggedIn ? 'LOGOUT' : 'LOGIN'
    return (
      <BrowserRouter>
        <div>
          <Navbar / >
          <Prompt when = {!isLoggedIn} message =  {(location) => {
              if(location.pathname.startsWith('/topics')){
                  return "You reached a perimuim sections"
              }
                    
          }} / >
        <button onClick = {this.handleLogin}>{status}</button>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/topics" component={(props) => {
              return isLoggedIn ? <Topics {...props} / > : <Redirect to="/" />
          }} />
          <Route path="/user/:username" component={(props) => {
              return isLoggedIn ? <User username =  {props.match.params.username}/> : <Redirect to="/"  />
            } }/>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
