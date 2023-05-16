import Stack from '@mui/material/Stack';
import PageWithMenu from '../components/PageWithMenu';
import Party from '../components/Party';

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
          date={new Date('2023-05-26')}
          img={solidSign4}
          href="https://nabchelny.qtickets.events/72807-solid-sign-uu"
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
