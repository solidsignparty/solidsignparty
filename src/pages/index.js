import { useState } from 'react';
import Stack from '@mui/material/Stack';
import PageWithMenu from '../components/PageWithMenu';
import Party from '../components/Party';
import Button from '@mui/material/Button';

import reset from '../public/images/reset.jpg';
import harsh from '../public/images/harsh.jpg';
import urbantatar from '../public/images/urbantatar.jpg';
import solidSign6 from '../public/images/solid-sign-6.jpg';
import solidSign5 from '../public/images/solid-sign-5.jpg';
import solidSign4 from '../public/images/solid-sign-4.jpg';
import solidSign3 from '../public/images/solid-sign-3.jpg';
import solidSign2 from '../public/images/solid-sign-2.jpg';
import solidSign1 from '../public/images/solid-sign-1.jpg';

const events = [
  {
    date: new Date('2023-09-16'),
    img: reset,
  },
  {
    date: new Date('2023-09-08'),
    img: solidSign6,
    href: "https://nabchelny.qtickets.events/78444-solid-sign-40",
  },
  {
    date: new Date('2023-08-25'),
    img: harsh,
  },
  {
    date: new Date('2023-08-19'),
    img: urbantatar,
  },
  {
    date: new Date('2023-06-30'),
    img: solidSign5,
  },
  {
    date: new Date('2023-05-26'),
    img: solidSign4,
  },
  {
    date: new Date('2023-04-28'),
    img: solidSign3,
    objectPosition: "-1px -1px",
  },
  {
    date: new Date('2022-09-16'),
    img: solidSign2,
  },
  {
    date: new Date('2022-02-11'),
    img: solidSign1,
  }
];

export default () => {
  const [showMore, setShowMore] = useState(false);
  const visibleEvents = showMore ? events : events.slice(0, 2);
  return (
    <PageWithMenu>
      <Stack
        direction="column"
        justifyContent="space-around"
        spacing={5}
      >
        {visibleEvents.map((event) => (
          <Party key={event.date} {...event} />
        ))}
        {!showMore && (
          <Stack sx={{pb: 5}}>
            <Button
              color="button"
              onClick={() => setShowMore(true)}
            >
              Показать все
            </Button>
          </Stack>
        )}
      </Stack>
    </PageWithMenu>
  );
}
