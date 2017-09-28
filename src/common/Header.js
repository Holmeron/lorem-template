import React from 'react';
import { Link } from 'react-router';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';


const Header = () => (

  <AppBar position="static">
    <Toolbar>
      <Typography type="title" color="inherit">
          <Link to="/" className="navbar-brand">Template</Link>
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
