import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import imgLaGiger1 from '../../assets/img/img_0008.jpg';
import imgLaGiger2 from '../../assets/img/Basse Rudy-15.jpg';
import imgLaGiger3 from '../../assets/img/img_0010.jpg';
import imgLaGiger4 from '../../assets/img/Basse Rudy-7.jpg';
import imgLaGiger5 from '../../assets/img/Basse Rudy-16.jpg';
import imgLaGiger6 from '../../assets/img/Basse Rudy-23.jpg';
import imgLaGiger7 from '../../assets/img/Basse Rudy-9.jpg';
import imgLaGiger8 from '../../assets/img/Basse Rudy-10.jpg';
import imgLaGiger9 from '../../assets/img/Basse Rudy-18.jpg';
import imgLaGiger10 from '../../assets/img/Basse Rudy-22.jpg';
import imgLaGiger11 from '../../assets/img/Basse Rudy-28.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import BackButton from '../../components/BackButton';

const BassLaMaite = () => {
    useEffect(() => {
        const element = document.getElementById("bass");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }, []);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedAlt, setSelectedAlt] = useState(null);
    const altLaGiger = 'Basse La Giger';
    const handleOpenModal = (image, alt) => {
        setSelectedImage(image);
        setSelectedAlt(alt);
        setModalIsOpen(true);
    }
    return (
        <div className='body'>
            <Header />
            <div className='bass' id='bass'>
                <BackButton />
                <h1>La Maïté</h1>
                <div className="img-container">
                    <img
                        className='card'
                        src={imgLaGiger1}
                        alt={altLaGiger}
                        onClick={() => handleOpenModal(imgLaGiger1, altLaGiger)}
                        style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }}
                    />
                    <img
                        className='card'
                        src={imgLaGiger2}
                        alt={altLaGiger}
                        onClick={() => handleOpenModal(imgLaGiger2, altLaGiger)}
                        style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }}
                    />
                    <img
                        className='card'
                        src={imgLaGiger3}
                        alt={altLaGiger}
                        onClick={() => handleOpenModal(imgLaGiger3, altLaGiger)}
                        style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }}
                    />
                    <img
                        className='card'
                        src={imgLaGiger4}
                        alt={altLaGiger}
                        onClick={() => handleOpenModal(imgLaGiger4, altLaGiger)}
                        style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }}
                    />
                    <img
                        className='card'
                        src={imgLaGiger5}
                        alt={altLaGiger}
                        onClick={() => handleOpenModal(imgLaGiger5, altLaGiger)}
                        style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }}
                    />
                    <img
                        className='card'
                        src={imgLaGiger6}
                        alt={altLaGiger}
                        onClick={() => handleOpenModal(imgLaGiger6, altLaGiger)}
                        style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }}
                    />
                    <img
                        className='card'
                        src={imgLaGiger7}
                        alt={altLaGiger}
                        onClick={() => handleOpenModal(imgLaGiger7, altLaGiger)}
                        style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }}
                    />
                    <img
                        className='card'
                        src={imgLaGiger8}
                        alt={altLaGiger}
                        onClick={() => handleOpenModal(imgLaGiger8, altLaGiger)}
                        style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }}
                    />
                    <img
                        className='card'
                        src={imgLaGiger9}
                        alt={altLaGiger}
                        onClick={() => handleOpenModal(imgLaGiger9, altLaGiger)}
                        style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }}
                    />
                    <img
                        className='card'
                        src={imgLaGiger10}
                        alt={altLaGiger}
                        onClick={() => handleOpenModal(imgLaGiger10, altLaGiger)}
                        style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }}
                    />
                    <img
                        className='card'
                        src={imgLaGiger11}
                        alt={altLaGiger}
                        onClick={() => handleOpenModal(imgLaGiger11, altLaGiger)}
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
                            <h2>Caractéristiques La Giger</h2>
                            <ul>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> 4 cordes</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Diapason 34.5</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> 21 frettes</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Radius 14 pouces</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Manche en érable ondé teinté noir (vernis automobile)</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Luminlays dot</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Frette inox</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Corps en aluminium aéronautique, verni automobile teinté noir</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Sillet en laiton</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Chevalet custom en laiton massif, traité Cerakote</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Mécaniques Hipshot Vintage+ avec D-Tuner sur le Mi grave</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Deux micros Benedetti Precision :</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> un micro vintage en position grave</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> un micro moderne en position aiguë</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Sélecteur 3 positions situé à l’arrière de la basse</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Un volume et une tone</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='text-container'>
                    <p>Basse spécialement conçue en collaboration avec <strong>Marty ML</strong>.</p>

                    <p>Elle a été pensée pour offrir un son chaud, associé à un clean doux et riche.</p>
                    <p>Dotée d’un accastillage en laiton et d’un montage des cordes traversant le corps, sa construction d’inspiration vintage, associée à un manche en érable ondé, des mécaniques de type Precision et des micros Benedetti Precision, en fait un modèle idéal pour les registres jazz, rock et pop-rock moderne.</p>
                    <p>Cette basse est entièrement passive et équipée d’un sélecteur 3 positions, permettant notamment de combiner les deux micros en parallèle.</p>

                    <p><strong>Poids :</strong> 4,4 kg</p>
                    <p><strong>Prix :</strong> 8 400 € TTC (housse incluse)</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BassLaMaite;