
const Artist = ({ id, title, group, bio, photo, mix }) => (
  <div className="page" id={id}>
    <div className="tile">
      <div className="bio">
        <h1>
          {title}
          {group && (<span style={{ fontSize: '0.5em', display: 'block', paddingTop: 10 }}>({group})</span>)}
        </h1>
        {bio}
      </div>
    </div>
    <div className="tile" style={{
      backgroundImage: `url(${photo})`,
      backgroundRepeat: 'noRepeat',
      backgroundSize: 'auto 100%',
      backgroundPosition: 'center',
      position: 'relative',
    }}>
      <div className="mix">
        {mix}
      </div>
    </div>
  </div>
);


const Artist2 = ({ id, title, bio, photo, mix }) => (
  <div className="page"
    style={{
      backgroundImage: `url(${photo})`,
      backgroundRepeat: 'noRepeat',
      backgroundSize: 'cover',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
        alignItems: 'center'
    }}
  >
        <h1>{title}</h1>
        {bio}
  </div>
);

export default Artist;
