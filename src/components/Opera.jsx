import logo from '../public/images/opera.png';

const Opera = ({ style }) => (
  <div style={{
    backgroundImage: `url(${logo.src})`,
    backgroundSize: 'auto 100%',
    backgroundRepeat: 'no-repeat',
    width: 226,
    height: 50,
    ...style,
  }} />
);

export default Opera;
