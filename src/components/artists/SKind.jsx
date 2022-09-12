import Artist from '../Artist.jsx';

import photo from  '../../public/images/skind.jpg';


const SKind = () => (
  <Artist
    id="skind"
    photo={photo.src}
    title="SKind"
    bio={<>
      <p>
        SKind - dj и продюссер, представляющий музыку в стиле Hard Techno, Schranz и Hardcore.
      </p>
      <p>
        Выступал на андеграундных мероприятиях Нижнекамска, Казани и Набережных Челнов,
        среди которых NK Techno Zone, War Of the Worlds, YU-PORT.
      </p>
    </>}
  mix={
    <div className="mix" style={{ height: 166 }}>
    <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1247673937&color=%232c2c2c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
    </div>
  }
  />
);

export default SKind;
