import React from "react";
// COMPOSANT
import MaCommande from "../MaCommande/MaCommande";
import { Link } from "react-router-dom";
// CSS
import "../../../styles/Panier/PanierProduit/PanierProduit.css";
import "../../../styles/Panier/PanierProduit/PanierProduitResponsive.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function PanierProduit() {
  return (
    <div className="PanierProduit">
      <h1>Mon Panier</h1>
      <div id="PanierProduit_main_container">
        <section id="panier_user-story">
          <div id="user-story-titles_panier">
            <h2 id="panier-title-story">Panier</h2>
            <h2 className="panier_user-story-titles">Coordonnées</h2>
            <h2 className="panier_user-story-titles shipping-title">
              Livraison
            </h2>
            <h2 className="panier_user-story-titles">Paiement</h2>
          </div>
        </section>
        <div id="mon-panier_produit_commande">
          <div id="mon-panier_produit">
            <div id="mon-panier_produit_container">
              <section id="panier_container_title">
                <h3>Mon Panier</h3>
                <div id="panier_title-icon-button">
                  <div id="panier_title-icon">
                    <FontAwesomeIcon icon={faTrash} />
                  </div>
                  <button>Vider mon panier</button>
                </div>
              </section>
              <section id="mon-panier_section-produit">
                <img src="https://fakeimg.pl/150/" alt="grey neutral card" />
                <div id="section-produit_text">
                  <div className="section-produit_text-img">
                    <h3>Nom du produit</h3>
                    <div id="produit_text">
                      <p id="produit_text_ref">Référence : xxx</p>
                      <p id="produit_text_price">
                        Prix unitaire : <br /> Prix €
                      </p>
                    </div>
                  </div>
                  <div id="section-produit_quantity">
                    <div id="produit_quantity">
                      <div className="quantity_operator">-</div>
                      <p className="quantity_number">1</p>
                      <div className="quantity_operator">+</div>
                    </div>
                    <p id="produit_delete">Supprimer</p>
                  </div>
                </div>
                <div id="section-produit_total">
                  <p>
                    Total___€ <br></br> par article{"(s)"}
                  </p>
                </div>
              </section>
            </div>
          </div>
          <div id="panier-produit_commande_component">
            <div id="command_component_container">
              <div id="command_component">
                <MaCommande />
              </div>
              <div id="valid_button">
                <Link to="/panier/coordonnees">
                  <button id="panier_produit_valid_button" type="submit">
                    VALIDER MON PANIER
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PanierProduit;