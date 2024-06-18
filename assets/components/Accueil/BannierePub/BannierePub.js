import React from "react";
import "../../../styles/Accueil/BannierePub/BannierePub.css";
import "../../../styles/Accueil/BannierePub/BannierePubResponsive.css";
import mannequin from "../../../images/mannequin-robe-verte-font-bleu.png";
import logo from "../../../images/WaxAndSea-LogoDef.png";

function BannierePub () {
    return (
        <div className="banner_model-logos_section">
        <section className="banner-model">
          <img
            className="banner-model-img"
            src={mannequin}
            alt="banniere gifs animés"
          />
          <div className="banner-model-logo-and-text">
            <p>
              DES VETEMENTS ET ACCESSOIRES UNIQUES, <br />
              REALISES SUR DEMANDE.
            </p>
            <img
              className="banner-model-logo"
              src={logo}
              alt="logo de Wax and Sea"
            />
          </div>
        </section>
      </div>
    );
}

export default BannierePub;