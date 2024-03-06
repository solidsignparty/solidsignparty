import { useState } from 'react';
import Stack from '@mui/material/Stack';
import PageWithMenu from '../components/PageWithMenu';
import Party from '../components/Party';
import Button from '@mui/material/Button';

import reset from '../public/images/reset.jpg';
import harsh from '../public/images/harsh.jpg';
import urbantatar from '../public/images/urbantatar.jpg';
import solidSignShift1 from '../public/images/solid-sign-shift-1.jpg';
import solidSign8 from '../public/images/solid-sign-8.jpg';
import solidSign7 from '../public/images/solid-sign-7.jpg';
import solidSign6 from '../public/images/solid-sign-6.jpg';
import solidSign5 from '../public/images/solid-sign-5.jpg';
import solidSign4 from '../public/images/solid-sign-4.jpg';
import solidSign3 from '../public/images/solid-sign-3.jpg';
import solidSign2 from '../public/images/solid-sign-2.jpg';
import solidSign1 from '../public/images/solid-sign-1.jpg';
import kama from '../public/images/kama.jpeg';
import allNight1 from '../public/images/akinov-all-night-1.jpg';
import playHard from '../public/images/PlayHard.jpeg';
import asylum from '../public/images/asylum.jpg'

const PREVIEW_COUNT = 3;

const events = [
  {
    date: new Date('2024-03-29'),
    img: asylum,
    href: 'https://moscow.qtickets.events/104229-asylum',
    eventProps: {
      name: 'SOLID SIGN showcase on Asylum',
      startDate: '2024-03-29',
      startTime: '22:00',
      endDate: '2024-03-30',
      endTime: '05:00',
      timeZone: 'Europe/Moscow',
      location: 'Aglomerat',
    },
  },
  {
    date: new Date('2024-02-02'),
    img: solidSignShift1,
    href: 'https://nabchelny.qtickets.events/99574-solid-sign-shift',
    eventProps: {
      name: 'SOLID SIGN Shift',
      startDate: '2024-02-02',
      startTime: '22:00',
      endDate: '2024-02-03',
      endTime: '05:00',
      timeZone: 'Europe/Moscow',
      location: 'Dark Size',
    },
  },
  {
    date: new Date('2024-01-19'),
    img: solidSign8,
    href: 'https://nabchelny.qtickets.events/97270-solid-sign-special-4-invites-rave-kzn',
    eventProps: {
      name: 'SOLID SIGN SPECIAL #4',
      startDate: '2024-01-19',
      startTime: '22:00',
      endDate: '2024-01-20',
      endTime: '05:00',
      timeZone: 'Europe/Moscow',
      location: 'FORMULA (Вахитова 9А)',
    },
  },
  {
    date: new Date('2023-12-16'),
    img: playHard,
    href: 'https://kazan.qtickets.events/93804-playhard-solid-sign',
    eventProps: {
      name: 'Play:Hard & SOLID SIGN',
      startDate: '2023-12-16',
      startTime: '22:00',
      endDate: '2023-12-17',
      endTime: '05:00',
      timeZone: 'Europe/Moscow',
      location: 'Казань, ул. Баумана 70, клуб Taboo',
    },
  },
  {
    date: new Date('2023-12-01'),
    img: allNight1,
    href: 'https://nabchelny.qtickets.events/92780-solid-sign-special-3-kopiya',
    eventProps: {
      name: 'AKINOV all night long',
      startDate: '2023-12-01',
      startTime: '22:00',
      endDate: '2023-12-02',
      endTime: '05:00',
      timeZone: 'Europe/Moscow',
      location: 'Dark Size'
    },
  },
  {
    date: new Date('2023-10-20'),
    img: solidSign7,
    href: 'https://nabchelny.qtickets.events/85137-solid-sign-special-3',
    eventProps: {
      name: 'SOLID SIGN Special #3',
      startDate: '2023-10-20',
      startTime: '22:00',
      endDate: '2023-10-21',
      endTime: '05:00',
      timeZone: 'Europe/Moscow',
      location: 'Dark Size'
    },
  },
  {
    date: new Date('2023-09-29'),
    img: kama,
    href: 'https://kamarave.ru/',
  },
  {
    date: new Date('2023-09-16'),
    img: reset,
    href: 'https://instagram.com/r_set.fest?igshid=MzRlODBiNWFlZA==',
  },
  {
    date: new Date('2023-09-08'),
    img: solidSign6,
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
    objectPosition: '-1px -1px',
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
  const visibleEvents = showMore ? events : events.slice(0, PREVIEW_COUNT);
  return (
    <PageWithMenu>
      <Stack
        direction='column'
        justifyContent='space-around'
        spacing={5}
      >
        {visibleEvents.map((event) => (
          <Party key={event.date} {...event} />
        ))}
        {!showMore && (
          <Stack sx={{pb: 5}}>
            <Button
              color='button'
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
