import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#333', // Background color
        color: '#fff', // Text color
        py: 2, // Padding on the top and bottom
        textAlign: 'center', // Center-align text
      }}
    >
      <Typography variant="body1">
        &copy; {new Date().getFullYear()} Student Log App
      </Typography>
    </Box>
  );
};

export default Footer;
