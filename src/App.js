import React, { Component } from 'react';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

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
          <Link to="/topics/html">HTML</Link>
        </li>
        <li>
          <Link to="/topics/css">CSS</Link>
        </li>
        <li>
          <Link to="/topics/js">JavaScript</Link>
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
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
            <li>
              <Link to="/topics">TOPICS</Link>
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
