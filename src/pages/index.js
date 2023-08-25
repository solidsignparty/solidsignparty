import Stack from '@mui/material/Stack';
import PageWithMenu from '../components/PageWithMenu';
import Party from '../components/Party';

import harsh from '../public/images/harsh.jpg';
import urbantatar from '../public/images/urbantatar.jpg';
import solidSign6 from '../public/images/solid-sign-6.jpg';
import solidSign5 from '../public/images/solid-sign-5.jpg';
import solidSign4 from '../public/images/solid-sign-4.jpg';
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
        <Party
          date={new Date('2023-09-08')}
          img={solidSign6}
          href="https://nabchelny.qtickets.events/78444-solid-sign-40"
        >
          <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1507329757&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>        </Party>
        <Party
          date={new Date('2023-08-25')}
          img={harsh}
        />
        <Party
          date={new Date('2023-08-19')}
          img={urbantatar}
          href="https://urbantatar.timepad.ru/event/2507995/"
        />
        <Party
          date={new Date('2023-06-30')}
          img={solidSign5}
        />
        <Party
          date={new Date('2023-05-26')}
          img={solidSign4}
        />
        <Party
          date={new Date('2023-04-28')}
          img={solidSign3}
          objectPosition="-1px -1px"
        />
        <Party
          date={new Date('2022-09-16')}
          img={solidSign2}
        />
        <Party
          date={new Date('2022-02-11')}
          img={solidSign1}
        />
      </Stack>
    </PageWithMenu>
  );
}
