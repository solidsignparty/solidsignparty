import Head from '../components/Head.jsx';
import Logo from '../components/Logo.jsx';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Home({ photos }) {
  return (
    <>
      <Head />
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="space-around"
        width="100hw"
        height="100vh"
      >
        <Stack
          direction="column"
          justifyContent="space-around"
          maxWidth={400}
        >
          <Logo />
          <Typography variant="h6" color="white">SOLID SIGN #3 </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            width="100%"
          >
            <Typography color="white" textAlign="right">28 апреля</Typography>
            <Typography color="white" textAlign="left">OPERA</Typography>
          </Stack>
          <hr width="100%" /> 
          <Stack direction="row" justifyContent="space-between" width="100%">
            <Stack>
              <Typography
                textAlign="left"
                color="white"
    variant="h5"
              >
                JULIA
                <Typography
                  textAlign="right"
                  color="white"
                  fontSize={10}
                >
                  (Monasterio Moscow)
                </Typography>
              </Typography>
              <Typography color="white" fontSize="1em">
                Electrostatic
              </Typography>
              <Typography color="white" fontSize="1em">
                Andy Shibo
              </Typography>
              <Typography color="white" fontSize="1em">
                Akinov
              </Typography>
              <Typography color="white" fontSize="1em">
                SKind
              </Typography>
            </Stack>
            <Stack>
              <Typography
                textAlign="right"
                color="white"
    variant="h5"
              >
                G Depot
                <Typography
                  textAlign="right"
                  color="white"
                  fontSize={10}
                >
                  (Subspace Spb)
                </Typography>
              </Typography>
                <Typography color="white" fontSize="1em" textAlign="right">
                  Merra
                </Typography>
                <Typography color="white" fontSize="1em" textAlign="right">
                  Afanasiev
                </Typography>
                <Typography color="white" fontSize="1em" textAlign="right">
                  Vasques
                </Typography>
            </Stack>
          </Stack>
          <Stack pt={5} width="100%">
            <Button
              variant="outlined"
              href="https://nabchelny.qtickets.events/67013-solid-sign-3&utm_source=site"
            >
              Купить билет
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}
