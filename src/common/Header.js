import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => (
    <ul>
      <li>
          <Link to="/" className="navbar-brand">Template</Link>
      </li>
    </ul>
);

export default Header;
