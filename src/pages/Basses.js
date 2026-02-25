import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import imgLaGrinder1 from '../assets/img/img_0008.jpg';
import { NavLink } from 'react-router-dom';

const Bass = () => {
    const altLaGrinder = 'Basse La Grinder';
    return (
        <div className="body">
            <Header />
            <section className='bass'>
                <h1>Nos basses</h1>
                <div className='text-container'>
                    <p>Découvrez en images et vidéos nos basses électriques conçues dans notre atelier. Des basses pour professionnels en aluminium, mais aussi en titane, personnalisées et fabriquées sur mesure. </p>
                </div>
                <div className="img-container bass-card">
                    <h2>La Grinder</h2>
                    <NavLink to="/bass/la-grinder"><img
                        className='card'
                        src={imgLaGrinder1}
                        alt={altLaGrinder}
                    />
                    </NavLink>
                    <div className='price-plus'>
                        <NavLink to="/bass/la-grinder">Voir plus</NavLink>
                    </div>

                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Bass;