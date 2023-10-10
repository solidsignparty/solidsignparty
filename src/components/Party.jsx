import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import 'add-to-calendar-button';
import { AddToCalendarButton } from 'add-to-calendar-button-react';

const toDate = (d) => {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
};

const compareDate = (d1, d2) => {
  return toDate(d1) > toDate(d2);
};

const formatDate = (d) => (
  `${d.getDate().toString().padStart(2, "0")}.${(d.getMonth() + 1).toString().padStart(2, "0")}.${d.getFullYear()}`
);


export default ({ date, img, href, children, eventProps, ...props }) => {
  const upcoming = !compareDate(new Date(), date);
  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          {!upcoming && (
            <Typography color="white">
              {formatDate(date)}
            </Typography>
          )}
          <Typography
            color="gray"
          >
          {upcoming ?
            'Следующее мероприятие' :
            'Мероприятие состоялось'
          }
          </Typography>
        </Box>
        {upcoming && eventProps && (
          <AddToCalendarButton
            {...eventProps}
            size="2|2|1"
            listStyle="dropdown-static"
            hideBackground
            hideIconButton
            hideCheckmark
            label="Добавить в календарь"
            trigger="click"
            buttonStyle="date"
            identifier={date}
            options={['Apple', 'Google']}
          />
        )}
      </Stack>
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
