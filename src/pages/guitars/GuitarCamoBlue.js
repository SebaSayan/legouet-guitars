import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Header from '../../components/Header';
import BackButton from '../../components/BackButton';
import imgCamoBlue1 from '../../assets/img/img_0003.jpg';
import imgCamoBlue2 from '../../assets/img/img_0005.jpg';
import imgCamoBlue3 from '../../assets/img/img_0014.jpg';
import imgCamoBlue4 from '../../assets/img/img_0017.jpg';
import imgCamoBlue5 from '../../assets/img/img_0020.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../components/Footer';

const GuitarCamoBlue = () => {
    useEffect(() => {
        const element = document.getElementById("guitars");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }, []);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedAlt, setSelectedAlt] = useState(null);
    const altCamoBlue = 'Guitare Camo Blue';
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
                <h1>Camo Blue</h1>
                <div className="img-container">
                    <img
                        className='card'
                        src={imgCamoBlue1}
                        alt={altCamoBlue}
                        onClick={() => handleOpenModal(imgCamoBlue1, altCamoBlue)}
                        style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }}
                    />
                    <img
                        className='card'
                        src={imgCamoBlue2}
                        alt={altCamoBlue}
                        onClick={() => handleOpenModal(imgCamoBlue2, altCamoBlue)}
                        style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }}
                    />
                    <img
                        className='card'
                        src={imgCamoBlue3}
                        alt={altCamoBlue}
                        onClick={() => handleOpenModal(imgCamoBlue3, altCamoBlue)}
                        style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }}
                    />
                    <img
                        className='card'
                        src={imgCamoBlue4}
                        alt={altCamoBlue}
                        onClick={() => handleOpenModal(imgCamoBlue4, altCamoBlue)}
                        style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }}
                    />
                    <img
                        className='card'
                        src={imgCamoBlue5}
                        alt={altCamoBlue}
                        onClick={() => handleOpenModal(imgCamoBlue5, altCamoBlue)}
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
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> ‌Manche aluminium touche inox</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Corps aluminium traitement cerakote</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Sillet bronze</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> ‌Tune o Matic Legouet inox ponty bronze</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Mécanique sperzel usa</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> ‌2 Micros humbucker</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Position manche "benedetti métal indus"</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Position chevalet "benedetti métal Matrix"</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> ‌Boutons inox</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Volume cts 500k log</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Tone cts 500k linear</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Condensateur 0.22µF</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Straplock Dunlop</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='text-container'>
                    {/* <p>Corps en aluminium vernis rouge, pickguard en alu vernis noir, manche en érable <strong>frettes inox</strong>, un vibrato <a href="https://www.thomann.de/fr/schaller_vintage_tremolo_3801_chrome.htm" target="_blank" rel="noopener noreferrer">shaller vintage tremolo</a> et deux micros Legouet minidouble bobinage (micros simple à haut niveau de sortie).</p>
                    <p>Une guitare parfaite pour un shred précis et endiablé. Son vibrato permettant de faire des "dive bomb"  mais aussi d'élever d'un ton sans se désacorder.</p>
                    <p>On peut passer en drop D ou changer d'accordage sans dificulté car elle n'a pas de sillet bloc corde.</p>
                    <p>Pour intervenir sur la tention des ressort, il suffit de dévisser le couvercle (opération qui se réalise seulement si on passe a un tirant plus élevé).</p>
                    <p>Poids = 3.400 Kg</p> */}
                </div>
            </div>
            <Footer />
        </div>
    );
};


export default GuitarCamoBlue;