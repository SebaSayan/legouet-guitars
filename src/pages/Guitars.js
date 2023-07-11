import React, { useState } from 'react';
import Modal from 'react-modal';
import ReactPlayer from 'react-player';
import imgJazzFusion1 from '../assets/img/img_0050.jpg';
import imgJazzFusion2 from '../assets/img/img_0062.jpg';
import imgJazzFusion3 from '../assets/img/img_0040.jpg';
import imgMetalPrecision1 from '../assets/img/img_5736.jpg';
import imgMetalPrecision2 from '../assets/img/img_5753.jpg';
import imgStudio1 from '../assets/img/img_0029.jpg';
import imgStudio2 from '../assets/img/img_0039.jpg';
import imgStudio3 from '../assets/img/img_0031.jpg';
import videoGuitar from '../assets/video/VID-20221221-WA0000.mp4';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Guitars = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedAlt, setSelectedAlt] = useState(null);
    const altJazzFusion = 'Guitare Jazz Fusion rouge';
    const altMetalPrecision = 'Guitare Metal précision';
    const altStudio = 'Guitare Studio Blanche';
    const handleOpenModal = (image, alt) => {
        setSelectedImage(image);
        setSelectedAlt(alt);
        setModalIsOpen(true);
    }
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
                <div className='text-container'>
                    <p>Corps en aluminium vernis rouge, pickguard en alu vernis noir, manche en érable <strong>frettes inox</strong>, un vibrato <a href="https://www.thomann.de/fr/schaller_vintage_tremolo_3801_chrome.htm" target="_blank" rel="noopener noreferrer">shaller vintage tremolo</a> et deux micros Legouet minidouble bobinage (micros simple à haut niveau de sortie).</p>
                    <p>Une guitare parfaite pour un shred précis et endiablé. Son vibrato permettant de faire des "dive bomb"  mais aussi d'élever d'un ton sans se désacorder.</p>
                    <p>On peut passer en drop D ou changer d'accordage sans dificulté car elle n'a pas de sillet bloc corde.</p>
                    <p>Pour intervenir sur la tention des ressort, il suffit de dévisser le couvercle (opération qui se réalise seulement si on passe a un tirant plus élevé).</p>
                    <p>Poids = 3.400 Kg</p>
                </div>
                <h2>Métal précision</h2>
                <div className="img-container">
                    <img
                        className='card'
                        src={imgMetalPrecision1}
                        alt={altMetalPrecision}
                        onClick={() => handleOpenModal(imgMetalPrecision1, altMetalPrecision)}
                        style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }}
                    />
                    <img
                        className='card'
                        src={imgMetalPrecision2}
                        alt={altMetalPrecision}
                        onClick={() => handleOpenModal(imgMetalPrecision2, altMetalPrecision)}
                        style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }}
                    />
                </div>
                <div className='text-container'>
                    <p>Corps aluminium vernis noir, manche aluminium "infinite", cordier <strong>tune o matic titanium</strong> et micros <a href="https://www.dimarzio.com/artists/joe-duplantier" target="_blank" rel="noopener noreferrer">DiMarzio joe duplantier</a>.</p>
                    <p>Cette guitare permet de réaliser toutes les rythmiques métal les plus techniques, sa structure rigide lui confère une grande stabilité ainsi qu'une dynamique impresionnante.</p>
                    <p>Possibilité de jouer dans un registre blues rock grâce à ses micros passifs au niveau de sortie modérée ( un vrai "couteau suisse").</p>
                    <p>Poids = 3.350 Kg</p>
                    <p>https://www.youtube.com/watch?v=3kcbSFx1Fsk</p>
                    <p>https://www.youtube.com/watch?v=X50Eji4G91A&t=416s</p>
                </div>
                <h2>Studio</h2>
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
                <div className='text-container'>
                    <p>Corps aluminium peint blanc nacré, <strong>manche infinite, acastillage en titane</strong> (boutons de volume et chevalet), micros Legouet Humbucker et deux sorties 1 jack et 1 MIDI Roland GT3 avec deux volumes ( un pour les micros , et l'autre pour le GT3 Roland).</p>
                    <p>Modèle directement influencé par <a href="http://www.coxinhellstudio.com/" target="_blank" rel="noopener noreferrer">Sebastien Gros</a>.</p>
                    <p>Cette guitare est de structure identique à la précedente, elle est équipée d'un capteur MIDI qui lui permet de réaliser tous les sons possible et inimaginables avec <a href="https://www.thomann.de/fr/roland_gr55gk_black.htm" target="_blank" rel="noopener noreferrer">le pédalier GR55 Roland</a>.</p>
                    <p>Combiné à une carte son et un PC, vous pouvez également jouir de toute les banques son MIDI que vous possedez.</p>
                    <p>Ses Micros Legouet Humbucker permettent un registre très large passant du Jazz au métal technique qui peuvent se combiner au son du Capteur MIDI ( un son de piano et celui de la guitare en simultané).</p>
                    <p>Il est possible d'enregistrer un album entier avec ce seul instrument.</p>
                    <p>Poids = 3.450 Kg</p>
                    <div>
                        <ReactPlayer url={videoGuitar} controls />
                    </div>
                </div>
            </section>
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
            <Footer />
        </div>
    );
};

export default Guitars;