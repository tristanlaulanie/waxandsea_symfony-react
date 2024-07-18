import React from "react";

// COMPOSANTS
import Description from "./Description/Description";
import Slider from "./Slider/Slider";
import CardProduit from "./CardProduit/CardProduit";
import BannierePub from "./BannierePub/BannierePub";
import CardShopping from "./CardShopping/CardShopping";
// CSS
import "../../styles/Accueil/Accueil.css";
import "../../styles/Accueil/AccueilResponsive.css";

function Accueil() {
  return (
    <>
      <div>
        <Slider className="slider" />
        <Description className="description"/>
        <div className="container_card_produit">
          <CardProduit />
          <CardProduit />
          <CardProduit />
        </div>
        <div className="banniere_pub">
        <BannierePub/>
        </div>
        <div className="container-card-shopping">
          <CardShopping />
          <CardShopping />
          <CardShopping />
        </div>
        <div className="container-card-shopping">
          <CardShopping />
          <CardShopping />
          <CardShopping />
        </div>
        <div className="container-card-shopping">
          <CardShopping />
          <CardShopping />
        </div>
      </div>
    </>
  );
}

export default Accueil;