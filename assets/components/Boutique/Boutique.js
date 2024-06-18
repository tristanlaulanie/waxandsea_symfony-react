// REACT IMPORT
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// CSS
import '../../styles/Boutique/Boutique.css';
import '../../styles/Boutique/BoutiqueResponsive.css';

// FONTAWESOME IMPORT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faArrowPointer } from "@fortawesome/free-solid-svg-icons";

function Boutique() {
  // Utilisation du Hook d'état pour créer une variable d'état `products`
  // initialisée avec un tableau vide. 
  // `setProducts` est la fonction qui permet de mettre à jour `products`: 
  const [products, setProducts] = React.useState([]);

  // Utilisation du Hook d'effet pour exécuter du code après le premier rendu du composant et après chaque mise à jour.
  // Dans ce cas, il s'exécute une seule fois après le premier rendu, car le tableau de dépendances est vide.
  useEffect(() => {
    // Appel à l'API serveur pour récupérer les produits.
    fetch("/api")
      .then((res) => res.json()) // Conversion de la réponse en JSON.
      .then((json) =>{
        // Mise à jour de l'état `products` avec les données récupérées.
        setProducts(json)
      });
   }, []); // Tableau de dépendances vide signifie que cet effet ne s'exécute qu'après le premier rendu.
  return (
    <div className="Boutique">
      <h1 id="main_title">Boutique</h1>
      <h1 id="shop_products_title">NOS PRODUITS EN BOUTIQUE</h1>
      <p className="shop_description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non
        tellus eu nulla imperdiet maximus in ac purus. <br></br>
        Vivamus consequat risus in tellus lacinia pulvinar.
      </p>
      <p className="shop_description">
        Suspendisse pellentesque pharetra turpis elementum elementum.
        Suspendisse id pretium mauris. Cras non magna at leo venenatis
        convallis. <br></br>
        Quisque sit amet blandit lectus. Ut quis tincidunt.
      </p>
      <p className="shop_description">
        Donec ac velit euismod, lobortis ante sit amet, malesuada neque. Aliquam
        congue ultrices semper. Suspendisse a magna nec neque <br></br>
        malesuada scelerisque. Nulla fermentum purus nec.
      </p>
      <h3 id="product-order-instruction">
        <i>
          <FontAwesomeIcon icon={faArrowPointer} flip="horizontal" />
        </i>
        Cliquez sur un des produits pour passer votre commande.
        <i id="product-order_cart-icon">
          <FontAwesomeIcon
            className="description_cart-icon add-product-to-cart"
            icon={faCartPlus}
            size="lg"
          />
        </i>
      </h3>
      <div className="images-shop">
        <div className="images-grid">
          {products.map((product) => (
            <div key={product.id} className="article_pic_title">
            <img src={product.image} alt="Pic"></img>
            <h2>{product.name}</h2>
            <Link to="/boutique/accessoire">
              <i>
                <FontAwesomeIcon
                  className="add-product-to-cart"
                  icon={faCartPlus}
                  size="xl"
                />
              </i>
            </Link>
          </div>
          ))}
        </div>
        <div className="images-flex">
          <div className="article_pic_title">
            <img src="https://picsum.photos/300?random=10" alt="Pic 10"></img>
            <h2>Bustier-Jupe</h2>
            <Link to="/boutique/vetement">
              <i>
                <FontAwesomeIcon
                  className="add-product-to-cart"
                  icon={faCartPlus}
                  size="xl"
                />
              </i>
            </Link>
          </div>
          <div className="article_pic_title">
            <img src="https://picsum.photos/300?random=11" alt="Pic 11"></img>
            <h2>Jupe gitane</h2>
            <Link to="/boutique/vetement">
              <i>
                <FontAwesomeIcon
                  className="add-product-to-cart"
                  icon={faCartPlus}
                  size="xl"
                />
              </i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Boutique;
