import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Header from '../../components/Header';
import imgMetalPrecision1 from '../../assets/img/img_5736.jpg';
import imgMetalPrecision2 from '../../assets/img/img_5753.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../components/Footer';
import ReactPlayer from 'react-player';
import BackButton from '../../components/BackButton';

const GuitarMetalPrecision = () => {
    useEffect(() => {
        const element = document.getElementById("guitars");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }, []);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedAlt, setSelectedAlt] = useState(null);
    const altMetalPrecision = 'Guitare Metal précision';
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
                <h1>Métal précision</h1>
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
                            <h2>Caractéristiques Metal Précision</h2>
                            <ul>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Diapason 25.5</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> 22 cases</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Radius 14 pouces</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Manche bi matière aluminium touche inox</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Corps aluminium vernis teinté</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Sillet bronze</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Tuno Matic Legouet en titane</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Mécanique sperzel usa</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> 2 Micros humbucker</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Position manche PAF 36 DiMarzio</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Position chevalet DiMarzio Fortitude</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Boutons titane</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Volume cts 500k log</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Condensateur 0.22µF</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Straplock Dunlop</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='text-container'>
                    <p>Corps aluminium vernis noir, manche aluminium "infinite", cordier <strong>tune o matic titanium</strong> et micros <a href="https://www.dimarzio.com/artists/joe-duplantier" target="_blank" rel="noopener noreferrer">DiMarzio joe duplantier</a>.</p>
                    <p>Cette guitare permet de réaliser toutes les rythmiques métal les plus techniques, sa structure rigide lui confère une grande stabilité ainsi qu'une dynamique impresionnante.</p>
                    <p>Possibilité de jouer dans un registre blues rock grâce à ses micros passifs au niveau de sortie modérée ( un vrai "couteau suisse").</p>
                    <p>Poids = 3.350 Kg</p>
                    <div style={{ display: "flex", justifyContent: 'center', width: '100%', gap: '10px', flexWrap: 'wrap', margin: '0 auto' }}>
                        <ReactPlayer url="https://www.youtube.com/watch?v=3kcbSFx1Fsk" controls={true} />
                        <ReactPlayer url="https://www.youtube.com/watch?v=X50Eji4G91A&t=416s" controls={true} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default GuitarMetalPrecision;