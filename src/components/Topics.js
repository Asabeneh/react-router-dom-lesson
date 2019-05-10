import React from 'react'
import {Route, NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'

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

Topics.propTypes = {

}

export default Topics
