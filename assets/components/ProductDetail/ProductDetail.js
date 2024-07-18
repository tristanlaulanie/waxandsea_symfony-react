// REACT IMPORT
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { useCart } from "../../js/context/CartContext";

// CSS
import "../../styles/Boutique/BoutiqueAccessoire/BoutiqueAccessoire.css";
import "../../styles/Boutique/BoutiqueAccessoire/BoutiqueAccessoireResponsive.css";

// FONTAWESOME IMPORT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faCheck } from "@fortawesome/free-solid-svg-icons";

function ProductDetail() {
  const { name } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  // const { dispatch } = useCart();

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((json) => {
        const formattedName = name.replace(/-/g, ' ');
        const product = json.find((p) => p.name.toLowerCase() === formattedName);
        setProduct(product);
      });
  }, [name]);

  if (!product) return <div>Loading...</div>;

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity } });
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="BoutiqueAccessoire">
      <h1 id="product_main_title-detail">{product.name}</h1>
      <main id="product_main-container-detail">
        <section id="product_images_description-detail">
          <div id="product_images-detail">
            <img
              id="product_main_image"
              src={product.image}
              alt={product.name}
            ></img>
            <div id="product_side_images">
              <img
                src={product.image}
                alt="side pic"
              ></img>
              <img
                src={product.image}
                alt="side pic"
              ></img>
            </div>
          </div>
          <div id="product_name_price_description-detail">
            <h2>{product.name}</h2>
            <p id="product_price"> Prix : {product.price} €</p>
            <div id="product_description">
              <div id="product_description_container">
                Description de l'accessoire :<br></br> <br></br>
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
        <div id="product_colors_sizes_quantity_cart-detail">
          <section id="product_colors_sizes-detail">
            <div id="product_colors">
              {/* <h3> Couleurs disponibles</h3> */}
              <h4>Choisissez votre couleur :</h4>
              <div id="product_colors_list">
                {['blue', 'yellow', 'green', 'red', 'pink', 'purple'].map(color => (
                  <div
                    key={color}
                    className={`product_color product_color_${color} ${selectedColor === color ? 'selected' : ''}`}
                    onClick={() => handleColorSelect(color)}
                  >
                    {selectedColor === color && (
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="fa-check"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div id="accessoire_product_sizes">
              <h3>Choisissez la dimension</h3>
              <select name="sizes" id="sizes-select">
                <option id="sizes-select_option" value="choose">
                  Dimensions :
                </option>
                <option value="small">Petit</option>
                <option value="medium">Moyen</option>
                <option value="large">Grand</option>
              </select>
            </div>
          </section>
          <section id="accessoire_product_quantity">
            <label id="product_quantity_label" htmlFor="quantity">
              Quantité :
            </label>
            <input
              id="product_quantity_input"
              type="number"
              name="quantity"
              min="1"
              max="10"
              value={quantity}
              onChange={e => handleQuantityChange(Number(e.target.value))}
            ></input>
          </section>
          <section id="accessoire_product_add-to-cart">
            <p>Total : {product.price * quantity} €</p>
            <button
              id="accessoire_product_add-to-cart_button"
              onClick={handleAddToCart}
            >
              <FontAwesomeIcon
                className="accessoire_product_add-to-cart_button_icon"
                icon={faCartPlus}
                size="lg"
              />
              Ajouter au panier
            </button>
          </section>
        </div>
      </main>
    </div>
  );
}

export default ProductDetail;
