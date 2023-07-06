import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import { SvgIcon } from '@mui/material';

import Logo from './Logo';
import vk_logo from '../public/images/vk_logo.svg';

const navItems = [
  { label: "СОБЫТИЯ", href: "/" },
  { label: "АРТИСТЫ", href: "/artists" },
];

export default () => {
  const [showDrawer, setShowDrawer] = React.useState(false);
  const toggleDrawer = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setShowDrawer(!showDrawer);
  };

  return (
    <>
    <AppBar component="nav" sx={{ borderBottom: 1, borderColor: '#333' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <a href="/">
            <Logo height="24"/>
          </a>
          <Typography
            className="solid-sign"
            noWrap
            component="a"
            href="/"
            color="white"
            sx={{ pl: 1, flexGrow: 1, textDecoration: "none" }}
          >
            SOLID SIGN
          </Typography>
          <IconButton
            sx={{ p: '7px' }}
            href="https://vk.com/solidsign"
          >
            <img height={26} width={26} src={vk_logo.src} />
          </IconButton>
          <IconButton
            href="https://instagram.com/solidsignru"
          >
            <InstagramIcon sx={{ color: '#fff' }}/>
          </IconButton>
          <IconButton
            href="https://t.me/solidsignru"
          >
            <TelegramIcon sx={{ color: '#fff' }}/>
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button href={item.href} key={item.label} sx={{ color: '#fff' }}>
                {item.label}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
            <IconButton onClick={toggleDrawer}>
              <MenuIcon sx={{color:"#fff"}} />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <Drawer
      anchor="right"
      open={showDrawer}
      onClose={toggleDrawer}
    >
      <Box sx={{ width: 200 }}>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton component="a" href={item.href}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
    </>
  );
};
