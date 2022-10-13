const section = (prow) => {
    return (
        <div className="section">
            <div className="section__bg">
                <ul className="section__list">
                    <div className="section__img"></div>
                    <li className="section__item">
                        <h3 className="section__title">{prow.title}</h3>
                        <p className="section__text">{prow.text}</p>
                    </li>
                </ul>
                <ul className="section__list">
                    <div className="section__img2"></div>
                    <li className="section__item">
                        <h3 className="section__title">{prow.title2}</h3>
                        <p className="section__text">{prow.text2}</p>
                    </li>
                </ul>
                <ul className="section__list">
                    <div className="section__img3"></div>
                    <li className="section__item">
                        <h3 className="section__title">{prow.title3}</h3>
                        <p className="section__text">{prow.text3}</p>
                    </li>
                </ul>
                <ul className="section__list">
                    <div className="section__img4"></div>
                    <li className="section__item">
                        <h3 className="section__title">{prow.title4}</h3>
                        <p className="section__text">{prow.text4}</p>
                    </li>
                </ul>
            </div>
        </div>
    )
  };
  
  export default section;