import React, { Component } from 'react';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
const activeStyles = {
    color:'orange',
    background:'#333'
}

const Home = () => {
  return (
    <div>
      <h1>Welcome Home</h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>About US</h1>
    </div>
  );
};
const Contact = () => {
  return (
    <div>
      <h1>Please contact me:</h1>
    </div>
  );
};
const PageOne = () => {
  return <h1>Lets learn some HTML</h1>;
};
const PageTwo = () => {
  return <h1>Lets learn some CSS</h1>;
};
const PageThree = () => {
  return <h1>Lets learn some JavaScript</h1>;
};
const Topics = () => {
  return (
    <div>
      <h2>Topics</h2>
      <hr />
      <ul>
        <li>
          <NavLink to="/topics/html">HTML</NavLink>
        </li>
        <li>
          <NavLink to="/topics/css">CSS</NavLink>
        </li>
        <li>
          <NavLink to="/topics/js">JavaScript</NavLink>
        </li>
      </ul>
      <Route path={`/topics/html`} component={PageOne} />
      <Route path={`/topics/css`} component={PageTwo} />
      <Route path={`/topics/js`} component={PageThree} />
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <NavLink exact to="/" activeStyle={activeStyles}>HOME</NavLink>
            </li>
            <li>
              <NavLink to="/about">ABOUT</NavLink>
            </li>
            <li>
              <NavLink to="/contact">CONTACT</NavLink>
            </li>
            <li>
              <NavLink to="/topics">TOPICS</NavLink>
            </li>
          </ul>

          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/topics" component={Topics} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
