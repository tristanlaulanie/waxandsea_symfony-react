import React, { useRef, useEffect } from "react";

// GLIDE
import Glide from "@glidejs/glide"; 
// CSS
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import "../../../styles/Accueil/Slider/Slider.css";
import "../../../styles/Accueil/Slider/SliderResponsive.css";

// 
// IMAGES
import tissus from "../../../images/tissus-wax.jpeg";
import mannequin from "../../../images/mannequin-bannière.png";
import cours from "../../../images/cours-de-couture.jpeg";
// 


// Définition d'un composant fonctionnel Slider
function Slider() {

  // Utilisation de useRef pour créer une référence à l'élément DOM du slider
  const glideRef = useRef(null);

  // useEffect est appelé après le rendu du composant pour initialiser le slider
  useEffect(() => {

    // Création d'une nouvelle instance de Glide pour le slider
    const glide = new Glide(glideRef.current, {
    
    // Configuration du type de slider comme carrousel
    type: "carousel",
    // Définit l'élément de départ à l'index 0
    startAt: 0,
    // Nombre d'éléments à afficher par vue
    perView: 1,
    // Durée de l'autoplay en millisecondes (1200ms)
    autoplay: 1200,
    // Permet de mettre en pause le slider lors du survol
    hoverpause: true,
    // Durée de l'animation entre les transitions (1500ms)
    animationDuration: 1500,
    // Espace entre les éléments du slider
    gap: 8,
    });

    // Montage du slider
    glide.mount();

    // Fonction de nettoyage appelée lors du démontage du composant pour détruire le slider
    return () => glide.destroy();

  // Le tableau vide signifie que cet effet ne dépend d'aucune valeur et ne s'exécutera qu'une fois
  }, []);

    return (
      <section className="carousel section-carrousel">
      <div id="carousel-box" className="glide" ref={glideRef}>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            <li className="glide__slide">
              <img
                className="carousel-img"
                src={mannequin}
                alt=""
              />
            </li>
            <li className="glide__slide">
              <img
                className="carousel-img"
                src={cours}
                alt=""
              />
            </li>
            <li className="glide__slide">
              <img
                className="carousel-img"
                src={tissus}
                alt=""
              />
            </li>
          </ul>
        </div>
        <div className="glide__arrows" data-glide-el="controls">
          <button id="side-arrow" className="glide__arrow glide__arrow--left" data-glide-dir="<">
          &lt; Prev
          </button>
          <button id="side-arrow" className="glide__arrow glide__arrow--right" data-glide-dir=">">
            Next &gt;
          </button>
        </div>
      </div>
      </section>
    );

  };

export default Slider;