import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="background-image">
            <Header />
            <section className='home'>
                <h1><strong>Fabrication  française</strong> de guitares électriques en aluminium.</h1>
                <div className='text-container'>
                    <p>Spécialiste en fabrication de <strong>guitares en titane, guitare en aluminium, manches en aluminium et d'accastillage titane</strong>, notre objectif est de répondre aux attentes du guitariste professionnel et de l'amateur passionné le plus exigeant, ciblant une qualité supérieure.</p>
                    <p>La particularité des guitares que nous réalisons tient en la combinaison de superalliages de métaux entièrement <strong>usinés dans la masse.</strong> Il n'y a aucune soudure.</p>
                    <p>ElIe est permise par notre maîtrise des techniques d'usinage, aquise et validée auprès de plusieurs secteurs de pointe de l'industrie, l'aéronautique en particulier.</p>
                    <p>Ce savoir-faire rigoureux, appliqué à des métaux sélectionnés pour leurs propriétés mécaniques et accoustiques, a été la base d'une production de modèles aux qualités sonores spécifiques, et potentialités élargies.</p>
                    <p>En outre, une passion pour le monde de la guitare dans toutes ses facettes permet de nous maintenir dans une tradition de lutherie moderne.</p>
                    <p>La prise en compte des techniques de jeu d'aujourd'hui rime avec confort et maniabilité accrus, impression ressentie avec nos instruments dès la première prise en main.</p>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Home;