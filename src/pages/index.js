import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PageWithMenu from '../components/PageWithMenu';

import solidSign3 from '../public/images/solid-sign-3.jpg';
import solidSign2 from '../public/images/solid-sign-2.jpg';
import solidSign1 from '../public/images/solid-sign-1.jpg';

export default () => {
  return (
    <PageWithMenu>
      <Stack
        direction="column"
        justifyContent="space-around"
        spacing={5}
      >
        <Box>
          <Typography
            color="white"
          >
            28.05.2023
          </Typography>
          <Typography
            color="gray"
            sx={{ pb: 2 }}
          >
            Мероприятие состоялось
          </Typography>
          <img
            style={{
              maxWidth: "100%",
              objectPosition: "-1px -1px",
            }}
            src={solidSign3.src}
          />
        </Box>
        <Box>
          <Typography
            color="white"
          >
            16.09.2022
          </Typography>
          <Typography
            color="gray"
            sx={{ pb: 2 }}
          >
            Мероприятие состоялось
          </Typography>
          <img
            style={{
              maxWidth: "100%",
            }}
            src={solidSign2.src}
          />
        </Box>
        <Box>
          <Typography
            color="white"
          >
            11.02.2022
          </Typography>
          <Typography
            color="gray"
            sx={{ pb: 2 }}
          >
            Мероприятие состоялось
          </Typography>
          <img
            style={{
              maxWidth: "100%",
            }}
            src={solidSign1.src}
          />
        </Box>
        <Box />
      </Stack>
    </PageWithMenu>
  );
}
