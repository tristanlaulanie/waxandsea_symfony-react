// REACT
import React from "react";

// COMPOSANTS
import MaCommande from "../../Panier/MaCommande/MaCommande";
import { Link } from "react-router-dom";

// CSS
import "../../../styles/Panier/PanierCoordonnees/PanierCoordonnees.css";
import "../../../styles/Panier/PanierCoordonnees/PanierCoordonneesResponsive.css";

function PanierCoordonnees() {
  return (
    <div className="PanierCoordonnees">
      <h1>Mon Panier</h1>
      <div className="panier_title-story_coordonees" id="panier_user-story">
        <h2 id="panier-title-story">
          <Link className="user-story_style" to="/panier/produit">
            Panier
          </Link>
        </h2>
        <h2 id="coordonnees-title-story">Coordonnées</h2>
        <h2 className="user-story-titles">Livraison</h2>
        <h2 className="user-story-titles">Paiement</h2>
      </div>
      <container id="mon-panier_coordonnees-commande">
        <form>
          <div id="social-status_form">
            <h3 id="social-status_title">Dénomination sociale :</h3>
            <section id="firstname-lastname_form">
              <div id="first-name_label_input">
                <div id="first-name_label_input_container">
                  <label id="first-name_label" htmlFor="first_name">
                    Prénom * :
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    required
                  />
                </div>
              </div>
              <div id="last-name_label_input">
                <div id="last-name_label_input-container">
                  <label id="last_name_label" htmlFor="last_name">
                    Nom * :
                  </label>
                  <input
                    type="text"
                    id="last_name_input"
                    name="last_name"
                    required
                  />
                </div>
              </div>
            </section>
            <section id="company-name_form">
              <div id="company-name_form_container">
                <div id="company-name_label_input">
                  <label id="company_name_label" htmlFor="company_name">
                    Nom de l'entreprise (facultatif):
                  </label>
                  <input
                    type="text"
                    id="company_name_input"
                    name="company_name"
                  />
                </div>
              </div>
            </section>
          </div>
          <div id="billing_delivery-adress_form">
            <section id="billing-form">
              <div id="billing-adress_form">
                <h1 id="billing-adress_title">Adresse de facturation :</h1>
                <section id="billing_adress_form">
                  <h2 id="billing-adress_country">
                    Pays : <strong>France</strong>
                  </h2>
                  <div id="street-name-number">
                    <label htmlFor="billing_address">
                      Numéro et nom de rue * :
                    </label>
                    <input
                      type="text"
                      id="billing_address"
                      name="billing_address"
                    />
                    <input
                      id="building"
                      type="text"
                      name="building"
                      placeholder="Bâtiment, Appartement etc. (facultatif)"
                    />
                  </div>
                  <section id="billing_city_postal-code">
                    <div id="postal-code">
                      <label htmlFor="billing_postal_code">
                        Code postal * :
                      </label>
                      <input
                        type="text"
                        id="billing_postal_code"
                        name="billing_postal_code"
                      />
                    </div>
                    <div id="billing-city">
                      <label htmlFor="billing_city">Ville * :</label>
                      <input
                        type="text"
                        id="billing_city"
                        name="billing_city"
                      />
                    </div>
                  </section>
                  <section id="billing_email_phone-number">
                    <div id="billing_phone-number">
                      <label htmlFor="billing_phone">Téléphone * :</label>
                      <input
                        type="text"
                        id="billing_phone"
                        name="billing_phone"
                      />
                    </div>
                    <div id="billing_email-adress">
                      <label htmlFor="billing_email">
                        Adresse de messagerie * :
                      </label>
                      <input
                        type="email"
                        id="billing_email"
                        name="billing_email"
                      />
                    </div>
                  </section>
                </section>
              </div>
              <div id="delivery_same-adress">
                <input type="checkbox" id="same_address" name="same_address" />
                <label htmlFor="same_address">
                  Choisir la même adresse pour la livraison
                </label>
              </div>
            </section>
            <div id="delivery-adress_form">
              <h1 id="billing-adress_title">Adresse de livraison :</h1>
              <h2 id="delivery-adress_country">
                Pays : <strong>France</strong>
              </h2>
              <section id="delivery_adress_form">
                <div id="street-name-number">
                  <label htmlFor="billing_address">
                    Numéro et nom de rue * :
                  </label>
                  <input
                    type="text"
                    id="billing_address"
                    name="billing_address"
                  />
                  <input
                    id="building"
                    type="text"
                    name="building"
                    placeholder="Bâtiment, Appartement etc. (facultatif)"
                  />
                </div>
                <section id="billing_city_postal-code">
                  <div id="postal-code">
                    <label htmlFor="billing_postal_code">Code postal * :</label>
                    <input
                      type="text"
                      id="billing_postal_code"
                      name="billing_postal_code"
                    />
                  </div>
                  <div id="billing-city">
                    <label htmlFor="billing_city">Ville * :</label>
                    <input type="text" id="billing_city" name="billing_city" />
                  </div>
                </section>
                <section id="billing_email_phone-number">
                  <div id="billing_phone-number">
                    <label htmlFor="billing_phone">Téléphone * :</label>
                    <input
                      type="text"
                      id="billing_phone"
                      name="billing_phone"
                    />
                  </div>
                  <div id="billing_email-adress">
                    <label htmlFor="billing_email">
                      Adresse de messagerie * :
                    </label>
                    <input
                      type="email"
                      id="billing_email"
                      name="billing_email"
                    />
                  </div>
                </section>
              </section>
            </div>
          </div>
        </form>
        <div className="command_component_coordonnees">
          <MaCommande />
          <div id="confirm_button">
            <Link to="/panier/livraison">
              <button type="submit">CONFIRMER MES COORDONNÉES</button>
            </Link>
          </div>
        </div>
      </container>
    </div>
  );
}

export default PanierCoordonnees;