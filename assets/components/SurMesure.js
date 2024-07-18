// REACT IMPORT
import React from "react";

// CSS
import "../styles/SurMesure/SurMesure.css";
import "../styles/SurMesure/SurMesureResponsive.css";

// FONTAWESOME IMPORT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function SurMesure() {
  return (
    <div className="SurMesure">
      <h1 id="product_main_title">Sur Mesure</h1>
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
            <p id="product_description_SurMesure">
              <span id="product_description_container">
                Description :<br></br> <br></br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum lacinia, lacus ut rutrum accumsan, <br></br>
                lectus dolor eleifend lacus, id finibus ex lorem id urna.
                Integer laoreet vestibulum molestie. <br></br>
                In hac habitasse platea dictumst. Nulla facilisi. Integer nunc
                dolor, sodales eget.
              </span>
            </p>
          </div>
        </section>
        <div id="product_colors_sizes_quantity_cart">
          <section id="product_colors_sizes">
            <div id="product_sizes">
              <h3 id="mensurations_title">Mensurations</h3>
              <form id="mensurations_form">
                <label>Mensuration 1 :</label>
                <input
                  type="number"
                  placeholder="cm"
                  min="0"
                  name="mensuration1"
                ></input>
                <label>Mensuration 2 :</label>
                <input
                  type="number"
                  placeholder="cm"
                  min="0"
                  name="mensuration2"
                ></input>
                <label>Mensuration 3 :</label>
                <input
                  type="text"
                  placeholder="cm"
                  min="0"
                  name="mensuration3"
                ></input>
                <label>Mensuration 4 :</label>
                <input
                  type="text"
                  placeholder="cm"
                  min="0"
                  name="mensuration4"
                ></input>
              </form>
            </div>
          </section>
          <section id="motifs_images">
            <h3>Motifs</h3>
            <div className="gallery">
              <img src="https://via.placeholder.com/80" alt="Image 1"></img>
              <img src="https://via.placeholder.com/80" alt="Image 2"></img>
              <img src="https://via.placeholder.com/80" alt="Image 3"></img>
              <img src="https://via.placeholder.com/80" alt="Image 4"></img>
              <img src="https://via.placeholder.com/80" alt="Image 5"></img>
              <img src="https://via.placeholder.com/80" alt="Image 6"></img>
              <img src="https://via.placeholder.com/80" alt="Image 7"></img>
              <img src="https://via.placeholder.com/80" alt="Image 8"></img>
              <img src="https://via.placeholder.com/80" alt="Image 9"></img>
              <img src="https://via.placeholder.com/80" alt="Image 10"></img>
              <img src="https://via.placeholder.com/80" alt="Image 11"></img>
              <img src="https://via.placeholder.com/80" alt="Image 12"></img>
              <img src="https://via.placeholder.com/80" alt="Image 13"></img>
              <img src="https://via.placeholder.com/80" alt="Image 14"></img>
              <img src="https://via.placeholder.com/80" alt="Image 15"></img>
            </div>
          </section>
          <section id="command_comments">
            <h3>Commentaire</h3>
            <textarea
              id="product_comments"
              placeholder="Laissez un commentaire concernant votre commande..."
            ></textarea>
          </section>
          <section id="product_quantity">
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
          </section>
          <section id="product_add-to-cart_SurMesure">
            <p>Total : XX €</p>
            <button id="product_add-to-cart_button">
              <i id="">
                <FontAwesomeIcon
                  className="product_add-to-cart_button_icon"
                  icon={faEnvelope}
                  size="lg"
                />
              </i>
              Envoyer ma demande
            </button>
          </section>
        </div>
      </main>
    </div>
  );
}

export default SurMesure;