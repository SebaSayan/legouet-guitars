import React from 'react';
import imgJazzFusion3 from '../assets/img/img_0040.jpg';
import imgMetalPrecision1 from '../assets/img/img_5736.jpg';
import imgStudio3 from '../assets/img/img_0031.jpg';
import imgRock3 from '../assets/img/img_0069.jpg';
import imgSupreme1 from '../assets/img/img_0001.jpg';
import imgUltime1 from '../assets/img/img_0007.jpg';
import imgCamoBlue1 from '../assets/img/img_0003.jpg';
import imgIronPlague1 from '../assets/img/img_0025.jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';

const Guitars = () => {
    const altJazzFusion = 'Guitare Jazz Fusion rouge';
    const altMetalPrecision = 'Guitare Metal précision';
    const altStudio = 'Guitare Studio Blanche';
    const altRock = 'Guitare Rock Gold';
    const altSupreme = 'Guitare Suprême en titane';
    const altUltime = 'Guitare ULTIME corps en titane et manche aluminium vernis';
    const altCamoBlue = 'Guitare Camo Blue';
    const altIronPlague = 'Guitare Iron Plague noire';
    return (
        <div className="body">
            <Header />
            <section className='guitars'>
                <h1>Nos guitares électriques</h1>
                <div className='text-container'>
                    <p>Découvrez en image et vidéo nos guitares électriques conçues dans notre atelier. Des guitares pour professionnels en aluminium mais aussi en titane personnalisées et fabriquées sur mesure. </p>
                </div>
                <h2>Jazz Fusion</h2>
                <div className="img-container">
                    <NavLink to="/guitares/jazz-fusion"><img
                        className='card'
                        src={imgJazzFusion3}
                        alt={altJazzFusion}
                    />
                    </NavLink>
                </div>
                <h2>Métal précision</h2>
                <div className="img-container">
                    <NavLink to="/guitares/metal-precision"><img
                        className='card'
                        src={imgMetalPrecision1}
                        alt={altMetalPrecision}
                    />
                    </NavLink>
                </div>
                <h2>Studio</h2>
                <div className="img-container">
                    <NavLink to="/guitares/studio"><img
                        className='card'
                        src={imgStudio3}
                        alt={altStudio}
                    />
                    </NavLink>
                </div>
                <h2>Rock</h2>
                <div className="img-container">
                    <NavLink to="/guitares/rock"><img
                        className='card'
                        src={imgRock3}
                        alt={altRock}
                    />
                    </NavLink>
                </div>
                <h2>Suprême</h2>
                <div className="img-container">
                    <NavLink to="/guitares/supreme"><img
                        className='card'
                        src={imgSupreme1}
                        alt={altSupreme}
                    />
                    </NavLink>
                </div>

                <h2>ULTIME</h2>
                <div className="img-container">
                    <NavLink to="/guitares/ultime"><img
                        className='card'
                        src={imgUltime1}
                        alt={altUltime}
                    />
                    </NavLink>
                </div>
                <h2>Camo Blue</h2>
                <div className="img-container">
                    <NavLink to="/guitares/camo-blue"><img
                        className='card'
                        src={imgCamoBlue1}
                        alt={altCamoBlue}
                    />
                    </NavLink>
                </div>
                <h2>Iron Plague</h2>
                <div className="img-container">
                    <NavLink to="/guitares/iron-plague"><img
                        className='card'
                        src={imgIronPlague1}
                        alt={altIronPlague}
                    />
                    </NavLink>
                </div>
            </section >
            <Footer />
        </div >
    );
};

export default Guitars;