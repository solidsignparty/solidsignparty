import Image from 'next/image';

import imgVK from '../public/images/vk.svg';
import imgTelegram from '../public/images/telegram.svg';
import imgInstagram from '../public/images/instagram.svg';

const SocialLink = ({image, link, size}) => (
  <div style={{ width: size }}>
    <a href={link} target="_blank">
      <Image src={image} height={size} width={size} />
    </a>
  </div>
);

SocialLink.defaultProps = { size: 48 };

const SocialLinks = ({ width }) => (
  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
    <SocialLink image={imgVK} link="https://vk.com/solidsign" />
    <SocialLink image={imgTelegram} link="https://t.me/solidsignru" />
    <SocialLink image={imgInstagram} link="https://instagram.com/solidsignru/" />
  </div>
);

SocialLinks.defaultProps = {
  width: '100%',
};

export default SocialLinks;
