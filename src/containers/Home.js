import React from 'react';
import { Link } from 'react-router';

import { LoremGenerator } from '../components/LoremGenerator';

// Home page component
const HomePage = () => (
  <div className="home-page">
    <LoremGenerator />
  </div>
);

export default HomePage;
