import React, { useEffect, useState } from 'react';
import { isValidNumber } from 'libphonenumber-js';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import axios from 'axios';

const Contact = () => {
    const [isCheckedConf, setIsCheckedConf] = useState(false);
    const [isCheckedBot, setIsCheckedBot] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [errorForm, setErrorForm] = useState({});
    const [isValidPhone, setIsValidPhone] = useState(false);
    const [sendMail, setSendMail] = useState("");
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    useEffect(() => {
        if (phoneNumber) {
            setIsValidPhone(isValidNumber(phoneNumber));
        } else {
            setIsValidPhone(false);
        }
    }, [phoneNumber]);

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
            errors.checkboxConf = "Veuillez confirmer les conditions d'utilisation";
        }

        if (!isCheckedBot) {
            isValid = false;
            errors.checkboxBot = "Veuillez confirmer que vous n'êtes pas un robot.";
        }

        if (!isValidPhone) {
            isValid = false;
            errors.phone = "Le numéro de téléphone n'est pas valide.";
        }

        return { isValid, errors };
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { isValid, errors } = validateForm();

        if (!isValid) {
            setErrorForm(errors);
            console.log(errors);
            return;
        }

        let htmlContent = `<p>Bonjour, un client vous a envoyé un message via la page "Contact". Voici le contenu de celui-ci :</p>
            <p>Nom : ${name}</p>
            <p>Email : ${email}</p>
            <p>Tel : ${phoneNumber}</p>
            <p>Message : ${message}</p>`;

        try {
            const response = await axios.post(
                "https://legouet-guitare.com//sendmail.php",
                {
                    sender: { name: "Legouet Guitares", email: "no-reply@creawebdev.fr" },
                    replyTo: { email, name },
                    to: [{ email: "joffrey@creawebdev.fr" }],
                    subject: "Message du formulaire Legouet Guitares - Administrateur",
                    htmlContent: htmlContent
                },
                {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "api-key": process.env.REACT_APP_SENDINGBLUE_EMAIL, // Utilisation de la clé API dans une variable d'environnement
                    },
                }
            );

            console.log(response);
            setName("");
            setEmail("");
            setPhoneNumber("");
            setMessage("");
            setErrorForm({});
            setIsCheckedConf(false);
            setIsCheckedBot(false);
            setSendMail("Votre message a été envoyé avec succès !");
            setTimeout(() => {
                setSendMail("");
            }, 5000);
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
            <section className="contact">
                <h1>Contacter notre usine</h1>
                <p>
                    Legouet Guitares est spécialisée dans l’usinage de pièces de précision et la fabrication de guitares électriques en titane et aluminium.{" "}
                    <strong>Contactez notre usine de pièces mécaniques en PACA</strong> pour discuter de votre projet avec un passionné de guitare, d'usinage, et de conception à votre écoute.
                </p>
                <div className="container">
                    <div className="address">
                        <h2>Adresse</h2>
                        <p>390 Chemin des sablières - 06100 Nice</p>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3522.085899726435!2d7.239668938156409!3d43.71564520857674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdd02000ba1ddd%3A0x2564a3fda8bd3e2b!2sLF%20Industrie!5e1!3m2!1sfr!2sfr!4v1689156662330!5m2!1sfr!2sfr"
                            title="Google Maps - Adresse LF Industrie"
                            width="100%"
                            height="450"
                            style={{ border: "0" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <h2>Téléphone</h2>
                        <p>
                            Joffrey Legouet :{" "}
                            <a href="tel:0619501380" title="Cliquez ici pour ouvrir votre gestionnaire d'appel par defaut">
                                06 19 50 13 80
                            </a>
                        </p>
                        <h2>Horaires</h2>
                        <p>Du lundi au vendredi : de 9h30 à 13h00 et 14h00 à 18h00</p>
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
                                <PhoneInput
                                    type="tel"
                                    id="phoneNumber"
                                    placeholder="Téléphone*"
                                    value={phoneNumber}
                                    onChange={(value) => setPhoneNumber(value)}
                                    defaultCountry="FR"
                                    required
                                />
                                {phoneNumber && !isValidPhone && (
                                    <div style={{ color: 'red' }}>Le numéro de téléphone n'est pas valide.</div>
                                )}
                                <textarea
                                    id="message"
                                    value={message}
                                    placeholder="Message*"
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                                <div className="check">
                                    <div className="check-card">
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                            id="checkbox"
                                            checked={isCheckedConf}
                                            onChange={(e) => setIsCheckedConf(e.target.checked)}
                                            title="Cochez cette case pour accepter les conditions générales d'utilisation"
                                        />
                                        <label htmlFor="checkbox">
                                            J'ai lu et j'accepte{" "}
                                            <NavLink to="/confidentialite">les conditions générales d'utilisation </NavLink>
                                        </label>
                                    </div>
                                    <div className="check-card">
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                            id="checkbox-bot"
                                            checked={isCheckedBot}
                                            onChange={(e) => setIsCheckedBot(e.target.checked)}
                                            title="Cochez cette case pour prouver que vous n'êtes pas un robot"
                                        />
                                        <label htmlFor="checkbox-bot">Je ne suis pas un robot</label>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom-form">
                                <p>
                                    {Object.keys(errorForm).length > 0 ? (
                                        <ul>
                                            {Object.values(errorForm).map((error, index) => (
                                                <li key={index}>{error}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        sendMail
                                    )}
                                </p>
                                <button type="submit">Envoyer</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Contact;
