import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="body">
            <Header />
            <section className='home'>
                <h1><strong>Fabrication  française</strong> de guitares électriques en aluminium.</h1>
                <div className='text-container'>
                    <p>Spécialiste en fabrication de <strong>guitares en titane, guitare en aluminium, manches en aluminium et d'accastillage titane</strong>, notre objectif est de répondre aux attentes du guitariste professionnel et de l'amateur passionné le plus exigeant, en visant une qualité supérieure.</p>
                    <p>La particularité des guitares que nous réalisons réside dans la combinaison de superalliages de métaux entièrement <strong>usinés dans la masse.</strong> Il n'y a aucune soudure.</p>
                    <p>Cette réalisation est permise par notre maîtrise des techniques d'usinage, acquise et validée auprès de plusieurs secteurs de pointe de l'industrie, notamment l'aéronautique.</p>
                    <p>Ce savoir-faire rigoureux, appliqué à des métaux sélectionnés pour leurs propriétés mécaniques et acoustiques, a été la base d'une production de modèles aux qualités sonores spécifiques et aux potentialités élargies.</p>
                    <p>De plus, une passion pour le monde de la guitare dans toutes ses facettes nous permet de rester dans une tradition de lutherie moderne.</p>
                    <p>La prise en compte des techniques de jeu actuelles rime avec un confort et une maniabilité accrus, une impression ressentie avec nos instruments dès la première prise en main.</p>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Home;