// assets/components/Contact.js
import React from 'react';
import '../styles/Contact/Contact.css';
import '../styles/Contact/ContactResponsive.css';

function Contact() {
    return (
      <div className="Contact">
        <div className="titre">
          <h1>Contact</h1>
          <h2>Envoyez moi un message.</h2>
        </div>
        <form>
          <container className="contact_inputs">
            <span className="contact_inputs_row_1">
              <div>
                <input type="text" id="name" name="user_name" placeholder="Nom" />
              </div>
              <div>
                <input
                  type="text"
                  id="surname"
                  name="user_surname"
                  placeholder="Prenom"
                />
              </div>
            </span>
            <span className="contact_inputs_row_2">
              <div>
                <input
                  type="email"
                  id="mail"
                  name="user_mail"
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  type="tel"
                  id="tel"
                  name="user_tel"
                  placeholder="Telephone"
                />
              </div>
            </span>
            <div className="contact_input_row_3">
              <input
                type="text"
                id="sujet"
                name="user_sujet"
                placeholder="Objet du message"
              />
            </div>
          </container>
          <div>
            <textarea
              id="msg"
              name="user_message"
              placeholder="Votre message"
              rows="8"
              cols="88"
            ></textarea>
          </div>
          <div className="contact_buttons">
            <div className="radio">
              <input type="radio" />
              <label htmlFor="RGPD">RGPD</label>
            </div>
            <div className="button">
              <button id="button_msg" type="submit">
                J'ENVOIE MON MESSAGE
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
  
  export default Contact;
