// import React from "react";

// export default function Pet({ name, animal, breed }) {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, name),
//     React.createElement("h2", {}, animal),
//     React.createElement("h2", {}, breed),
//   ]);
// }

// const Pet = (props) => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h1>{props.animal}</h1>
//       <h1>{props.breed}</h1>
//     </div>
//   )
// }

const link = (props) => {
  return (
    <div className="header">
      <ul className="list">
        <li className="item">
          <a className="header__link" href="">{props.name}</a>
        </li>
        <li className="item">
          <a className="header__link" href="">{props.animal}</a>
        </li>
        <li className="item-1">
          <a className="header__link" href="">{props.breed}</a>
        </li>
      </ul>
    </div>
  );
};

export default link;
