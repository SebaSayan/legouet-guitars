import React from 'react';
import Modal from 'react-modal';
import Header from '../components/Header';
import Footer from '../components/Footer';
import imgMancheAlu from '../assets/img/manche-alu.jpg';
import imgMancheBois from '../assets/img/manche-bois.jpg';
import imgMancheAlu2 from '../assets/img/manche-alu2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const APropos = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedAlt, setSelectedAlt] = useState(null);
    const altMancheAlu = 'Manche de guitare en aluminium';
    const altMancheAlu2 = 'Manches de guitare en aluminium';
    const altMancheBois = 'Manche de guitare en bois';

    const handleOpenModal = (image, alt) => {
        setSelectedImage(image);
        setSelectedAlt(alt);
        setModalIsOpen(true);
    }
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
            <section className='caracteristiques'>
                <h1>Fabrication de guitares personnalisés</h1>
                <div className="container">
                    <div className="cart">
                        <h2>Caractéristiques générales</h2>
                        <ul>
                            <li><FontAwesomeIcon className='icon' icon={faCheck} /> Design unique et configurations multiples.</li>
                            <li><FontAwesomeIcon className='icon' icon={faCheck} /> Disponible pour gauchers sans tarification supplémentaire.</li>
                            <li><FontAwesomeIcon className='icon' icon={faCheck} /> Corps, manches et accastillage entièrement usinés dans la masse dans nos ateliers.</li>
                            <li><FontAwesomeIcon className='icon' icon={faCheck} /> Conception, assemblage et mise au point dans nos ateliers.</li>
                            <li><FontAwesomeIcon className='icon' icon={faCheck} /> Micros élaborés et fabriqués en France.</li>
                            <li><FontAwesomeIcon className='icon' icon={faCheck} /> Sillet et string retainer usinés en bronze pour une meilleure tenue d'accord.</li>
                            <li><FontAwesomeIcon className='icon' icon={faCheck} /> Diapason de 25.5 pouces et radius du manche de 14 pouces.</li>
                            <li><FontAwesomeIcon className='icon' icon={faCheck} /> Guitares équipées <a href="https://www.jimdunlop.com/straplok-strap-retainers-dual-design-nickel/" target="_blank" rel="noopener noreferrer">d'attache-courroie "Strap lock"</a> et de <a href="http://www.sperzel.com/colors-finishes.php" target="_blank" rel="noopener noreferrer">mécaniques Sperzel 6X6</a>.</li>
                            <li><FontAwesomeIcon className='icon' icon={faCheck} /> Finitions de peinture et vernis au choix selon la gamme <a href="https://www.couleursral.fr/ral-design" target="_blank" rel="noopener noreferrer">Ral Design</a>.</li>
                        </ul>
                    </div>
                    <div className="cart">
                        <h2>Technologie de nos manches</h2>
                        <h3>Le manche "Infinite" usiné en <a href="https://www.thyssenkrupp-materials.ch/fr/downloads/fiches-techniques-aluminium" target="_blank" rel="noopener noreferrer">aluminium 6082</a> avec une touche inox rapportée</h3>
                        <ul>
                            <li><FontAwesomeIcon className='icon' icon={faCheck} /> Planimétrie rigoureuse.</li>
                            <li><FontAwesomeIcon className='icon' icon={faCheck} /> Poids = 790 grammes (le plus léger du monde).</li>
                            <li><FontAwesomeIcon className='icon' icon={faCheck} /> Robustesse (aucun risque de casser le manche pendant le transport).</li>
                            <li><FontAwesomeIcon className='icon' icon={faCheck} /> Spectre sonore élargi.</li>
                            <li><FontAwesomeIcon className='icon' icon={faCheck} /> Frettes de haute longévité grâce à leur matière fortement alliée, riche en chrome et en nickel (l'alliage des frettes en inox standard est plus ductile et tendre afin d'être travaillé par un luthier traditionnel).</li>
                            <li><FontAwesomeIcon className='icon' icon={faCheck} /> Ne nécessite aucun réglage.</li>
                            <li><FontAwesomeIcon className='icon' icon={faCheck} /> Stabilité exceptionnelle.</li>
                            <li><FontAwesomeIcon className='icon' icon={faCheck} /> Friction réduite entre la corde et la frette.</li>
                            <li><FontAwesomeIcon className='icon' icon={faCheck} /> Dynamique accrue.</li>
                            <li><FontAwesomeIcon className='icon' icon={faCheck} /> Aucune oxydation.</li>
                            <li><FontAwesomeIcon className='icon' icon={faCheck} /> Frettes de 1.6 mm de hauteur, usinées dans la touche (de nombreuses planimétries possibles).</li>
                            {/* <li className='red-list'><FontAwesomeIcon className='red-icon' icon={faXmark} /> Les frettes ne peuvent pas être remplacées.</li> */}
                        </ul>
                        <img
                            src={imgMancheAlu}
                            alt={altMancheAlu}
                            onClick={() => handleOpenModal(imgMancheAlu, altMancheAlu)}
                            style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }}
                        />
                    </div>
                    <div className="cart">
                        <h2>Le manche en aluminium "Light Weight", réalisé avec la même nuance d'aluminium, comporte une touche en aluminium et des frettes rapportées</h2>
                        <ul>
                            <li><FontAwesomeIcon className='icon' icon={faCheck} /> Poids : 800 grammes (hors mécaniques).</li>
                            <li><FontAwesomeIcon className='icon' icon={faCheck} /> Pas de truss rod.</li>
                            <li><FontAwesomeIcon className='icon' icon={faCheck} /> Sustain accru.</li>
                            <li><FontAwesomeIcon className='icon' icon={faCheck} /> Frettes en inox Jescar (1.19 x 2.64 mm).</li>
                            <li><FontAwesomeIcon className='icon' icon={faCheck} /> Possibilité de refrettage.</li>
                            <li><FontAwesomeIcon className='icon' icon={faCheck} /> Stabilité exceptionnelle.</li>
                            <li><FontAwesomeIcon className='icon' icon={faCheck} /> Tête de manche incassable.</li>
                        </ul>
                        <img
                            src={imgMancheAlu2}
                            alt={altMancheAlu2}
                            onClick={() => handleOpenModal(imgMancheAlu2, altMancheAlu2)}
                            style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }}
                        />
                    </div>
                    <div className="cart">
                        <h2>Le Manche en Bois</h2>
                        <ul>
                            <li><FontAwesomeIcon className='icon' icon={faCheck} /> Plusieurs essences de bois disponibles.</li>
                            <li><FontAwesomeIcon className='icon' icon={faCheck} /> Poids moyen : 550g.</li>
                            <li><FontAwesomeIcon className='icon' icon={faCheck} /> Les manches sont réalisés en une seule pièce (type Fender vintage).</li>
                            <li><FontAwesomeIcon className='icon' icon={faCheck} /> Possibilité d'avoir une touche rapportée.</li>
                            <li><FontAwesomeIcon className='icon' icon={faCheck} /> Truss Rod double action de type Music Man.</li>
                            <li><FontAwesomeIcon className='icon' icon={faCheck} /> Frettes en inox de type medium jumbo.</li>
                            <li><FontAwesomeIcon className='icon' icon={faCheck} /> Vernis satiné pour une meilleure glisse.</li>
                        </ul>
                        <img
                            src={imgMancheBois}
                            alt={altMancheBois}
                            onClick={() => handleOpenModal(imgMancheBois, altMancheBois)}
                            style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }}
                        />
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={() => setModalIsOpen(false)}
                            contentLabel="Image Modal"
                        >
                            <img
                                src={selectedImage}
                                alt={selectedAlt}
                                onClick={() => setModalIsOpen(false)}
                                style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }}
                            />
                        </Modal>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default APropos;