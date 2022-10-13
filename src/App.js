import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";
import Nol from "./Nol";
import Nol_1 from "./Nol_1";
import Nol_2 from "./Nol_2";
import Footer from "./Footer";


const App = () => {
  return (
    <div className="container">
      <div className="container_n">
      <div>
    <div className="obshi">
    <div className="coffe">
      <div className="coffe__img"></div>
    </div>
        <div>
          <Pet name="HOME" animal="ABOUT US" breed="Create your plan" />
        </div>
    </div>
    {/* main */}
    <div>
      <Nol h1="Great coffee made simple." text="Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule." btn="Create your plan" />
      </div>
      {/* section */}
      <div>
        <Nol_1 title="Gran Espresso" text="Light and flavorful blend with cocoa and black pepper for an intense experience." title2="Planalto" text2="Brazilian dark roast with rich and velvety body, and hints of fruits and nuts." title3="Piccollo" text3="Mild and smooth blend featuring notes of toasted almond and dried cherry." title4="Danche" text4="Ethiopian hand-harvested blend densely packed with vibrant fruit notes."/>
      </div>
      <div>
        <Nol_2 title="Why choose us?" text="A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level." tit="Best quality" tet="Discover an endless variety of the world’s best artisan coffee from each of our roasters." tit2="Exclusive benefits" tet2="Special offers and swag when you subscribe, including 30% off your first shipment." tit3="Free shipping" tet3="We cover the cost and coffee is delivered fast. Peak freshness: guaranteed."/>
      </div>
      <div>
        <Footer name="HOME" name2="ABOUT US" name3="Create your plan"/>
      </div>
    </div>
  </div>
</div>
  )
}


ReactDOM.render(React.createElement(App), document.getElementById("root"));