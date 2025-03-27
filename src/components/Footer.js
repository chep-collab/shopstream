import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ p: 2, bgcolor: '#2E7D32', color: 'white', textAlign: 'center' }}>
      <Typography variant="body2">
        © 2025 Online Shopping. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
