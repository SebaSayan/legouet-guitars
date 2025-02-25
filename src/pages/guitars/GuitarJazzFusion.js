import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import imgJazzFusion1 from '../../assets/img/img_0050.jpg';
import imgJazzFusion2 from '../../assets/img/img_0062.jpg';
import imgJazzFusion3 from '../../assets/img/img_0040.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import BackButton from '../../components/BackButton';

const GuitarJazzFusion = () => {
    useEffect(() => {
        const element = document.getElementById("guitars");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }, []);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedAlt, setSelectedAlt] = useState(null);
    const altJazzFusion = 'Guitare Jazz Fusion rouge';
    const handleOpenModal = (image, alt) => {
        setSelectedImage(image);
        setSelectedAlt(alt);
        setModalIsOpen(true);
    }
    return (
        <div className='body'>
            <Header />
            <div className='guitars' id='guitars'>
                <BackButton />
                <h1>Jazz Fusion</h1>
                <div className="img-container">
                    <img
                        className='card'
                        src={imgJazzFusion1}
                        alt={altJazzFusion}
                        onClick={() => handleOpenModal(imgJazzFusion1, altJazzFusion)}
                        style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }}
                    />
                    <img
                        className='card'
                        src={imgJazzFusion2}
                        alt={altJazzFusion}
                        onClick={() => handleOpenModal(imgJazzFusion2, altJazzFusion)}
                        style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }}
                    />
                    <img
                        className='card'
                        src={imgJazzFusion3}
                        alt={altJazzFusion}
                        onClick={() => handleOpenModal(imgJazzFusion3, altJazzFusion)}
                        style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }}
                    />
                </div>

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
                <div className='caracteristiques'>
                    <div className="container">
                        <div className="cart">
                            <h2>Caractéristiques Jazz Fusion</h2>
                            <ul>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Diapason 25.5</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> 22 cases</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Radius 14 pouces</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Manche érable ondé vernis satiné</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Frette inox jescard medium jumbo</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Corps aluminium vernis</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Vibrato shaller vintage</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Sillet bronze</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Mécanique sperzel usa</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> 2 Micros Legouet simple format double impédance 14 kOhm type T</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> 2 boutons volume aluminium</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Volume cts 250k log</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Tone cts 250 linear</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Condensateur 0.33µF</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Straplock Dunlop</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='text-container'>
                    <p>Corps en aluminium vernis rouge, pickguard en alu vernis noir, manche en érable <strong>frettes inox</strong>, un vibrato <a href="https://www.thomann.de/fr/schaller_vintage_tremolo_3801_chrome.htm" target="_blank" rel="noopener noreferrer">Shaller Vintage Tremolo</a> et deux micros Legouet mini double bobinage (micros simple à haut niveau de sortie).</p>
                    <p>Une guitare parfaite pour un shred précis et endiablé. Son vibrato permettant de faire des "dive bomb"  mais aussi d'élever d'un ton sans se désacorder.</p>
                    <p>On peut passer en drop D ou changer d'accordage sans dificulté car elle n'a pas de sillet bloc corde.</p>
                    <p>Pour intervenir sur la tention des ressort, il suffit de dévisser le couvercle (opération qui se réalise seulement si on passe a un tirant plus élevé).</p>
                    <p>Poids = 3.400 Kg</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default GuitarJazzFusion;