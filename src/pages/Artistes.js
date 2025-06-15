import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Azelma1 from '../assets/img/azelma1.jpg';
import Azelma2 from '../assets/img/azelma2.jpg';
import SebastienGros from '../assets/img/sebastiengros.jpg';
import LogoInstagram from '../assets/img/instagram_icon.png.webp';
import LogoWWW from '../assets/img/logowww.jpg';
import LogoNeoGeo from '../assets/img/logo_neogeo.jpg';
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
                <div className="videoArtist">
                    <iframe src="https://www.youtube.com/embed/NGlgLXB52Ks?si=ROPli4EnAdIH63J_" title="Romain d'Azelma sur YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <img className='imgArtist azlema2' src={Azelma2} alt="Arthur Valerioti avec sa Legouet" />
                <div className="videoArtist">
                    <iframe src="https://www.youtube.com/embed/Tt_SbwucBo0?si=8CMSVB_2Dc87uOPj" title="Tristan d'Azelma sur YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                <h2>Sebastien Gros
                    <div className='logoWeb'>
                        <NavLink to='https://www.instagram.com/coxinhell/' target='_blank' title='Ouvrir CoxInHell sur Instagram'><img src={LogoInstagram} alt="Logo Instagram" width={45} /></NavLink>
                        <NavLink to='http://www.coxinhellstudio.com/' target='_blank' title='Ouvrir le site CoxInHell'><img src={LogoWWW} alt="Logo Internet" width={45} /></NavLink>
                    </div>
                </h2>
                <img className='imgArtist sebastienGros' src={SebastienGros} alt="Sebastien Gros avec sa Legouet" />

                <h2>NeoGeoFanatic
                    <div className='logoWeb'>
                        <NavLink to='https://www.instagram.com/neogeoguitarist/' target='_blank' title='Ouvrir NeoGeoFanatic sur Instagram'><img src={LogoInstagram} alt="Logo Instagram" width={45} /></NavLink>
                        <NavLink to='https://neogeofanatic.fr/' target='_blank' title='Ouvrir le site NeoGeoFanatic'><img src={LogoWWW} alt="Logo Internet" width={45} /></NavLink>
                    </div>
                </h2>
                <img className='imgArtist neoGeo' src={LogoNeoGeo} alt="Logo de NeoGeoFanatic" />
                <div className="videoArtist">
                    <iframe src="https://www.youtube.com/embed/kx_Dt1SsVr4?si=s3RqNaQHfloGzP5_" title="Présentation d'une Legouet par NeoGeoFanatic sur YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>



            </section >
            <Footer />
        </div >
    );
};

export default Artistes;