import background from '../public/images/first-page.jpeg';

const SolidSign1 = () => (
  <div
    id="solid-sign-1"
    style={{
      backgroundImage: `url(${background.src})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: '100%',
      height: '100%',
    }}
  >
    <div className="solid-sign">
      <div className="lineup">
        <div>
          <div className="title">
            <p>11/02/2022 @ Jolly Roger</p>
            <p>SOLID SIGN #1</p>
          </div>
          <h1>Line-Up:</h1>
          <ul>
            <li><div className="time">22:00</div><span className="dj">DJAFF</span><span className="style">/ Micro Techno</span></li>
            <li><div className="time">23:00</div><span className="dj">PROGRUSS</span><span className="style">/ Techno</span></li>
            <li><div className="time">00:00</div><span className="dj">MERRA</span><span className="style">/ Techno</span></li>
            <li><div className="time">01:00</div><span className="dj">AKINOV</span><span className="style">/ Hard Techno</span></li>
            <li><div className="time">02:00</div><span className="dj">ELECTROSTATIC</span><span className="style">/ Acid Techno</span></li>
            <li><div className="time">03:00</div><span className="dj">SKIND</span><span className="style">/ Schranz</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default SolidSign1;
