import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Header from '../../components/Header';
import imgSupreme1 from '../../assets/img/img_0001.jpg';
import imgSupreme2 from '../../assets/img/img_0002.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../components/Footer';
import ReactPlayer from 'react-player';
import BackButton from '../../components/BackButton';

const GuitarSupreme = () => {
    useEffect(() => {
        const element = document.getElementById("guitars");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }, []);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedAlt, setSelectedAlt] = useState(null);
    const altSupreme = 'Guitare Suprême en titane';
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
                <h1>Suprême</h1>
                <div className="img-container">
                    <img
                        className='card'
                        src={imgSupreme1}
                        alt={altSupreme}
                        onClick={() => handleOpenModal(imgSupreme1, altSupreme)}
                        style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }}
                    />
                    <img
                        className='card'
                        src={imgSupreme2}
                        alt={altSupreme}
                        onClick={() => handleOpenModal(imgSupreme2, altSupreme)}
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
                            <h2>Caractéristiques Suprême</h2>
                            <ul>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Diapason 25.5</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> 22 cases</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Radius 14 pouces</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Manche érable ondé teinte noir</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Corps titane vernis</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Sillet bronze</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Cordier Legouet inox pontet bronze</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Mécanique sperzel usa</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> 2 Micros humbucker Legouet</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Boutons aluminium</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Volume cts 500k log</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Tone cts 500 linear</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Condensateur 0.33µF</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Straplock Dunlop</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='text-container'>
                    <p>Corps en titane taillé dans la masse, vernis, cordier standard avec pontet en bronze, un manche en érable teinté noir, des repères en nacre blanc, des micros DI MARZIO Joe dupalntier, 1 volume , 1 tone et bouton aluminium.</p>
                    <p>Une merveille esthétique et sonore qui ne peut laisser indifférent.</p>
                    <p>Poids = 3.340 Kg</p>
                    <div style={{ display: "flex", justifyContent: 'center', width: '100%', gap: '10px', flexWrap: 'wrap', margin: '0 auto' }}>
                        <ReactPlayer url="https://www.youtube.com/watch?v=kVqpNewlAY8" controls={true} />
                        <ReactPlayer url="https://youtu.be/eUPjFY5QshY" controls={true} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default GuitarSupreme;