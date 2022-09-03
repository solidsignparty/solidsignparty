import Artist from '../Artist.jsx';

import photo from  '../../public/images/electrostatic.jpg';


const Electrostatic = () => (
  <Artist
    id="electrostatic"
    photo={photo.src}
    title="Electrostatic"
    bio={<>
      <p>
        Приверженец настоящего техно туманного альбиона.
        Участник крупнейших ивентов Татарстана и России: Technopolis, Millenium, NK Techno Zona,
        Underground Experience, Raving Moscow, YU-PORT и т.д.
      </p>
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
      <iframe
        width="100%"
        height="120"
        src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FElectrostatic%2Fhard-force-united-friends-summer-session-2018%2F"
        frameBorder="0"
      />
    }
  />
);

export default Electrostatic;
