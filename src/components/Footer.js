import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const FooterItem = ({ icon, children }) => (
    <div className="footer-item">
        <FontAwesomeIcon className="footer-ico" icon={icon} />
        {children}
    </div>
);

const Footer = () => (
    <footer>
        <div className="logo-footer"></div>
        <FooterItem icon={faLocationDot}>
            <a href="https://www.google.com/maps/place/LF+Industrie/@43.7161455,7.2420233,19.33z/data=!4m6!3m5!1s0x12cdd02000ba1ddd:0x2564a3fda8bd3e2b!8m2!3d43.7162656!4d7.2420722!16s%2Fg%2F11b6dnqjl4?entry=ttu" title="Cliquez ici pour ouvrir Google Maps" target="_blank" rel="noopener noreferrer">12T Chemin des sablières - 06100 Nice</a>
        </FooterItem>
        <FooterItem icon={faEnvelope}>
            <a href="mailto:lf.ingenierie@wanadoo.fr" title="Cliquez ici pour ouvrir votre gestionnaire d'email par defaut">lf.ingenierie@wanadoo.fr</a>
        </FooterItem>
        <FooterItem icon={faPhone}>
            <a href="tel:0492413966" title="Cliquez ici pour ouvrir votre gestionnaire d'appel par defaut">04 92 41 39 66</a>
        </FooterItem>
    </footer>
);

export default Footer;