import Image from 'next/image';
import useMediaQuery from '@mui/material/useMediaQuery';

import imgVK from '../public/images/vk.svg';
import imgTelegram from '../public/images/telegram.svg';
import imgInstagram from '../public/images/instagram.svg';
import background from '../public/images/solid-sign-2-bg.jpeg';
import logo from '../public/images/solid_sign.png';
import arrow from '../public/images/arrow.svg';

const SocialLink = ({image, link, size}) => (
  <div style={{ paddingLeft: 40, paddingRight: 40 }}>
    <a href={link} target="_blank">
      <Image src={image} height={size} width={size} />
    </a>
  </div>
);

SocialLink.defaultProps = { size: 48 };


const Logo = () => {
  const matches = useMediaQuery('(min-width:600px)');
  const size = matches ? 344 : 200;
  const margin = matches ? 0 : 10;
  return (
    <div style={{
      backgroundImage: `url(${logo.src})`,
      width: size,
      height: size,
      backgroundSize: 'auto 100%',
      backgroundRepeat: 'no-repeat',
      margin,
    }} />
  );
};

const Arrow = () => (
  <Image src={arrow} width={18} height={32} />
);

const SolidSign2 = () => (
  <div style={{
    backgroundImage: `url(${background.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
  }}>
    <div className="solid-sign">
      <div className="column">
        <div className="social">
          <SocialLink image={imgVK} link="https://vk.com/solidsign" />
          <SocialLink image={imgTelegram} link="https://t.me/solidsignru" />
          <SocialLink image={imgInstagram} link="https://instagram.com/solidsignru/" />
        </div>

        <div>
          <Logo />
          <div className="title">
            SOLID SIGN #2 <br />
            16/09/2022 TBA
          </div>
        </div>

        <div>
          <a href="https://nabchelny.qtickets.events/48491-solid-sign-2&utm_source=solidsign_ru" target="_blank">
            <button className="ticket">КУПИТЬ БИЛЕТ</button>
          </a>
        </div>


        <div className="next-page">
          <h4>Solid Sign #1</h4>
          <a href="#solid-sign-1">
            <Arrow />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default SolidSign2;
