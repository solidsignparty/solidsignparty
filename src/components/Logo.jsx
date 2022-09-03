import useMediaQuery from '@mui/material/useMediaQuery';

import logo from '../public/images/solid_sign.png';

const Logo = ({ maxSize, minSize }) => {
  const matches = useMediaQuery('(min-width:600px)');
  const size = matches ? maxSize : minSize;
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

Logo.defaultProps = {
  maxSize: 344,
  minSize: 200,
};

export default Logo;
