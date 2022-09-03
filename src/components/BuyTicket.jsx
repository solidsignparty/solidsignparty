const BuyTicket = ({ width }) => (
  <div style={{ width }}>
    <a href="https://nabchelny.qtickets.events/48491-solid-sign-2&utm_source=solidsign_ru" target="_blank">
      <button className="ticket" style={{ width: '100%' }}>КУПИТЬ БИЛЕТ</button>
    </a>
  </div>
);

BuyTicket.defaultProps = {
  width: 256,
};

export default BuyTicket;
