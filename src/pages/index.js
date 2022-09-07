import Artists from '../components/Artists.jsx';
import Head from '../components/Head.jsx';
import Mrac from '../components/artists/Mrac.jsx';
import Vasques from '../components/artists/Vasques.jsx';
import AndyShibo from '../components/artists/AndyShibo.jsx';
import SolidSign2 from '../components/SolidSign2.jsx';


export default function Home({ photos }) {
  return (
    <>
      <Head />
      <SolidSign2 />
      <Mrac />
      <Vasques />
      <AndyShibo />
      <Artists />
    </>
  )
}
