import React from 'react';
import { AppBar, Toolbar, Typography, CssBaseline, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'maroon' }}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
          <span style={{ color: 'white' }}>Student Log App</span>
        </Typography>
        <Button
          component={Link}
          to="/contact"
          variant="outlined"
          color="inherit"
        >
          Contact Us
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
