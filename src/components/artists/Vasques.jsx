import Artist from '../Artist.jsx';

import photo from  '../../public/images/vasques.jpg';


const Vasques = () => (
  <Artist
    id="vasques"
    photo={photo.src}
    title="Vasques"
    bio={<>
      <p>
        Vasques - гость из Нижнекамска, музыкальная карьера которого берёт начало в далеком 2007 году.
        Начинал как hard-techno DJ на андеграундных мероприятиях Татарстана и России, где выступал в качестве музыканта и организатора.
      </p>
    </>}
  mix={
    <div className="mix" style={{ height: 120 }}>
      <iframe width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Freal_aphex%2Ftruetechno%2F" frameborder="0" />
    </div>
  }
  />
);

export default Vasques;
