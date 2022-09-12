import Artist from '../Artist.jsx';

import photo from  '../../public/images/djaff.png';


const Djaff = () => (
  <Artist
    id="djaff"
    photo={photo.src}
    photoStyle={{
      backgroundPosition: 'left',
    }}
    title="Djaff"
    bio={<>
      <p>
      Музыкальный энтузиаст, коллекционер звукоиграющих девайсов, электронный музыкант в жанрах эмбиент и lo-fi электроника Djaff (Евгений Афанасьев) представляет acid-downtempo лайв-сет.
      </p>
    </>}
  />
);

export default Djaff;
