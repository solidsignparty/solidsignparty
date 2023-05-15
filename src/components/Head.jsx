import Head from 'next/head';

import favicon from '../public/favicon.ico';


const Header = () => (
  <Head>
    <link rel="icon" href={favicon.src} />
    <title>SOLID SIGN</title>
  </Head>
);

export default Header;
