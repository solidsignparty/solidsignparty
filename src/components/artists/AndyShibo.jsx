import Artist from '../Artist.jsx';

import photo from  '../../public/images/andyshibo.jpg';


const AndyShibo = () => (
  <Artist
    id="andyshibo"
    photo={photo.src}
    title="Andy Shibo"
    bio={<>
      <p>
        Andy Shibo резидент промо группы "Stezya”. Его сеты всегда наполнены драйвом, глубоким басом, богатыми мелодиями и погружающим вокалом вне зависимости от выбранного жанра.
      </p>
      <p>
        Его отличительной чертой является любовь к поиску уникального звучания и щепетильная селекция из самых свежайших треков, что даёт возможность познакомить слушателя с новейшей отборной музыкой.
      </p>
    </>}
  mix={
    <div className="mix" style={{ height: 120 }}>
      <iframe
        width="100%"
        height="120"
        src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FAndyShibo%2Ftechno-rave-mix-by-andy-shibo-for-stezya%2F"
        frameborder="0"
      />
    </div>
  }
  />
);

export default AndyShibo;
