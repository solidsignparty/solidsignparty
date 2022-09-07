import Artist from '../Artist.jsx';

import photo from  '../../public/images/MRAC_.jpg';


const Mrac = () => (
  <Artist
    id="mrac"
    photo={photo.src}
    title={<b>MRAC</b>}
    group="Monasterio Moscow"
    bio={<>
      <p>
        Mrac родился в одном из промышленных районов Самары на заре 80-х.
      </p>
      <p>
        В разгар юности знакомится с хардкор-техно, что дает ему импульс к дальнейшему изучению жанра.
      </p>
      <p>
        В диджей-сетах Mrac ориентируется на механистическую классику техно, среднетемповый хардкор, эйсид и техно-транс.
      </p>
      <p>
        Артиста, играющего только с классического носителя и олицетворяющего идеи старой школы, особо ценит аудитория Monasterio,
        а Mrac отвечает ей жесткими танцевальными новинками своей коллекции пластинок.
      </p>
    </>}
    mix={
      <div className="mix" style={{ height: 166 }}>
        <iframe
          width="100%"
          height="166"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1238697121&color=%232c2c2c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
      </div>
    }
  />
);

export default Mrac;
