import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class page1 extends Component {
  render() {
    return <div>
        <h1>Page 1</h1>
        <p>
          <p>You should be able to link back to home, right?</p>
        </p>
         <Link to='/'>Home</Link>
      </div>
    };
  }


export default page1;
