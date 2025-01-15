import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Azelma1 from '../assets/img/Azelma1.jpg';
import Azelma2 from '../assets/img/Azelma2.jpg';
import SebastienGros from '../assets/img/SebastienGros.jpg';
import LogoInstagram from '../assets/img/Instagram_icon.png.webp';
import LogoWWW from '../assets/img/logoWWW.jpg';
import { NavLink } from 'react-router-dom';

const Artistes = () => {
    return (
        <div className="body">
            <Header />
            <section className='artistes'>
                <h1>Voici les artistes qui nous font confiance</h1>
                <h2>Azelma
                    <div className='logoWeb'>
                        <NavLink to='https://www.instagram.com/azelma_official/' target='_blank' title='Ouvrir Azelma sur Instagram'><img src={LogoInstagram} alt="Logo Instagram" width={45} /></NavLink>
                        <NavLink to='https://azelmaofficial.com/' target='_blank' title='Ouvrir le site Azelma'><img src={LogoWWW} alt="Logo Internet" width={45} /></NavLink>
                    </div>
                </h2>
                <img className='imgArtist azelma1' src={Azelma1} alt="Romain Viale avec sa Legouet" />
                <img className='imgArtist azlema2' src={Azelma2} alt="Arthur Valerioti avec sa Legouet" />

                <h2>Sebastien Gros
                    <div className='logoWeb'>
                        <NavLink to='https://www.instagram.com/coxinhell/' target='_blank' title='Ouvrir CoxInHell sur Instagram'><img src={LogoInstagram} alt="Logo Instagram" width={45} /></NavLink>
                        <NavLink to='http://www.coxinhellstudio.com/' target='_blank' title='Ouvrir le site CoxInHell'><img src={LogoWWW} alt="Logo Internet" width={45} /></NavLink>
                    </div>
                </h2>
                <img className='imgArtist sebastienGros' src={SebastienGros} alt="Sebastien Gros avec sa Legouet" />
            </section>
            <Footer />
        </div>
    );
};

export default Artistes;