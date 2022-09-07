import Artist from '../Artist.jsx';

import photo from  '../../public/images/electrostatic.jpg';


const Electrostatic = () => (
  <Artist
    id="electrostatic"
    photo={photo.src}
    title="Electrostatic"
    bio={<>
      <p>
        Участник Питерского винилового лейбла "Interstate One", который производит пластинки в Лондоне.
        На лейбле издаются русские, английские музыканты так и эйсид техно продюссеры из других стран.
        Их треки звучат на Лондонских рейвах, Сквот пати, пластинки разлетаются на сайте лейбла
        Stay Up Forever, это самый огромный techno-синдикат, в мире аналогов которому нет!
      </p>
      <p>
        Музыка издающиеся на Interstate One сохраняет ориентированность на танцующую аудиторию,
        «лондонский» саунд. Владельцом лейбла является Dima Interstate.
      </p>
    </>}
    mix={
    <div className="mix" style={{ height: 166 }}>
      <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/297843001&color=%232c2c2c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
    </div>
    }
  />
);

export default Electrostatic;
