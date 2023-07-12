import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

const Contact = () => {
    const [isCheckedConf, setIsCheckedConf] = useState(false);
    const [isCheckedBot, setIsCheckedBot] = useState(false);
    const [errorForm, setErrorForm] = useState({});
    const [sendMail, setSendMail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [phoneNumberError, setPhoneNumberError] = useState(false);
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const validateForm = () => {
        let isValid = true;
        let errors = {};

        if (name.length < 3) {
            isValid = false;
            errors.name = "Le nom doit contenir au moins 3 caractères";
        }

        if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)) {
            isValid = false;
            errors.email = "L'adresse email n'est pas valide";
        }

        if (message.length < 10) {
            isValid = false;
            errors.message = "Le message doit contenir au moins 10 caractères";
        }
        if (!isCheckedConf) {
            isValid = false;
            errors.checkbox = "Veuillez confirmer les conditions d'utilisations";
        }
        if (!isCheckedBot) {
            isValid = false;
            errors.checkbox = "Veuillez confirmer que vous n'êtes pas un robot.";
        }

        return { isValid, errors };
    };

    const handlePhoneNumberChange = (e) => {
        const newPhoneNumber = e.target.value;
        setPhoneNumber(newPhoneNumber);

        const phoneNumberObject = parsePhoneNumberFromString(newPhoneNumber);
        if (phoneNumberObject && phoneNumberObject.isValid()) {
            setPhoneNumberError(false);
        } else {
            setPhoneNumberError(true);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { isValid, errors } = validateForm();

        if (!isValid) {
            setErrorForm(errors);
            console.log(errors);
            return;
        }

        let htmlContentAdmin = `<p>Bonjour, un client a validé le devis en ligne. Voici le contenu de celui-ci :</p>
            <p>${name}</p>
            <p>${email}</p>
            <p>${phoneNumber}</p>
            <p>${message}</p>`;
        let htmlContentClient = `<p>Bonjour ${name}, voici votre demande de devis.</p>
            <p>Après vérification par un administrateur, vous recevrez un nouvel email contenant un devis officiel valable 30 jours à compter de la réception de celui-ci.</p>`;


        try {
            const adminEmailPromise = axios.post(
                "https://api.brevo.com/v3/smtp/email",
                {
                    sender: { name, email },
                    to: [{ email: "sebastien-1985@live.fr" }],
                    subject: "Message du formulaire Legouet Guitares - Administrateur",
                    htmlContent: htmlContentAdmin
                },
                {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "api-key": process.env.REACT_APP_SENDINGBLUE_EMAIL,
                    },
                }
            );

            setName("");
            setEmail("");
            setMessage("");
            setErrorForm({});
            setIsCheckedConf(false);
            setIsCheckedBot(false);
            setSendMail("Votre message a été envoyé avec succès !");
        } catch (error) {
            console.error(error);
            setErrorForm({});
            setIsCheckedConf(false);
            setIsCheckedBot(false);
            setSendMail("Une erreur est survenue lors de l'envoi de votre message.");
        }
    };
    return (
        <div className="body">
            <Header />
            <section className='contact'>
                <h1>Contacter notre usine</h1>
                <p>Legouet Guitares est spécialisée dans l’usinage de pièces de précision et la fabrication de guitares électriques en titane et aluminium. <strong>Contactez notre usine de pièces mécaniques en PACA</strong> pour discuter de votre projet avec un passionné de guitare, d'usinage, et de conception à votre écoute.</p>
                <div className="container">
                    <div className="address">
                        <h2>Adresse</h2>
                        <p>12T Chemin des sablières - 06100 Nice</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3522.085899726435!2d7.239668938156409!3d43.71564520857674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdd02000ba1ddd%3A0x2564a3fda8bd3e2b!2sLF%20Industrie!5e1!3m2!1sfr!2sfr!4v1689156662330!5m2!1sfr!2sfr" title='Google Maps - Adresse LF Industrie' width="100%" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <h2>Téléphone</h2>
                        <p><a href="tel:0492413966" title="Cliquez ici pour ouvrir votre gestionnaire d'appel par defaut">04 92 41 39 66</a></p>
                        <h2>Horaires</h2>
                        <p>Du lundi au vendredi : de 7h30 à 13h00 et 14h00 à 18h00</p>
                    </div>
                    <div className="form-contact">
                        <h2>Envoyer un message</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-cart contact">
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    placeholder="Nom*"
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    placeholder="Email*"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    value={phoneNumber}
                                    placeholder="Numéro de téléphone*"
                                    onChange={handlePhoneNumberChange}
                                    required
                                />{phoneNumberError && <div>Veuillez entrer un numéro de téléphone valide, pour la France commencez par "+33"</div>}
                                <textarea
                                    id="message"
                                    value={message}
                                    placeholder="Message(facultatif)"
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                                <div className='check'>
                                    <div className='check-card'>
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                            id="checkbox"
                                            checked={isCheckedConf}
                                            onChange={(e) => setIsCheckedConf(e.target.checked)}
                                            title="Cochez cette case pour accepter les conditions générales d'utilisation"
                                        />
                                        <label htmlFor="checkbox">J'ai lu et j'accepte
                                            <NavLink to="/confidentialite"> les conditions générales d'utilisation </NavLink></label>
                                    </div>
                                    <div className="check-card">
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                            id="checkbox-bot"
                                            checked={isCheckedBot}
                                            onChange={(e) => setIsCheckedBot(e.target.checked)}
                                            title="Cochez cette case pour prouver que vous n'êtes pas un robot"
                                        />  <label htmlFor="checkbox-bot">Je ne suis pas un robot</label>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom-form">
                                <p>
                                    {Object.values(errorForm).length > 0
                                        ? Object.values(errorForm).map((error, index) => (
                                            <span key={index}>
                                                {error}
                                                <br />
                                            </span>
                                        ))
                                        : sendMail}
                                </p>
                                <button type="submit">Envoyer</button>
                            </div>
                        </form>
                    </div>
                </div >
            </section >
            <Footer />
        </div >
    );
};

export default Contact;