import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const toDate = (d) => {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
};

const compareDate = (d1, d2) => {
  return toDate(d1) > toDate(d2);
};

const formatDate = (d) => {
  return `${d.getDate().toString().padStart(2, "0")}.${(d.getMonth() + 1).toString().padStart(2, "0")}.${d.getFullYear()}`;
};

export default ({ date, img, href, children, ...props }) => {
  const upcoming = !compareDate(new Date(), date);
  return (
    <Box>
      <Typography color="white">
        {formatDate(date)}
      </Typography>
      <Typography
        color="gray"
      >
      {upcoming ?
        'Следующее мероприятие' :
        'Мероприятие состоялось'
      }
      </Typography>
      <Stack alignItems="center" sx={{ pt: 2 }}>
        <img
          style={{ maxWidth: "100%", ...props }}
          src={img.src}
        />
        {children}
      </Stack>
      {upcoming && href && (
        <Stack
          orient="row"
          alignItems="center"
          sx={{ pt: 2 }}
        >
          <Button
            variant="contained"
            component="a"
            target="_blank"
            href={href}
            sx={{
              width: 200,
            }}
            color="button"
          >
            Купить билет
          </Button>
        </Stack>
      )}
    </Box>
  );
};
