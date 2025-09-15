import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Container, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Spline from '@splinetool/react-spline';

export default function HomePage() {
  return (
    // Outermost Box for the full-screen dark background and content
    <Box
      sx={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        backgroundColor: '#000', // Black background to match the image
        overflow: 'hidden', // Prevents scrollbars from appearing
        color: '#fff', // Default text color for the page
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      {/* Spline Component as the background layer */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1, // Place it behind the content
        }}
      >
        <Spline scene="https://prod.spline.design/y5xkIbCyklpIGvAz/scene.splinecode" />
      </Box>

      {/* Main Content (Text and Button) on top of the Spline scene */}
      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 2 }}>
        <Button
          component={RouterLink}
          to="/LoginPage"
          variant="contained"
          size="large" 
          endIcon={<ArrowForwardIcon />}
          sx={{
            px: 4, // Adjust padding
            py: 1.5,
            borderRadius: '50px', // Creates the pill shape (curved edges)
            fontWeight: 'bold',
            fontSize: '1rem',
            top:175,
            right:395,
            backgroundColor: '#fff', // White button background
            color: '#000', // Black text color
            '&:hover': {
              backgroundColor: '#eee', // Slightly darker white on hover
              color: '#000',
            },
          }}
        >
          Join Now
        </Button>
      </Container>
    </Box>
  );
}