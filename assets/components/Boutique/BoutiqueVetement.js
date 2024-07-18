// REACT IMPORT
import React from "react";

// CSS
import "../../styles/Boutique/BoutiqueVetement/BoutiqueVetement.css";
import "../../styles/Boutique/BoutiqueVetement/BoutiqueVetementResponsive.css";

// FONTAWESOME IMPORT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

function BoutiqueVetement() {
  return (
    <div className="BoutiqueVetement">
      <h1 id="product_main_title">Vetement</h1>
      <main id="product_main-container">
        <section id="product_images_description">
          <div id="product_images">
            <img
              id="product_main_image"
              src="https://picsum.photos/400?random=15"
              alt="Pic Product"
            ></img>
            <div id="product_side_images">
              <img
                src="https://picsum.photos/200?random=15"
                alt="side pic"
              ></img>
              <img
                src="https://picsum.photos/200?random=15"
                alt="side pic"
              ></img>
            </div>
          </div>
          <div id="product_name_price_description">
            <h2> Nom du vetement</h2>
            <p id="product_price"> Prix : xx €</p>
            <div id="product_description">
              <div id="product_description_container">
                Description du vetement :<br></br> <br></br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum lacinia, lacus ut rutrum accumsan, <br></br>
                lectus dolor eleifend lacus, id finibus ex lorem id urna.
                Integer laoreet vestibulum molestie. <br></br>
                In hac habitasse platea dictumst. Nulla facilisi. Integer nunc
                dolor, sodales eget.
              </div>
            </div>
          </div>
        </section>
        <div id="product_colors_sizes_quantity_cart">
          <section id="product_colors_sizes">
            <div id="product_colors">
              <h3> Couleurs disponibles</h3>
              <div id="product_colors_list">
                <div className="product_color product_color_blue"></div>
                <div className="product_color product_color_yellow"></div>
                <div className="product_color product_color_green"></div>
                <div className="product_color product_color_red"></div>
                <div className="product_color product_color_pink"></div>
                <div className="product_color product_color_purple"></div>
              </div>
            </div>
            <div id="vetement_product_sizes">
              <h3>Choisissez votre taille</h3>
              <select name="sizes" id="sizes-select">
                <option id="sizes-select_option" value="choose">
                  Tailles disponibles :
                </option>
                <option value="small">S</option>
                <option value="medium">M</option>
                <option value="large">L</option>
                <option value="extra large">XL</option>
              </select>
            </div>
          </section>
          <section id="vetement_product_quantity_total">
            <div id="vetement_product_quantity">
              <label id="product_quantity_label" htmlFor="quantity">
                Quantité :
              </label>
              <input
                id="product_quantity_input"
                type="number"
                name="quantity"
                min="1"
                max="10"
              ></input>
            </div>
            <p>Total : XX €</p>
          </section>
          <section id="product_add-to-cart">
            <button id="vetement_product_add-to-cart_button">
              <i id="">
                <FontAwesomeIcon
                  className="product_add-to-cart_button_icon"
                  icon={faCartPlus}
                  size="xl"
                />
              </i>
              Ajouter au panier
            </button>
          </section>
        </div>
      </main>
    </div>
  );
}

export default BoutiqueVetement;
