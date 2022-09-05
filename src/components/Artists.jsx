import Page from './Page.jsx';
import BuyTicket from './BuyTicket.jsx';
import SocialLinks from './SocialLinks.jsx';
import Logo from './Logo.jsx';

import background from '../public/images/background-artists.jpg';


const ArtistTitle = ({ title, extra }) => (
  <div style={{ paddingBottom: 5 }}>
    {title}
    <span style={{ fontSize: '0.7em', display: 'block' }} >{extra}</span>
  </div>
);

const WIDTH = 400;


const Artists = () => (
  <Page backgroundURL={background.src}>
    <div>
      <Logo minSize={128} maxSize={128} />
    </div>
    <div style={{ width: '100%' }}>
      <ArtistTitle
        title={<h1 style={{ marginBottom: -5, fontWeight: 'bold' }}>MRAC</h1>}
        extra={'(Monasterio Moscow)'}
      />
      <hr />
      <div style={{ textAlign: 'right' }}>
        <ArtistTitle title='Electrostatic' />
        <ArtistTitle title='Djaff' />
        <ArtistTitle title='Akinov' />
        <ArtistTitle title='SKind' />
        <ArtistTitle title='Vasques' />
        <ArtistTitle title='Andy Shibo' extra='(Stezya)' />
        <ArtistTitle title='Plumb Dump' />
      </div>
    </div>
    <BuyTicket width='100%' />
    <SocialLinks width='100%' />
  </Page>
);

export default Artists;
