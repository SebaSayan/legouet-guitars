import React from 'react';
import imgLaGiger1 from '../assets/img/img_0008.jpg';
import imgJazzFusion3 from '../assets/img/img_0040.jpg';
import imgMetalPrecision1 from '../assets/img/img_5736.jpg';
import imgStudio3 from '../assets/img/img_0031.jpg';
import imgRock3 from '../assets/img/img_0069.jpg';
import imgSupreme1 from '../assets/img/img_0001.jpg';
import imgUltime1 from '../assets/img/img_0007.jpg';
import imgCamoBlue1 from '../assets/img/img_0003.jpg';
import imgJoffreyLegouet1 from '../assets/img/JoffreyLegouet.jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';

const Home = () => {
    const altLaGiger = 'Basse La Giger';
    const altJazzFusion = 'Guitare Jazz Fusion rouge';
    const altMetalPrecision = 'Guitare Metal précision';
    const altStudio = 'Guitare Studio Blanche';
    const altRock = 'Guitare Rock Gold';
    const altSupreme = 'Guitare Suprême en titane';
    const altUltime = 'Guitare ULTIME corps en titane et manche aluminium vernis';
    const altCamoBlue = 'Guitare Camo Blue';
    const altJoffreyLegouet1 = 'Joffrey Legouet avec la basse La Giger'
    return (
        <div className="body">
            <Header />
            <section className='guitars'>
                <h1>Découvrez nos modèles sur mesure</h1>
                <div className='text-home'>
                    <p>Découvrez en images et en vidéos nos guitares et basses custom, conçues et fabriquées sur mesure dans notre atelier.</p>
                </div>
                <div className="img-container guitar-card">
                    <h2>La Giger</h2>
                    <NavLink to="/bass/la-giger"><img
                        className='card'
                        src={imgLaGiger1}
                        alt={altLaGiger}
                    />
                    </NavLink>
                    <div className='price-plus'>
                        <NavLink to="/bass/la-giger">Voir plus</NavLink>
                    </div>
                </div>
                <div className="img-container guitar-card">
                    <h2>Jazz Fusion</h2>
                    <NavLink to="/guitares/jazz-fusion"><img
                        className='card'
                        src={imgJazzFusion3}
                        alt={altJazzFusion}
                    />
                    </NavLink>
                    <div className='price-plus'>
                        <NavLink to="/guitares/jazz-fusion">Voir plus</NavLink>
                    </div>
                </div>
                <div className="img-container guitar-card">
                    <h2>Camo Blue</h2>
                    <NavLink to="/guitares/camo-blue"><img
                        className='card'
                        src={imgCamoBlue1}
                        alt={altCamoBlue}
                    />
                    </NavLink>
                    <div className="price-plus">
                        <NavLink to="/guitares/camo-blue">Voir plus</NavLink>
                    </div>
                </div>
                <div className="img-container guitar-card">
                    <h2>Métal précision</h2>
                    <NavLink to="/guitares/metal-precision"><img
                        className='card'
                        src={imgMetalPrecision1}
                        alt={altMetalPrecision}
                    />
                    </NavLink>
                    <div className="price-plus">
                        <NavLink to="/guitares/metal-precision">Voir plus</NavLink>
                    </div>
                </div>
                <div className="img-container guitar-card">
                    <h2>Studio</h2>
                    <NavLink to="/guitares/studio"><img
                        className='card'
                        src={imgStudio3}
                        alt={altStudio}
                    />
                    </NavLink>
                    <div className="price-plus">
                        <NavLink to="/guitares/studio">Voir plus</NavLink>
                    </div>
                </div>
                <div className="img-container guitar-card">
                    <h2>Rock</h2>
                    <NavLink to="/guitares/rock"><img
                        className='card'
                        src={imgRock3}
                        alt={altRock}
                    />
                    </NavLink>
                    <div className="price-plus">
                        <NavLink to="/guitares/rock">Voir plus</NavLink>
                    </div>
                </div>
                <div className="img-container guitar-card">
                    <h2>Suprême</h2>
                    <NavLink to="/guitares/supreme"><img
                        className='card'
                        src={imgSupreme1}
                        alt={altSupreme}
                    />
                    </NavLink>
                    <div className="price-plus">
                        <NavLink to="/guitares/supreme">Voir plus</NavLink>
                    </div>
                </div>

                <div className="img-container guitar-card">
                    <h2>ULTIME</h2>
                    <NavLink to="/guitares/ultime"><img
                        className='card'
                        src={imgUltime1}
                        alt={altUltime}
                    />
                    </NavLink>
                    <div className="price-plus">
                        <NavLink to="/guitares/ultime">Voir plus</NavLink>
                    </div>
                </div>
                <div className='img-container guitar-card'>
                    <h2>Monsieur Legouet</h2>
                    <img
                        className='card'
                        src={imgJoffreyLegouet1}
                        alt={altJoffreyLegouet1}
                    />
                </div>
            </section >
            <Footer />
        </div >
    );
};

export default Home;