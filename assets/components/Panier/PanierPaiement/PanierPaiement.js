import React from "react";
// COMPOSANT
import { Link } from "react-router-dom";
import MaCommande from "../../Panier/MaCommande/MaCommande";

// ICONS
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../../styles/Panier/PanierPaiement/PanierPaiement.css";
import "../../../styles/Panier/PanierPaiement/PanierPaiementResponsive.css";

function PanierPaiement() {
  return (
    <div className="PanierPaiement">
      <h1>Mon Panier</h1>
      <div id="panier_user-story">
        <h2 id="panier-title-story">
          <Link className="user-story_style" to="/panier/produit">
            Panier
          </Link>
        </h2>
        <h2 id="coordonnees-title-story">
          <Link className="user-story_style" to="/panier/coordonnees">
            Coordonnées
          </Link>
        </h2>
        <h2 id="livraison-title-story">
          <Link className="user-story_style" to="/panier/livraison">
            Livraison
          </Link>
        </h2>
        <h2 id="paiement-title-story">Paiement</h2>
      </div>
      <div id="paiement-command-container">
        <div id="title-stripe-paypal-container">
          <h2>Choisir mon mode de paiement</h2>
          <div className="stripe-container">
            <section id="stripe-select-img">
              <input
                className="select-radio-stripe"
                type="radio"
                placeholder="Stripe"
              />
              <img
                src="https://stripe.com/img/v3/home/social.png"
                alt="stripe-logo"
                id="stripe-logo"
              />
            </section>
            <div id="paiement_title_form">
              <h3 id="stripe-paiement-title">Paiement par carte bancaire</h3>
              <form
                id="card-paiement_form"
                action="/process_payment"
                method="post"
              >
                <section id="card-number">
                  <label for="cardNumber">Numéro de carte:</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    maxlength="16"
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                </section>
                <section id="security-expiry-card">
                  <div id="paiement_expiry-date">
                    <label for="expiryDate">Date d'expiration:</label>
                    <input
                      type="text"
                      id="expiryDate"
                      name="expiryDate"
                      placeholder="MM/AA"
                      required
                    />
                  </div>
                  <div id="paiement_security-code">
                    <label for="securityCode">Code de sécurité:</label>
                    <input
                      type="text"
                      id="securityCode"
                      name="securityCode"
                      maxlength="4"
                      placeholder="123"
                      required
                    />
                  </div>
                </section>
              </form>
            </div>
          </div>
          <div className="paypal-container">
            <input
              className="select-radio-paypal"
              type="radio"
              placeholder="Paypal"
            />
            <img
              src="https://www.paypalobjects.com/webstatic/mktg/logo-center/PP_Acceptance_Marks_for_LogoCenter_266x142.png"
              alt="paypal-logo"
              id="paypal-logo"
            />
          </div>
        </div>
        <div
          className="paiement-my_command-component"
          id="my-command_component"
        >
          <div id="MaCommande_Paiement">
            <MaCommande />
          </div>
          <label className="check-CGV">
            J'accepte les C.G.V.
            <input id="checkbox" type="checkbox" checked="checked" />
            <span className="checkmark"></span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default PanierPaiement;
