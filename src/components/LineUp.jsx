import Page from './Page.jsx';
import background from '../public/images/lineup-bg.jpg';

const TimeTable = ({ dancefloor, items }) => (
  <div style={{ width: 300, fontSize: '1.1em' }}>
    <h2>{dancefloor}</h2>
    <hr />
    <ul style={{
      listStyleType: 'none',
      paddingInlineStart: 0,
    }}>
      {items.map(({ time, artist }) => (
        <li key={time+artist}><div class="time">{time}</div><span class="dj">{artist}</span></li>
      ))}
    </ul>
  </div>
);

const LineUp = () => (
  <Page
    id='line-up'
    style={{ justifyContent: 'center' }}
    backgroundURL={background.src}
  >
    <h1>Line-Up</h1>
    <TimeTable
      dancefloor="Main"
      items={[
        {time: '22:00', artist: 'Electrostatic'},
        {time: '23:00', artist: 'Andy Shibo'},
        {time: '00:00', artist: 'Akinov'},
        {time: '01:00', artist: 'Mrac'},
        {time: '03:00', artist: 'Vasques & SKind'},
      ]}
    />
    <TimeTable
      dancefloor="Ъ Sign"
      items={[
        {time: '22:30', artist: 'Djaff'},
        {time: '23:30', artist: 'Vasques'},
        {time: '01:00', artist: 'Plumb Dump'},
        {time: '02:30', artist: 'Electrostatic'},
      ]}
    />
  </Page>
);

export default LineUp;
