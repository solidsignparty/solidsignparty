import Head from 'next/head'

import SolidSign1 from '../components/SolidSign1.jsx';
import SolidSign2 from '../components/SolidSign2.jsx';
import favicon from '../public/favicon.png';


export default function Home() {
  return (
    <div className="container">
      <Head>
        <meta charSet="utf-8" />
        <title>SOLID SIGN</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon.src} />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content="Solid Sign" />
        <meta property="og:description" content="Techno, rave" />
        <meta property="og:url" content="https://solidsign.ru" />
        <meta property="og:image" content="images/solid_sign.png" />
        <meta property="profile:first_name" content="Solid" />
        <meta property="profile:last_name" content="Sign" />
        <meta name="theme-color" content="#131313" />

        <meta name="description" content="" />
        <meta name="keywords" content="Techno" />
        <meta name="author" content="Solid Sign" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
      </Head>
      <SolidSign2 />
      <SolidSign1 />
    </div>
  )
}
