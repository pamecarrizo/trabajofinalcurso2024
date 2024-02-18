import React from "react";
import '../style/pages/ContactoPage.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import Maps from "../components/layout/Map";


const ContactoPage = (prop) => {
  return (
    <main className="contacto">
        <div className="parteizq">
          <h3>
            {" "}
            Podes ponerte en contacto directo con nosotros a través del siguiente formulario:
          </h3>
          <form action="https://formsubmit.co/pamecarrizo24@gmail.com" method="POST" className="formulario">
            <p>
              <label for="nombre">Nombre</label>
              <input type="text" name="Nombre" />
            </p>
            <p>
              <label for="email">Email</label>
              <input type="text" name="Email" />
            </p>
            <p>
              <label for="telefono">Teléfono</label>
              <input type="text" name="Teléfono" />
            </p>
            <p>
              <label for="mensaje">Mensaje</label>
              <textarea name="Mensaje"></textarea>
            </p>
            <p class="acciones">
              <input type="submit" value="Enviar " />

              <input type="hidden" name="_next" value="http://localhost:3000/contacto"/>
              <input type="hidden" name="_captcha" value="false"/>
            </p>
          </form>
        </div>
        <div className="parteder">
          <h3>Podes encontrarnos en la siguiente ubicación:</h3>
          <div class="direccion">
            <ul>
              <li><FontAwesomeIcon icon={faStore} /> Local 5, Patio Olmos</li>
              <li><FontAwesomeIcon icon={faLocationDot} /> Av. Vélez Sarsfield 361, Cba, Arg</li>
              <li><FontAwesomeIcon icon={faClock} /> Horario de atención 9:00am a 18:00pm</li>
            </ul>
          </div>
          <Maps/>
        </div>
    </main>
  );
};
export default ContactoPage;
