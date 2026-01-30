// import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const FooterItem = ({ icon, children }) => (
//     <div className="footer-item">
//         <FontAwesomeIcon className="footer-ico" icon={icon} />
//         {children}
//     </div>
// );

// const Footer = () => (
//     <footer>
//         <div className="logo-footer"></div>
//         <FooterItem icon={faLocationDot}>
//             <a href="https://www.google.com/maps/place/LF+Industrie/@43.7161455,7.2420233,19.33z/data=!4m6!3m5!1s0x12cdd02000ba1ddd:0x2564a3fda8bd3e2b!8m2!3d43.7162656!4d7.2420722!16s%2Fg%2F11b6dnqjl4?entry=ttu" title="Cliquez ici pour ouvrir Google Maps" target="_blank" rel="noopener noreferrer">390 Chemin des sablières - 06100 Nice</a>
//         </FooterItem>
//         <FooterItem icon={faEnvelope}>
//             <a href="mailto:lf.ingenierie@wanadoo.fr" title="Cliquez ici pour ouvrir votre gestionnaire d'email par defaut">lf.ingenierie@wanadoo.fr</a>
//         </FooterItem>
//         <FooterItem icon={faPhone}>
//             <a href="tel:0619501380" title="Cliquez ici pour ouvrir votre gestionnaire d'appel par defaut">06 19 50 13 80</a>
//         </FooterItem>
//         <div className="footer-bottom">
//             <NavLink to="/mentions-legales">Mentions légales</NavLink>
//         </div>
//     </footer>
// );

// export default Footer;

import {
    faEnvelope,
    faLocationDot,
    faPhone
} from '@fortawesome/free-solid-svg-icons';
import {
    faFacebook,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import imgInstagram from '../assets/img/Instagram_icon.png'
import imgYoutube from '../assets/img/youtube_icon.png'
import imgFacebook from '../assets/img/Facebook_Logo_2023.png'

const FooterItem = ({ icon, children }) => (
    <div className="footer-item">
        <FontAwesomeIcon className="footer-ico" icon={icon} />
        {children}
    </div>
);

const Footer = () => (
    <footer>
        <div className="logo-footer"></div>

        {/* CONTENU FOOTER */}
        <div className="footer-content">

            {/* COLONNE GAUCHE */}
            <div className="footer-left">
                <FooterItem icon={faLocationDot}>
                    <a
                        href="https://www.google.com/maps/place/LF+Industrie/@43.7161455,7.2420233,19.33z"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        390 Chemin des sablières - 06100 Nice
                    </a>
                </FooterItem>

                <FooterItem icon={faEnvelope}>
                    <a href="mailto:lf.ingenierie@wanadoo.fr">
                        lf.ingenierie@wanadoo.fr
                    </a>
                </FooterItem>

                <FooterItem icon={faPhone}>
                    <a href="tel:0619501380">
                        06 19 50 13 80
                    </a>
                </FooterItem>
            </div>

            {/* COLONNE DROITE */}
            <div className="footer-right">
                <h3>Suivez-nous</h3>
                <div className="social-right">
                    <a
                        href="https://www.facebook.com/share/17fufwemZz/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="facebook"
                        aria-label="Facebook"
                    >
                        <img
                            src={imgFacebook}
                            alt="Facebook"
                            className="facebook"
                        />
                    </a>

                    <a
                        href="https://www.instagram.com/legouet_guitares/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="instagram"
                        aria-label="Instagram"
                    >
                        <img src={imgInstagram} alt="Instagram" />
                    </a>

                    <a
                        href="https://www.youtube.com/@legouet-guitares/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="youtube"
                        aria-label="YouTube"
                    >
                        <img src={imgYoutube} alt="YouTube" />
                    </a>
                </div>

            </div>
        </div>

        {/* BAS DE FOOTER */}
        <div className="footer-bottom">
            <NavLink to="/mentions-legales">Mentions légales</NavLink>
        </div>
    </footer>
);

export default Footer;
