const footer = (f) => {
  return (
    <div className="footer">
      <div className="footer__bg">
        <div>
          <div className="footer__img"></div>
        </div>
        <ul className="footer__list">
          <li className="footer__item">
            <a className="footer__link">{f.name}</a>
          </li>
          <li className="footer__item">
            <a className="footer__link">{f.name2}</a>
          </li>
          <li className="footer__item">
            <a className="footer__link">{f.name3}</a>
          </li>
        </ul>
        <div className="footer__obshi">
          <div className="footer__f"></div>
          <div className="footer__t"></div>
          <div className="footer__i"></div>
        </div>
      </div>
    </div>
  );
};

export default footer;
