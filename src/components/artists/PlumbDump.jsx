import Artist from '../Artist.jsx';

import photo from  '../../public/images/plumbdump.jpg';


const PlumbDump = () => (
  <Artist
    id="plumbdump"
    photo={photo.src}
    photoStyle={{
      backgroundSize: '100% auto',
    }}
    title="Plumb Dump"
    bio={<>
      <p>
      Диджей начавший свою карьеру в 2008г и на протяжении всей карьеры не изменяет своему вкусу в техно музыке, иронично совмещая на танцполе тяжелый грув, сырые и местами жесткие ритмы техно. Участник рейв вечеринок NK Techno Zone, Yu-67.
      </p>
    </>}
  mix={
    <div className="mix" style={{ height: 166 }}>
    <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1336387795&color=%232c2c2c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
    </div>
  }
  />
);

export default PlumbDump;
