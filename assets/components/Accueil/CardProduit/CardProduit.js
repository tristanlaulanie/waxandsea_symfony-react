import React from "react";
import "../../../styles/Accueil/CardProduit/CardProduit.css";

import { Link } from "react-router-dom";

function CardProduit() {
  return (
    <section className="three-cards">
      <div className="first-products-card">
        <img
          src="https://picsum.photos/350?random=22"
          alt="grey neutral card"
        />
        <button>
          <Link className="card_button" to="/boutique/produit">
            <p>Voir le produit</p>
          </Link>
        </button>
      </div>
    </section>
  );
}

export default CardProduit;