import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import imgIronPlague1 from '../../assets/img/img_0025.jpg';
import imgIronPlague2 from '../../assets/img/img_0028.jpg';
import imgIronPlague3 from '../../assets/img/img_0038.jpg';
import imgIronPlague4 from '../../assets/img/img_0041.jpg';
import Header from '../../components/Header';
import BackButton from '../../components/BackButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../components/Footer';

const GuitarIronPlague = () => {
    useEffect(() => {
        const element = document.getElementById("guitars");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }, []);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedAlt, setSelectedAlt] = useState(null);
    const altIronPlague = 'Guitare Iron Plague noire';
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
                <h1>Iron Plague</h1>
                <div className="img-container">
                    <img
                        className='card'
                        src={imgIronPlague1}
                        alt={altIronPlague}
                        onClick={() => handleOpenModal(imgIronPlague1, altIronPlague)}
                        style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }}
                    />
                    <img
                        className='card'
                        src={imgIronPlague2}
                        alt={altIronPlague}
                        onClick={() => handleOpenModal(imgIronPlague2, altIronPlague)}
                        style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }}
                    />
                    <img
                        className='card'
                        src={imgIronPlague3}
                        alt={altIronPlague}
                        onClick={() => handleOpenModal(imgIronPlague3, altIronPlague)}
                        style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }}
                    />
                    <img
                        className='card'
                        src={imgIronPlague4}
                        alt={altIronPlague}
                        onClick={() => handleOpenModal(imgIronPlague4, altIronPlague)}
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
                            <h2>Caractéristiques Iron Plague</h2>
                            <ul>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Diapason 25.5</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> 24 cases</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Radius 14 pouces</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Manche bi matière inox aluminium traitement cerakote micro slick</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Corps aluminium traitement cerakote black satin</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Tuno Matic legouet inox pontet bronze</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Sillet bronze</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Sillet bronze</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Mécanique sperzel usa</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Micro dimarzio / tone zone</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Un bouton volume inox</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Volume cts 500k log</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Straplock Dunlop</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <div className='text-container'>
                    <p>Corps en aluminium vernis rouge, pickguard en alu vernis noir, manche en érable <strong>frettes inox</strong>, un vibrato <a href="https://www.thomann.de/fr/schaller_vintage_tremolo_3801_chrome.htm" target="_blank" rel="noopener noreferrer">shaller vintage tremolo</a> et deux micros Legouet minidouble bobinage (micros simple à haut niveau de sortie).</p>
                    <p>Une guitare parfaite pour un shred précis et endiablé. Son vibrato permettant de faire des "dive bomb"  mais aussi d'élever d'un ton sans se désacorder.</p>
                    <p>On peut passer en drop D ou changer d'accordage sans dificulté car elle n'a pas de sillet bloc corde.</p>
                    <p>Pour intervenir sur la tention des ressort, il suffit de dévisser le couvercle (opération qui se réalise seulement si on passe a un tirant plus élevé).</p>
                    <p>Poids = 3.400 Kg</p>
                </div> */}
            </div>
            <Footer />
        </div>
    );
};

export default GuitarIronPlague;