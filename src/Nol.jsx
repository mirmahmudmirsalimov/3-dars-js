const link = (pro) => {
  return (
    <div className="main">
      <div className="main__img">
        <div className="main__obshi">
          <h1 className="main__title">{pro.h1}</h1>
          <p className="main__text">{pro.text}</p>
          <button className="main__btn">{pro.btn}</button>
        </div>
      </div>
    </div>
  );
};

export default link;
