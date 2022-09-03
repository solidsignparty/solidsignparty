import Image from 'next/image';
import useMediaQuery from '@mui/material/useMediaQuery';

const Page = ({ backgroundURL, children }) => {
  const matches = useMediaQuery('(min-width:600px)');
  const width = matches ? 400 : 300;
  return (
    <div style={{
      backgroundImage: `url(${backgroundURL})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: '100%',
      height: '100%',
    }}>
      <div className="solid-sign">
        <div className="column" style={{ width }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Page;
