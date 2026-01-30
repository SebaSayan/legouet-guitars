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

const BassLaGiger = () => {
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
                <h1>La Giger</h1>
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
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Diapason 34.5</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> 22 frettes</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Radius 16 pouces</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Manche aluminium aéronautique avec touches en titane</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Frette inox jescard medium jumbo</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Corps aluminium vernis</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Cordier Legouet aluminium avec un pontet en titane</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Sillet en laiton</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Mécanique Hipshot light</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> 2 Micros Benedetti Humbucker bass</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> 1 bouton volume en titane</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Electronique <a href="https://vaudoo-audio.fr/" target="_blank" rel="noopener noreferrer">Vaudoo Audio</a></li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Equalisateur 4 bandes actifs sur batterie rechargeable</li>
                                <li><FontAwesomeIcon className='icon' icon={faCheck} /> Straplock Dunlop</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='text-container'>
                    <p>
                        Cette basse a été réalisée en collaboration et spécialement conçue pour <strong>Rudy Purkart</strong> (bassiste du groupe <strong>LANDMVRKS</strong>).
                    </p>

                    <p>
                        Elle est constituée d’un corps et d’un manche en aluminium aéronautique,
                        ainsi que d’une touche en titane, lui conférant une précision et un claquant uniques.
                    </p>

                    <p>
                        Ses deux micros <strong>Benedetti</strong> ont été spécialement conçus en exclusivité pour ce modèle,
                        afin d’offrir un son clair, net et précis.
                    </p>

                    <p>
                        Elle est dotée d’une gravure laser, réalisée par l’artiste <a href="https://www.instagram.com/itsguyguy_/" target="_blank" rel="noopener noreferrer"><strong>Guyguy </strong></a>
                        et gravée par <a href="https://www.instagram.com/tof_gravure/" target="_blank" rel="noopener noreferrer"><strong>Tof Gravure</strong></a>.
                    </p>

                    <p><strong>Poids :</strong> 4,4 kg</p>
                    <p><strong>Prix :</strong> 8 400 € TTC (housse incluse)</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BassLaGiger;