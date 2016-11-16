import React from 'react';
import {Link} from 'react-router';

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples Page</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li><Link to="/?location=Washington, DC">Washington, DC</Link></li>
        <li><Link to="/?location=New York">New York</Link></li>
        <li><Link to="/?location=San Francisco">San Francisco</Link></li>
        <li><Link to="/?location=Pittsburgh">Pittsburgh, PA</Link></li>
      </ol>
    </div>
  );
}
module.exports = Examples;
