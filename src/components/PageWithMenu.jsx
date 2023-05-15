import React from 'react';
import Container from '@mui/material/Container';
import Head from './Head';
import MenuBar from './MenuBar';

export default ({ children, maxWidth }) => {
  return (
    <>
      <Head />
      <MenuBar />
      <Container maxWidth={ maxWidth || "sm" } sx={{ pt: 10 }}>
        {children}
      </Container>
    </>
  );
}
