import React from 'react';
import { Box, ThemeProvider, Typography, createTheme, responsiveFontSizes } from '@mui/material';

let theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'sans-serif'
    }
  }
});
theme = responsiveFontSizes(theme);

theme.typography.h1 = {
  fontSize: '10rem'
};

const error_404 = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            width: '80%',
            color: 'white',
            textAlign: 'center'
          }}>
          <Typography variant="h1" color="#00A6AE">
            404
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: '600' }}>
            Ops! Page not found
          </Typography>
          <Typography variant="h6">{`Sorry, the page you're looking for doesn't exist`}</Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default error_404;
