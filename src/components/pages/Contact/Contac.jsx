import { ChooseMe } from '../../Layouts/ChooseME/ChooseMe';
import './Contac.css'

export const Contact = () => {
  return (
    <>
    <div className="contact-container">
      <h1 className="contact-title">Contacto</h1>

      <div className="contact-links">
        <p>Si deseas ponerte en contacto conmigo, puedes elegir entre:</p>

        <a
          href="https://wa.me/3248590345"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-link"
        >
          <i className="fab fa-whatsapp"></i>
        </a>

        <a
          href="mailto:sarchiandres63@gmail.com?subject=Consulta&body=Hola,%20me%20gustaría%20hacer%20una%20consulta."
          className="email-link"
        >
          <i className="fas fa-envelope"></i>
        </a>


        <a
          href="https://www.linkedin.com/in/andres-felipe-sarchi-valencia-836b5b353"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-link"
        >
          <i className="fab fa-linkedin"></i>
        </a>


        <a
          href="https://www.facebook.com/share/15pSJxMADQ/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="facebook-link"
        >
          <i className="fab fa-facebook-f"></i>
        </a>


        <a
          href="https://www.instagram.com/andres_sarchi?igsh=MXRwanVvemEwcXdrOA%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-link"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      
    </div>
    <ChooseMe/>
    </>
  );
};
