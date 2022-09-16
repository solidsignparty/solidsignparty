import Image from 'next/image';
import useMediaQuery from '@mui/material/useMediaQuery';

const Page = ({ id, backgroundURL, style, children }) => {
  const matches = useMediaQuery('(min-width:600px)');
  const width = matches ? 400 : 300;
  return (
    <div
      id={id}
      style={{
        backgroundImage: `url(${backgroundURL})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
      }}
    >
      <div className="solid-sign">
        <div className="column" style={{ width, ...style }}>
          {children}
        </div>
      </div>
    </div>
  );
};

Page.defaultProps = {
  style: {},
  id: null,
}

export default Page;

