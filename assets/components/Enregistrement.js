import React, { useState } from "react";
import "../styles/Enregistrement/Enregistrement.css";

function Enregistrement() {
  // États pour stocker la valeur des champs
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [street, setStreet] = useState('');
  const [streetnumber, setStreetnumber] = useState('');
  const [town, setTown] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [country, setCountry] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  

  // États séparés pour les messages d'erreur de chaque champ
  const [firstnameError, setFirstnameError] = useState('');
  const [lastnameError, setLastnameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [telephoneError, setTelephoneError] = useState('');
  const [streetError, setStreetError] = useState('');
  const [streetnumberError, setStreetnumberError] = useState('');
  const [townError, setTownError] = useState('');
  const [zipcodeError, setZipcodeError] = useState('');
  const [countryError, setCountryError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordConfirmationError, setPasswordConfirmationError] = useState('');

  // Gestionnaire pour le changement du champ firstname
  const handleFirstnameChange = (event) => {
    // Récupère la valeur actuelle du champ
    const value = event.target.value;
    // Regex pour valider que la chaîne contient uniquement des lettres
    const regex = /^[A-Za-z]+$/;

    // Teste si la valeur correspond au regex
    if (regex.test(value)) {
      // Si oui, pas d'erreur
      setFirstnameError('');
    } else {
      // Sinon, affiche un message d'erreur

      setFirstnameError(value ? 'Uniquement des lettres' : '');
    
    }

    // Met à jour l'état avec la nouvelle valeur de firstname
    setFirstname(value);
  };

  const handleLastnameChange = (event) => {
    // Récupère la valeur actuelle du champ
    const value = event.target.value;
    // Regex pour valider que la chaîne contient uniquement des lettres
    const regex = /^[A-Za-z]+$/;

    // Teste si la valeur correspond au regex
    if (regex.test(value)) {
      // Si oui, pas d'erreur
      setLastnameError('');
    } else {
      // Sinon, affiche un message d'erreur
      setLastnameError(value ? 'Uniquement des lettres' : '');
    }

    // Met à jour l'état avec la nouvelle valeur de lastname
    setLastname(value);
  };

  const handleEmailChange = (event) => {
    // Récupère la valeur actuelle du champ
    const value = event.target.value;
    // Regex pour valider l'email
    const regex = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;

    // Teste si la valeur correspond au regex
    if (regex.test(value)) {
      // Si oui, pas d'erreur
      setEmailError('');
    } else {
      // Sinon, affiche un message d'erreur
      setEmailError(value ? 'Adresse email invalide' : '');
    }

    // Met à jour l'état avec la nouvelle valeur de lastname
    setEmail(value);
  }

  const handleTelephoneChange = (event) => {
    // Récupère la valeur actuelle du champ
    const value = event.target.value;
    // Regex pour valider que la chaîne contient uniquement des chiffres
    const regex = /^[0-9]+$/;

    // Teste si la valeur correspond au regex
    if (regex.test(value)) {
      // Si oui, pas d'erreur
      setTelephoneError('');
    } else {
      // Sinon, affiche un message d'erreur
      setTelephoneError(value ? 'Uniquement des chiffres' : '');
    }

    // Met à jour l'état avec la nouvelle valeur de lastname
    setTelephone(value);
  }

  const handleStreetChange = (event) => {
    // Récupère la valeur actuelle du champ
    const value = event.target.value;
    // Regex pour valider que la chaîne contient uniquement des lettres.
    const regex = /^[A-Za-z]+$/;

    // Teste si la valeur correspond au regex
    if (regex.test(value)) {
      // Si oui, pas d'erreur
      setStreetError('');
    } else {
      // Sinon, affiche un message d'erreur
      setStreetError(value ? 'Uniquement des lettres' : '');
    }

    // Met à jour l'état avec la nouvelle valeur de street
    setStreet(value);
  }

  const handleStreetnumberChange = (event) => {
    // Récupère la valeur actuelle du champ
    const value = event.target.value;
    // Regex pour valider que la chaîne contient uniquement des chiffres
    const regex = /^[0-9]+$/;

    // Teste si la valeur correspond au regex
    if (regex.test(value)) {
      // Si oui, pas d'erreur
      setStreetnumberError('');
    } else {
      // Sinon, affiche un message d'erreur
      setStreetnumberError(value ? 'Uniquement des chiffres' : '');
    }

    // Met à jour l'état avec la nouvelle valeur de streetnumber
    setStreetnumber(value);
  }

  const handleTownChange = (event) => {
    // Récupère la valeur actuelle du champ
    const value = event.target.value;
    // Regex pour valider que la chaîne contient uniquement des lettres
    const regex = /^[A-Za-z]+$/;

    // Teste si la valeur correspond au regex
    if (regex.test(value)) {
      // Si oui, pas d'erreur
      setTownError('');
    } else {
      // Sinon, affiche un message d'erreur
      setTownError(value ? 'Uniquement des lettres' : '');
    }

    // Met à jour l'état avec la nouvelle valeur de town
    setTown(value);
  }

  const handleZipcodeChange = (event) => {
    // Récupère la valeur actuelle du champ
    const value = event.target.value;
    // Regex pour valider que la chaîne contient uniquement des chiffres
    const regex = /^[0-9]+$/;

    // Teste si la valeur correspond au regex
    if (regex.test(value)) {
      // Si oui, pas d'erreur
      setZipcodeError('');
    } else {
      // Sinon, affiche un message d'erreur
      setZipcodeError(value ? 'Uniquement des chiffres' : '');
    }

    // Met à jour l'état avec la nouvelle valeur de zipcode

    setZipcode(value);
  }
  
  const handleCountryChange = (event) => {
    // Récupère la valeur actuelle du champ
    const value = event.target.value;
    // Regex pour valider que la chaîne contient uniquement des lettres
    const regex = /^[A-Za-z]+$/;

    // Teste si la valeur correspond au regex
    if (regex.test(value)) {
      // Si oui, pas d'erreur
      setCountryError('');
    } else {
      // Sinon, affiche un message d'erreur
      setCountryError(value ? 'Uniquement des lettres' : '');
    }

    // Met à jour l'état avec la nouvelle valeur de country
    setCountry(value);
  }

  const handlePasswordChange = (event) => {
    // Récupère la valeur actuelle du champ
    const value = event.target.value;
  
    // Regex pour valider le mot de passe avec au moins une majuscule, une minuscule, un chiffre,
    // un caractère spécial ou de ponctuation, et une longueur minimum de 8 caractères
    const regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=.,;:!?-]).{8,}$/;
  
    // Teste si la valeur correspond au regex
    if (regex.test(value)) {
      // Si oui, pas d'erreur
      setPasswordError('');
    } else {
      // Sinon, affiche un message d'erreur
      setPasswordError(value ? 'Doit contenir au moins 8 caractères, dont une majuscule, une minuscule, un chiffre et un caractère spécial ou de ponctuation' : '');
    }
  
    // Met à jour l'état avec la nouvelle valeur de password
    setPassword(value);
    
    // Vérifie également si les mots de passe correspondent
    if (passwordConfirmation && value !== passwordConfirmation) {
      setPasswordConfirmationError('Mots de passes différents');
    } else {
      setPasswordConfirmationError('');
    }
  }


  // Gestionnaire pour la soumission du formulaire
  const handleSubmit = (event) => {
    // Empêche le rechargement de la page lors de la soumission du formulaire
    event.preventDefault();
    // Ici, vous pouvez ajouter la logique de soumission du formulaire
  };

   // Gestionnaire pour le changement du champ de confirmation du mot de passe
   const handlePasswordConfirmationChange = (event) => {
    const value = event.target.value;
    setPasswordConfirmation(value);

    if (value !== password) {
      setPasswordConfirmationError('Mots de passes différents');
    } else {
      setPasswordConfirmationError('');
    }
  };
  
  return (
    <div className="Enregistrement">
      <h1>Enregistrement</h1>
      <form onSubmit={handleSubmit}>
        {/* PRENOM */}
        <label>
          {/* Champ de texte pour le prénom avec gestionnaire onChange */}
          <input 
            type="text" 
            name="firstname" 
            placeholder="Prénom"
            value={firstname}
            onChange={handleFirstnameChange}
          />
          {/* Affiche le message d'erreur si présent avec la classe pour le style rouge */}
          {firstnameError && <div className="error-message">{firstnameError}</div>}
        </label>
        {/* NOM */}
        <label>
          <input 
            type="text" 
            name="lastname" 
            placeholder="Nom"
            value={lastname}
            onChange={handleLastnameChange} 
            />
            {lastnameError && <div className="error-message">{lastnameError}</div>}
        </label>
        {/* EMAIL */}
        <label>
          <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          />
          {emailError && <div className="error-message">{emailError}</div>}
        </label>
        {/* TELEPHONE */}
        <label>
          <input 
            type="text" 
            name="telephone"
            placeholder="Telephone"
            value={telephone}
            onChange={handleTelephoneChange}
            />
            {telephoneError && <div className="error-message">{telephoneError}</div>}
        </label>
        {/* NOM DE RUE */}
        <label>
          <input
          type="text"
          name="street"
          placeholder="Nom de rue"
          value={street}
          onChange={handleStreetChange}
          />
          {streetError && <div className="error-message">{streetError}</div>}
        </label>
        {/* NUMERO DE RUE */}
        <label>
          <input 
            type="text" 
            name="streetnumber" 
            placeholder="Numero de rue"
            value={streetnumber}
            onChange={handleStreetnumberChange}
            />
            {streetnumberError && <div className="error-message">{streetnumberError}</div>}
        </label>
        {/* VILLE */}
        <label>
          <input 
            type="text" 
            name="town" 
            placeholder="Ville"
            value={town}
            onChange={handleTownChange}
            />
            {townError && <div className="error-message">{townError}</div>}
        </label>
        {/* CODE POSTAL */}
        <label>
        <input 
          type="text"  
          name="zipcode" 
          placeholder="Code postal"
          value={zipcode}
          onChange={handleZipcodeChange}
        />
        {zipcodeError && <div className="error-message">{zipcodeError}</div>}  
        </label>
        {/* PAYS */}
        <label>
          <input
          type="text"
          name="country"
          placeholder="Pays"
          value={country}
          onChange={handleCountryChange}
          />
          {countryError && <div className="error-message">{countryError}</div>}
        </label>
        {/* MOT DE PASSE */}
        <div id="password-field">
          <label>
          <input  
            type="password" 
            name="password"
            placeholder="Mot de passe"
            value={password}
            onChange={handlePasswordChange}
            />
            {passwordError && <div className="error-message">{passwordError}</div>}
          </label>
          <label>
          <input 
            type="password" 
            name="password-confirmation" 
            placeholder="Confirmez le mot de passe"
            value={passwordConfirmation}
            onChange={handlePasswordConfirmationChange}
            />
            {passwordConfirmationError && <div className="error-message">{passwordConfirmationError}</div>}
          </label>
          <button id="signin-button" type="submit">M'enregistrer</button>
        </div>
      </form>
    </div>
  );
}

export default Enregistrement;