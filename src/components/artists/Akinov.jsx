import Artist from '../Artist.jsx';

import photo from  '../../public/images/akinov.jpg';


const Akinov = () => (
  <Artist
    id="akinov"
    photo={photo.src}
    title="Akinov"
    bio={<>
      <p>
      Лысый, но все так же молодой в душе, старец вдохновлённый за последние годы посещениями многочисленных андеграундных
событий в Москве, Питере, Самаре и других городах России, AKINOV впитал все то лучшее от техно культуры ,
что дали фестивали и закрытые мероприятия от MONASTERIO, 96NOISA, M_DIVISION (Gamma), YU-67 (YU-PORT), и др.
      </p>
      <p>
      Теперь он готов поделиться накопленной энергией в своём мощнейшем хард-техно миксе на выступлении на Solid Sign,
включающим эксклюзивные работы мастеров жанра.
      </p>
    </>}
  mix={
    <div className="mix" style={{ height: 166 }}>
    <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1333594276&color=%232c2c2c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
    </div>

  }
  />
);

export default Akinov;
