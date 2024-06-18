import React from "react";
import "../../../styles/Accueil/CardShopping/CardShopping.css";

function CardShopping() {
  return (
    <div className="products-grid">
      <div className="product-card">
        <img src="https://fakeimg.pl/300/" alt="grey neutral card" />
        <button>
          <p>Voir le produit</p>
        </button>
      </div>
    </div>
  );
}

export default CardShopping;
