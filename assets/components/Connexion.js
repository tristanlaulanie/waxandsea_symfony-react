import React from 'react';
// CSS
import '../styles/Connexion/Connexion.css';
import '../styles/Connexion/ConnexionResponsive.css';

function Connexion() {
  return (
    <div className="Connexion">
      <main>
      <section className="connexion-frame">
      {/* <h1>Connexion</h1> */}
      <form action="#" method="post">
          <div>
              <label htmlFor="username" className='username'>Nom d'utilisateur:</label> <br />
              <input type="text" id="username" name="username" required />
          </div>
          <div>
              <label htmlFor="password" className='password'>Mot de Passe:</label> <br />
              <input type="password" id="password" name="password" required />
          </div>
          <div>
              <input id="connexion-btn" type="submit" value="Se connecter" />
          </div>
      </form>
    </section>
    </main>
    </div>
  );
}

export default Connexion;