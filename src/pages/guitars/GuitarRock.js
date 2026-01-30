import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import imgRock1 from '../../assets/img/img_0077.jpg';
import imgRock2 from '../../assets/img/img_0094.jpg';
import imgRock3 from '../../assets/img/img_0069.jpg';
import Header from '../../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../components/Footer';
import BackButton from '../../components/BackButton';

const GuitarRock = () => {
    useEffect(() => {
        const element = document.getElementById("guitars");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }, []);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedAlt, setSelectedAlt] = useState(null);
    const altRock = 'Guitare Rock Gold';
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
                <h1>Rock</h1>
                <div className="img-container">
                    <img
                        className='card'
                        src={imgRock1}
                        alt={altRock}
                        onClick={() => handleOpenModal(imgRock1, altRock)}
                        style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }}
                    />
                    <img
                        className='card'
                        src={imgRock2}
                        alt={altRock}
                        onClick={() => handleOpenModal(imgRock2, altRock)}
                        style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }}
                    />
                    <img
                        className='card'
                        src={imgRock3}
                        alt={altRock}
                        onClick={() => handleOpenModal(imgRock3, altRock)}
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
                            <h2>Caractéristiques Rock</h2>
                            <ul>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Diapason 25.5</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> 22 cases</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Radius 14 pouces</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> ‌Manche bi matière aluminium touche inox</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> ‌Corp aluminium peinture gold</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Sillet bronze</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Tuno Matic Legouet en inox pontet bronze</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Mécanique sperzel usa</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> ‌2 Micros mini humbucker type Firebird</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> 2 boutons inox</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Cache micro inox</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Volume cts 500k log</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Tone cts 500 linear</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Condensateur 0.33µF</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Straplock Dunlop</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='text-container'>
                    <p>
                        Corps en aluminium peint en or, <strong>manche en aluminium</strong> avec touche en inox,
                        <strong>accastillage en inox</strong>, micros mini humbucker de type Firebird,
                        1 volume et 1 tonalité.
                    </p>

                    <p>
                        La construction est identique au modèle <strong>STUDIO</strong>, à la différence que l’accastillage est entièrement en inox
                        (boutons de potentiomètres, contours de micros et chevalet).
                    </p>

                    <p>
                        Les micros de type Firebird lui confèrent une agressivité maîtrisée, idéale pour reproduire vos chansons rock favorites.
                    </p>

                    <p>
                        Cette guitare est parfaitement à l’aise dans des registres allant du rock au métal des années 80.
                    </p>

                    <p><strong>Poids :</strong> 3,4 kg</p>
                    <p><strong>Prix :</strong> 3 860 € TTC (housse incluse)</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default GuitarRock;