import Image from 'next/image';

import BuyTicket from './BuyTicket.jsx';
import SocialLinks from './SocialLinks.jsx';
import Logo from './Logo.jsx';
import Page from './Page.jsx';
import Opera from './Opera.jsx';

import background from '../public/images/solid-sign-2-bg.jpeg';

const SolidSign2 = () => (
  <Page backgroundURL={background.src}>
    <SocialLinks />
    <div>
      <Logo />
      <div className="title">
        SOLID SIGN #2 <br />
        16/09/2022
      </div>
    </div>
    <Opera />
    <BuyTicket width='100%' />
  </Page>
);

export default SolidSign2;
