import useMediaQuery from '@mui/material/useMediaQuery';

import logo from '../public/images/solid_sign.png';

const Logo = ({ maxSize, minSize }) => {
  const matches = useMediaQuery('(min-width:600px)');
  const size = matches ? maxSize : minSize;
  const margin = matches ? 0 : 10;
  return (
    <img src={logo.src} width={300} />
  );
};

Logo.defaultProps = {
  maxSize: 200,
  minSize: 200,
};

export default Logo;
