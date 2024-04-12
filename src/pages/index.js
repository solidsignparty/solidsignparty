import { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PageWithMenu from '../components/PageWithMenu';
import Party from '../components/Party';


const formatDate = (date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = (date.getDate()).toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}

const formatTime = (date) => {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};

export default () => {
  const [showMore, setShowMore] = useState(false);
  const [events, setEvents] = useState([]);
  const visibleEvents = showMore ? events : events.slice(0, process.env.NEXT_PUBLIC_PREVIEW_COUNT);
  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_BACKEND + '/events/')
      .then((data) => data.json())
      .then((data) => { setEvents(data.map((event) => {
        const startDateTime = new Date(event.start_time);
        const endDateTime = new Date(event.end_time);
        return {
          date: startDateTime,
          href: event.tickets_url,
          img: { src: event.image_url },
          eventProps: event.title ? {
            name: event.title,
            startDate: formatDate(startDateTime),
            startTime: formatTime(startDateTime),
            endDate: formatDate(endDateTime),
            endTime: formatTime(endDateTime),
            location: event.location,
            timeZone: 'Europe/Moscow'
          } : null,
        };
      })) });
  }, [setEvents]);
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
