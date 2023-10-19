import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Header from '../../components/Header';
import imgUltime1 from '../../assets/img/img_0007.jpg';
import imgUltime2 from '../../assets/img/img_0022.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../components/Footer';
import BackButton from '../../components/BackButton';

const GuitarUltime = () => {
    useEffect(() => {
        const element = document.getElementById("guitars");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }, []);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedAlt, setSelectedAlt] = useState(null);
    const altUltime = 'Guitare ULTIME corps en titane et manche aluminium vernis';
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
                <h1>ULTIME</h1>
                <div className="img-container">
                    <img
                        className='card'
                        src={imgUltime1}
                        alt={altUltime}
                        onClick={() => handleOpenModal(imgUltime1, altUltime)}
                        style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }}
                    />
                    <img
                        className='card'
                        src={imgUltime2}
                        alt={altUltime}
                        onClick={() => handleOpenModal(imgUltime2, altUltime)}
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
                            <h2>Caractéristiques Ultime</h2>
                            <ul>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Diapason 25.5</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> 22 cases</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Radius 14 pouces</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Manche aluminium touche inox</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Corps titane vernis</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Sillet bronze</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> ‌Cordier Legouet inox pontet titane</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Mécanique sperzel usa</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> ‌2 Micros humbucker Legouet</li>
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
                    <p>Corps titane vernis, manche aluminium "infinite" vernis, micros legouet humbucker, cordier inox avec pontet titane, 1 volume splitable, 1 tone et bouton en aluminium.</p>
                    <p> "ll y a un avant et un après".</p>
                    <p>Poids = 3.570 Kg</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default GuitarUltime;