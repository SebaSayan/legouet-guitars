import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import imgStudio1 from '../../assets/img/img_0029.jpg';
import imgStudio2 from '../../assets/img/img_0039.jpg';
import imgStudio3 from '../../assets/img/img_0031.jpg';
import imgVignette1 from '../../assets/img/vignette1.jpg';
import videoGuitar from '../../assets/video/VID-20221221-WA0000.mp4';
import Header from '../../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../components/Footer';
import ReactPlayer from 'react-player';
import BackButton from '../../components/BackButton';

const GuitarStudio = () => {
    useEffect(() => {
        const element = document.getElementById("guitars");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }, []);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedAlt, setSelectedAlt] = useState(null);
    const altStudio = 'Guitare Studio Blanche';
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
                <h1>Studio</h1>
                <div className="img-container">
                    <img
                        className='card'
                        src={imgStudio1}
                        alt={altStudio}
                        onClick={() => handleOpenModal(imgStudio1, altStudio)}
                        style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }}
                    />
                    <img
                        className='card'
                        src={imgStudio2}
                        alt={altStudio}
                        onClick={() => handleOpenModal(imgStudio2, altStudio)}
                        style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }}
                    />
                    <img
                        className='card'
                        src={imgStudio3}
                        alt={altStudio}
                        onClick={() => handleOpenModal(imgStudio3, altStudio)}
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
                            <h2>Caractéristiques Studio</h2>
                            <ul>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Diapason 25.5</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> 22 cases</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Radius 14 pouces</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Manche bi matière aluminium touche inox</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Corps aluminium peinture et vernis automobile</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Sillet bronze</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Tuno Matic Legouet en titane</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Mécanique sperzel usa</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Micros humbucker PAF 36 DiMarzio</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Micro Roland GT3 intégrées</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> 2 boutons titane</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Volume cts 500k log</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Tone cts 500 linear</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Condensateur 0.22µF</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Straplock Dunlop</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='text-container'>
                    <p>Corps aluminium peint blanc nacré, <strong>manche infinite, acastillage en titane</strong> (boutons de volume et chevalet), micros Legouet Humbucker et deux sorties 1 jack et 1 MIDI Roland GT3 avec deux volumes ( un pour les micros , et l'autre pour le GT3 Roland).</p>
                    <p>Modèle directement influencé par <a href="http://www.coxinhellstudio.com/" target="_blank" rel="noopener noreferrer">Sebastien Gros</a>.</p>
                    <p>Cette guitare est de structure identique à la précedente, elle est équipée d'un capteur MIDI qui lui permet de réaliser tous les sons possible et inimaginables avec <a href="https://www.thomann.de/fr/roland_gr55gk_black.htm" target="_blank" rel="noopener noreferrer">le pédalier GR55 Roland</a>.</p>
                    <p>Combiné à une carte son et un PC, vous pouvez également jouir de toute les banques son MIDI que vous possedez.</p>
                    <p>Ses Micros Legouet Humbucker permettent un registre très large passant du Jazz au métal technique qui peuvent se combiner au son du Capteur MIDI ( un son de piano et celui de la guitare en simultané).</p>
                    <p>Il est possible d'enregistrer un album entier avec ce seul instrument.</p>
                    <p>Poids = 3.450 Kg</p>
                    <div style={{ display: "flex", justifyContent: 'center' }}>
                        <ReactPlayer url={videoGuitar} controls={true} light={imgVignette1} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};


export default GuitarStudio;