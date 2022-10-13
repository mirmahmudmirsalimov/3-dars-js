const home = (h) => {
  return (
    <div className="home">
      <div className="home__bg">
        <div>
          <h1 className="home__title">{h.title}</h1>
          <div className="">
            <p className="home__text">{h.text}</p>
          </div>
        </div>
        <div className="home__l">
          <ul className="home__list">
            <li className="home__item">
              <div className="nol">
                <div className="home__img1"></div>
              </div>
              <div>
                <h3 className="home__tit">{h.tit}</h3>
                <p className="home__tex">{h.tet}</p>
              </div>
            </li>
            <li className="home__item">
              <div className="nol">
                <div className="home__img2"></div>
              </div>
              <div>
                <h3 className="home__tit">{h.tit2}</h3>
                <p className="home__tex">{h.tet2}</p>
              </div>
            </li>
            <li className="home__item">
              <div className="nol">
                <div className="home__img3"></div>
              </div>
              <div>
                <h3 className="home__tit">{h.tit3}</h3>
                <p className="home__tex">{h.tet3}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default home;
