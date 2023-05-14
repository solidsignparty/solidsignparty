import React from 'react';
import MenuBar from './MenuBar';
import Container from '@mui/material/Container';

export default ({ children, maxWidth }) => {
  return (
    <>
      <MenuBar />
      <Container maxWidth={ maxWidth || "sm" } sx={{ pt: 10 }}>
        {children}
      </Container>
    </>
  );
}
