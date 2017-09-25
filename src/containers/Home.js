import React from 'react';
import { Link } from 'react-router';

import { LoremGenerator } from '../components/LoremGenerator';

// Home page component
const HomePage = () => (
  <div className="home-page jumbotron center">
    <h1 className="lead">Lorem Template</h1>
    <h4 className="subtitle">made with react</h4>
    <LoremGenerator />
  </div>
);

export default HomePage;
