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
        <container className="container_card_produit">
          <CardProduit />
          <CardProduit />
          <CardProduit />
        </container>
        <container className="banniere_pub">
        <BannierePub/>
        </container>
        <container className="container-card-shopping">
          <CardShopping />
          <CardShopping />
          <CardShopping />
        </container>
        <container className="container-card-shopping">
          <CardShopping />
          <CardShopping />
          <CardShopping />
        </container>
        <container className="container-card-shopping">
          <CardShopping />
          <CardShopping />
        </container>
      </div>
    </>
  );
}

export default Accueil;