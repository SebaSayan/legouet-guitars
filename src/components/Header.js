// import React from 'react';
// import Navbar from './Navbar';

// const Header = () => {
//     return (
//         <header>
//             <Navbar />
//             <div className='logo-title'>
//                 <div className="logo"></div>
//                 <div className='title'>Aerospace-grade guitars and basses</div>
//             </div>
//         </header>
//     );
// };

// export default Header;

import React from 'react';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import imgInstagram from '../assets/img/Instagram_icon.png';

const Header = () => {
    return (
        <header>
            <Navbar />

            <div className="header-bottom">

                {/* GAUCHE : LOGO + TITRE */}
                <div className="brand-left">
                    <div className="logo"></div>
                    <div className="title">
                        Aerospace-grade guitars and basses
                    </div>
                </div>

                {/* DROITE : RÉSEAUX */}
                <div className="social-right">
                    <a
                        href="https://www.facebook.com/share/17fufwemZz/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="facebook"
                        aria-label="Facebook"
                    >
                        <FontAwesomeIcon icon={faFacebook} />
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
                </div>

            </div>
        </header>
    );
};

export default Header;