import Head from '../components/Head.jsx';
import Logo from '../components/Logo.jsx';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Home({ photos }) {
  return (
    <>
      <Head />
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        width="100hw"
        height="100vh"
      >
        <Logo />
        <Typography
          variant="h2"
          color="white"
        >
          SOLID SIGN #3
        </Typography>
        <Typography
          variant="h3"
          color="white"
        >
          Подробности скоро ...
        </Typography>
      </Stack>
    </>
  )
}
