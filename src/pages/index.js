import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PageWithMenu from '../components/PageWithMenu';

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
            src="https://sun9-66.userapi.com/impg/LICzhH4xxdaOc3NzpejI7VdwwvoddqdDirIGbQ/wzKGrx0xXR0.jpg?size=1182x1182&quality=95&sign=4daf03f001979861fb8c1964de2b9b02&type=album"
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
            src="https://sun9-70.userapi.com/impg/42mWXe3qLNLlEnGevglp-j6gcO7AjETLGH0vpQ/ryOFl84bn2c.jpg?size=1180x1180&quality=95&sign=76ded8cb3ba85b7529aecdc7c663e595&type=album"
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
            src="https://sun9-73.userapi.com/impg/XCsc79EGLYsovqWNvueDVZZMgcHech29KJ4O3g/eEZFPbUMtqY.jpg?size=1280x1235&quality=95&sign=3cb40148ae823033626c2a80ff9ebfa7&type=album"
          />
        </Box>
        <Box />
      </Stack>
    </PageWithMenu>
  );
}
