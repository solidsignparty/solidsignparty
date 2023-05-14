import logo from '../public/images/logo.png';

const Logo = ({ ...props }) => {
  return (
    <img src={logo.src} {...props} />
  );
};

export default Logo;
