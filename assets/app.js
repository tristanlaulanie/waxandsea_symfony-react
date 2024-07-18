// assets/app.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Accueil from "./components/Accueil/Accueil";
import Boutique from "./components/Boutique/Boutique";
import BoutiqueAccessoire from "./components/Boutique/BoutiqueAccessoire";
import BoutiqueVetement from "./components/Boutique/BoutiqueVetement";
import SurMesure from "./components/SurMesure";
import Panier from "./components/Panier/Panier";
import PanierProduit from "./components/Panier/PanierProduit/PanierProduit";
import PanierCoordonnees from "./components/Panier/PanierCoordonnees/PanierCoordonnees";
import PanierLivraison from "./components/Panier/PanierLivraison/PanierLivraison";
import PanierPaiement from "./components/Panier/PanierPaiement/PanierPaiement";
import Contact from "./components/Contact";
import Connexion from "./components/Connexion";
import Enregistrement from "./components/Enregistrement"; 
import CGV from "./components/CGV";
import MentionsLegales from "./components/MentionsLegales";
import PolitiqueDeConfidentialite from "./components/PolitiqueDeConfidentialite";
import Footer from "./components/Footer";
// import { CartProvider } from "./js/context/CartContext";
import ProductDetail from "./components/ProductDetail/ProductDetail";


const rootElement = document.getElementById("app");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    // <CartProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/boutique" element={<Boutique />} />
        <Route path="/boutique/accessoire" element={<BoutiqueAccessoire />} />
        <Route path="/boutique/vetement" element={<BoutiqueVetement />} />
        <Route path="/boutique/:name" element={<ProductDetail />} />
        <Route path="/sur-mesure" element={<SurMesure />} />
        <Route path="/panier" element={<Panier />} />
        <Route path="/panier/produit" element={<PanierProduit />} />
        <Route path="/panier/coordonnees" element={<PanierCoordonnees />} />
        <Route path="/panier/livraison" element={<PanierLivraison />} />
        <Route path="/panier/paiement" element={<PanierPaiement />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/enregistrement" element={<Enregistrement />} />
        <Route path="/cgv" element={<CGV />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/politique-de-confidentialite" element={<PolitiqueDeConfidentialite />} />
      </Routes>
      <Footer />
    </Router>
    // </CartProvider>
  );
}
