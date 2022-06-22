import React from 'react';
import { Link } from 'react-router-dom';

const style = {
  height: 400,
  backgroundColor: '#3f51b5',
  color: 'white',
  padding: 12,
};

const AboutPage = () => (
  <div style={style}>
    <h1>About Page</h1>
    <p>
      <em>a page being provided by App 1</em>
    </p>

    {/* <Link to="/">Home</Link> - <Link to="/about">About</Link> */}
  </div>
);

export default AboutPage;
