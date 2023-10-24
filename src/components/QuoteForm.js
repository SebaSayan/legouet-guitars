import axios from 'axios';
import { NavLink } from 'react-router-dom';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input'
import { isValidNumber } from 'libphonenumber-js';
import React, { useEffect, useState } from 'react';



const QuoteForm = () => {
    const [selectedOption1, setSelectedOption1] = useState(null);
    const [selectedOption2, setSelectedOption2] = useState(null);
    const [selectedOption3, setSelectedOption3] = useState(null);
    const [selectedOption4, setSelectedOption4] = useState(null);
    const [selectedOption5, setSelectedOption5] = useState(null);
    const [part1Value, setPart1Value] = useState('');
    const [part2Value, setPart2Value] = useState('');
    const [part3Value, setPart3Value] = useState('');
    const [part4Value, setPart4Value] = useState('');
    const [part5Value, setPart5Value] = useState('');
    const [isCheckedConf, setIsCheckedConf] = useState(false);
    const [isCheckedBot, setIsCheckedBot] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [errorForm, setErrorForm] = useState({});
    const [sendMail, setSendMail] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState("");
    const [result, setResult] = useState('');
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    const [material, setMaterial] = useState("");

    useEffect(() => {
        if (phoneNumber) {
            setIsValid(isValidNumber(phoneNumber));
        } else {
            setIsValid(false);
        }
    }, [phoneNumber]);

    const prices = {
        // Classe Corps
        option1Price: "1368",
        option2Price: "1656",
        option3Price: "1656",
        option4Price: "1656",
        option5Price: "6120",
        option6Price: "6120",

        // Classe ACCASTILLAGE ET VIBRATOS
        optionAPrice: "108",
        optionBPrice: "87",
        optionCPrice: "202",
        optionDPrice: "360",
        optionEPrice: "94",
        optionFPrice: "102",
        optionGPrice: "144",
        optionHPrice: "245",
        // optionIPrice: "245",
        // optionJPrice: "375",
        // optionKPrice: "325",
        optionLPrice: "218",

        // Classe MICROS
        option1MicroPrice: "231",
        option2MicroPrice: "346",
        option3MicroPrice: "317",
        option4MicroPrice: "391",

        // Classe MANCHES - FRETTES INOX
        option1ManchePrice: "821",
        option2ManchePrice: "768",
        option3ManchePrice: "928",
        option4ManchePrice: "1125",
        option5ManchePrice: "1125",
        option6ManchePrice: "1196",
        option7ManchePrice: "1196",
        option8ManchePrice: "1470",
        option9ManchePrice: "1540",
        option10ManchePrice: "1592",

        // Classe ETUIS
        option1EtuiPrice: "215",
    }

    const descriptions = {
        // Classe Corps
        option1Price: "Corps aluminium vernis mat ou brillant avec motif usinage apparent",
        option2Price: "Corps aluminium peinture et vernis selon gamme RAL Design",
        option3Price: "Corps aluminium vernis coloré avec motif usinage apparent",
        option4Price: "Corps aluminium traitement Cerakote",
        option5Price: "Corps titane vernis",
        option6Price: "Corps titane traitement Cerakote",

        // Classe ACCASTILLAGE ET VIBRATOS
        optionAPrice: "Tune o matic laiton",
        optionBPrice: "Tune o matic aluminium",
        optionCPrice: "Tune o matic acier inox",
        optionDPrice: "Tune o matic titane",
        optionEPrice: "Cordier inox pontet aluminium",
        optionFPrice: "Cordier inox pontet laiton",
        optionGPrice: "Cordier inox pontet inox",
        optionHPrice: "Cordier inox pontet titane",
        // optionIPrice: "Floyd rose non fine tuner",
        // optionJPrice: "Floyd rose",
        // optionKPrice: "Vegatrem",
        optionLPrice: "Schaller Vintage Tremolo C",

        // Classe MICROS
        option1MicroPrice: "Deux simples (type Telecaster au choix)",
        option2MicroPrice: "Trois simples (type Stratocaster au choix)",
        option3MicroPrice: "Deux doubles (humbucker au choix)",
        option4MicroPrice: "Deux simples et un double (au choix)",

        // Classe MANCHES - FRETTES INOX
        option1ManchePrice: "Erable ondé une pièce",
        option2ManchePrice: "Ovangkol une pièce",
        option3ManchePrice: "Autres bois avec touche rapportée",
        option4ManchePrice: "Aluminium light weight brossé",
        option5ManchePrice: "Aluminium light weight poli",
        option6ManchePrice: "Aluminium light weight brossé vernis",
        option7ManchePrice: "Aluminium light weight poli vernis",
        option8ManchePrice: "INFINITE alu/inox brossé ou poli",
        option9ManchePrice: "INFINITE alu/inox brossé ou poli et vernis",
        option10ManchePrice: "INFINITE alu/inox Cerakote",

        // Classe ETUIS
        option1EtuiPrice: "Etui Hiscox Case",
    };

    const calculateTotal = (newPart1Value, newPart2Value, newPart3Value, newPart4Value, newPart5Value) => {
        const pricePart1 = parseInt(prices[newPart1Value]);
        const pricePart2 = parseInt(prices[newPart2Value]);
        const pricePart3 = parseInt(prices[newPart3Value]);
        const pricePart4 = parseInt(prices[newPart4Value]);
        const pricePart5 = parseInt(prices[newPart5Value]);

        const total = (isNaN(pricePart1) ? 0 : pricePart1) +
            (isNaN(pricePart2) ? 0 : pricePart2) +
            (isNaN(pricePart3) ? 0 : pricePart3) +
            (isNaN(pricePart4) ? 0 : pricePart4) +
            (isNaN(pricePart5) ? 0 : pricePart5);

        setResult(total);
    }

    const handleMaterialChange = (event) => {
        setMaterial(event.target.value);
    }

    const handlePart1Change = (event) => {
        const newPart1Value = event.target.value;
        setPart1Value(newPart1Value);
        setSelectedOption1(event.target.value);
        calculateTotal(newPart1Value, part2Value, part3Value, part4Value, part5Value);
    };

    const handlePart2Change = (event) => {
        const newPart2Value = event.target.value;
        setPart2Value(newPart2Value);
        setSelectedOption2(event.target.value);
        calculateTotal(part1Value, newPart2Value, part3Value, part4Value, part5Value);
    };

    const handlePart3Change = (event) => {
        const newPart3Value = event.target.value;
        setPart3Value(newPart3Value);
        setSelectedOption3(event.target.value);
        calculateTotal(part1Value, part2Value, newPart3Value, part4Value, part5Value);
    };

    const handlePart4Change = (event) => {
        const newPart4Value = event.target.value;
        setPart4Value(newPart4Value);
        setSelectedOption4(event.target.value);
        calculateTotal(part1Value, part2Value, part3Value, newPart4Value, part5Value);
    };

    const handlePart5Change = (event) => {
        const newPart5Value = event.target.value;
        setPart5Value(newPart5Value);
        setSelectedOption5(event.target.value);
        calculateTotal(part1Value, part2Value, part3Value, part4Value, newPart5Value);
    };


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

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { isValid, errors } = validateForm();

        if (!isValid) {
            setErrorForm(errors);
            console.log(errors);
            return;
        }

        let htmlContentAdmin = `<p>Bonjour, un client a validé le devis en ligne. Voici le contenu de celui-ci :</p>
            <p>Nom : ${name}</p>
            <p>Mail : ${email}</p>
            <p>Tel : ${phoneNumber}</p>
            <p>Message : ${message}</p>`;
        let htmlContentClient = `<p>Bonjour ${name}, voici votre demande de devis.</p>
            <p>Après vérification par un administrateur, vous recevrez un nouvel email contenant un devis officiel valable 30 jours à compter de la réception de celui-ci.</p>`;

        const partValues = [part1Value, part2Value, part3Value, part4Value, part5Value];

        partValues.forEach(partValue => {
            if (partValue) {
                htmlContentAdmin += `<p>${descriptions[partValue]} (${prices[partValue]}€)</p>`;
                htmlContentClient += `<p>${descriptions[partValue]} (${prices[partValue]}€)</p>`;
            }
        });

        htmlContentAdmin += `<p>Prix total: ${result}€ TTC</p>`;
        htmlContentClient += `<p>Prix total: ${result}€ TTC</p>`;

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

            const clientEmailPromise = axios.post(
                "https://api.brevo.com/v3/smtp/email",
                {
                    sender: { name, email },
                    to: [{ email: email }],
                    subject: "Legouet Guitares - votre demande de devis",
                    htmlContent: htmlContentClient
                },
                {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "api-key": process.env.REACT_APP_SENDINGBLUE_EMAIL,
                    },
                }
            );

            const [adminResponse, clientResponse] = await axios.all([adminEmailPromise, clientEmailPromise]);

            console.log("Admin email response:", adminResponse);
            console.log("Client email response:", clientResponse);

            setName("");
            setEmail("");
            setPhoneNumber("");
            setMessage("");
            setErrorForm({});
            setSelectedOption1(null);
            setSelectedOption2(null);
            setSelectedOption3(null);
            setSelectedOption4(null);
            setSelectedOption5(null);
            setIsCheckedConf(false);
            setIsCheckedBot(false);
            setSendMail("Votre message a été envoyé avec succès ! Vous allez recevoir un e-mail de confirmation. En cas de non-réception, veuillez vérifier vos courriers indésirables.");
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
        <form onSubmit={handleSubmit}>
            <fieldset className='form-cart'>
                <legend>CORPS</legend>
                <label>
                    <span>Aluminium</span>
                    <input
                        type="radio"
                        value="aluminium"
                        checked={material === "aluminium"}
                        onChange={handleMaterialChange}
                    />
                </label>
                <label>
                    <span>Titane</span>
                    <input
                        type="radio"
                        value="titane"
                        checked={material === "titane"}
                        onChange={handleMaterialChange}
                    />
                </label>
                {material === "aluminium" && (
                    <div className='form-cart'>
                        <label htmlFor='option1Price' className={selectedOption1 === "option1Price" ? "selected" : ""}>
                            <span>Corps aluminium vernis mat ou brillant avec motif usinage apparent (1368€)</span>
                        </label>
                        <input
                            type="radio"
                            id='option1Price'
                            value="option1Price"
                            checked={part1Value === "option1Price"}
                            onChange={handlePart1Change}
                        />
                        <label htmlFor='option2Price' className={selectedOption1 === "option2Price" ? "selected" : ""}>
                            <span>Corps aluminium peinture et vernis selon gamme RAL Design (1656€)</span>
                        </label>
                        <input
                            type="radio"
                            id='option2Price'
                            value="option2Price"
                            checked={part1Value === "option2Price"}
                            onChange={handlePart1Change}
                        />
                        <label htmlFor='option3Price' className={selectedOption1 === "option3Price" ? "selected" : ""}>
                            <span>Corps aluminium vernis coloré avec motif usinage apparent (1656€)</span>
                        </label>
                        <input
                            type="radio"
                            id='option3Price'
                            value="option3Price"
                            checked={part1Value === "option3Price"}
                            onChange={handlePart1Change}
                        />
                        <label htmlFor='option4Price' className={selectedOption1 === "option4Price" ? "selected" : ""} >
                            <span>Corps aluminium traitement Cerakote (1656€)</span>
                        </label>
                        <input
                            type="radio"
                            id='option4Price'
                            value="option4Price"
                            checked={part1Value === "option4Price"}
                            onChange={handlePart1Change}
                        />
                    </div>
                )}
                {material === "titane" && (
                    <div className='form-cart'>
                        <label htmlFor='option5Price' className={selectedOption1 === "option5Price" ? "selected" : ""}>
                            <span>Corps titane vernis (6120€)</span>
                        </label>
                        <input
                            type="radio"
                            id='option5Price'
                            value="option5Price"
                            checked={part1Value === "option5Price"}
                            onChange={handlePart1Change}
                        />
                        <label htmlFor='option6Price' className={selectedOption1 === "option6Price" ? "selected" : ""}>
                            <span>Corps titane traitement Cerakote (6120€)</span>
                        </label>
                        <input
                            type="radio"
                            id='option6Price'
                            value="option6Price"
                            checked={part1Value === "option6Price"}
                            onChange={handlePart1Change}
                        />
                    </div>
                )}
            </fieldset>
            <fieldset className='form-cart'>
                <legend>ACCASTILLAGE ET VIBRATOS</legend>
                <label htmlFor='optionAPrice' className={selectedOption2 === "optionAPrice" ? "selected" : ""}>
                    <span>Tune o matic laiton (108€)</span>
                </label>
                <input
                    type="radio"
                    id='optionAPrice'
                    value="optionAPrice"
                    checked={part2Value === "optionAPrice"}
                    onChange={handlePart2Change}
                />
                <label htmlFor='optionBPrice' className={selectedOption2 === "optionBPrice" ? "selected" : ""}>
                    <span>Aluminium (87€)</span>
                </label>
                <input
                    type="radio"
                    id='optionBPrice'
                    value="optionBPrice"
                    checked={part2Value === "optionBPrice"}
                    onChange={handlePart2Change}
                />
                <label htmlFor='optionCPrice' className={selectedOption2 === "optionCPrice" ? "selected" : ""}>
                    <span>Acier inox (202€)</span>
                </label>
                <input
                    type="radio"
                    id='optionCPrice'
                    value="optionCPrice"
                    checked={part2Value === "optionCPrice"}
                    onChange={handlePart2Change}
                />
                <label htmlFor='optionDPrice' className={selectedOption2 === "optionDPrice" ? "selected" : ""}>
                    <span>Titane (360€)</span>
                </label>
                <input
                    type="radio"
                    id='optionDPrice'
                    value="optionDPrice"
                    checked={part2Value === "optionDPrice"}
                    onChange={handlePart2Change}
                />
                <label htmlFor='optionEPrice' className={selectedOption2 === "optionEPrice" ? "selected" : ""}>
                    <span>Cordier inox pontet aluminium (94€)</span>
                </label>
                <input
                    type="radio"
                    id='optionEPrice'
                    value="optionEPrice"
                    checked={part2Value === "optionEPrice"}
                    onChange={handlePart2Change}
                />
                <label htmlFor='optionFPrice' className={selectedOption2 === "optionFPrice" ? "selected" : ""}>
                    <span>Cordier inox pontet laiton (102€)</span>
                </label>
                <input
                    type="radio"
                    id='optionFPrice'
                    value="optionFPrice"
                    checked={part2Value === "optionFPrice"}
                    onChange={handlePart2Change}
                />
                <label htmlFor='optionGPrice' className={selectedOption2 === "optionGPrice" ? "selected" : ""}>
                    <span>Cordier inox pontet inox (144€)</span>
                </label>
                <input
                    type="radio"
                    id='optionGPrice'
                    value="optionGPrice"
                    checked={part2Value === "optionGPrice"}
                    onChange={handlePart2Change}
                />
                <label htmlFor='optionHPrice' className={selectedOption2 === "optionHPrice" ? "selected" : ""}>
                    <span>Cordier inox pontet titane (245€)</span>
                </label>
                <input
                    type="radio"
                    id='optionHPrice'
                    value="optionHPrice"
                    checked={part2Value === "optionHPrice"}
                    onChange={handlePart2Change}
                />
                {/* <label htmlFor='optionIPrice' className={selectedOption2 === "optionIPrice" ? "selected" : ""}>
                        <span>Floyd rose non fine tuner (245€)</span>
                    </label>
                    <input
                        type="radio"
                        id="optionIPrice"
                        value="optionIPrice"
                        checked={part2Value === "optionIPrice"}
                        onChange={handlePart2Change}
                    />
                    <label htmlFor='optionJPrice' className={selectedOption2 === "optionJPrice" ? "selected" : ""}>
                        <span>Floyd rose (375€)</span>
                    </label> 
                    <input
                        type="radio"
                        id="optionJPrice"
                        value="optionJPrice"
                        checked={part2Value === "optionJPrice"}
                        onChange={handlePart2Change}
                    />
                    <label htmlFor='optionKPrice' className={selectedOption2 === "optionKPrice" ? "selected" : ""}>
                        <span>Vegatrem (325€)</span>
                    </label> 
                    <input
                        type="radio"
                        id="optionKPrice"
                        value="optionKPrice"
                        checked={part2Value === "optionKPrice"}
                        onChange={handlePart2Change}
                    /> */}
                <label htmlFor='optionLPrice' className={selectedOption2 === "optionLPrice" ? "selected" : ""}>
                    <span>Schaller Vintage Tremolo C (218€)</span>
                </label>
                <input
                    type="radio"
                    id='optionLPrice'
                    value="optionLPrice"
                    checked={part2Value === "optionLPrice"}
                    onChange={handlePart2Change}
                />
            </fieldset>
            <fieldset className='form-cart'>
                <legend>MICROS</legend>
                <label htmlFor='option1MicroPrice' className={selectedOption3 === "option1MicroPrice" ? "selected" : ""}>
                    <span>Deux simples (type Telecaster au choix) (231€)</span>
                </label>
                <input
                    type="radio"
                    id='option1MicroPrice'
                    value="option1MicroPrice"
                    checked={part3Value === "option1MicroPrice"}
                    onChange={handlePart3Change}
                />
                <label htmlFor='option2MicroPrice' className={selectedOption3 === "option2MicroPrice" ? "selected" : ""}>
                    <span>Trois simples (type Stratocaster au choix) (346€)</span>
                </label>
                <input
                    type="radio"
                    id='option2MicroPrice'
                    value="option2MicroPrice"
                    checked={part3Value === "option2MicroPrice"}
                    onChange={handlePart3Change}
                />
                <label htmlFor='option3MicroPrice' className={selectedOption3 === "option3MicroPrice" ? "selected" : ""}>
                    <span>Deux doubles (humbucker au choix) (317€)</span>
                </label>
                <input
                    type="radio"
                    id='option3MicroPrice'
                    value="option3MicroPrice"
                    checked={part3Value === "option3MicroPrice"}
                    onChange={handlePart3Change}
                />
                <label htmlFor='option4MicroPrice' className={selectedOption3 === "option4MicroPrice" ? "selected" : ""}>
                    <span>Deux simples et un double (au choix) (391€)</span>
                </label>
                <input
                    type="radio"
                    id='option4MicroPrice'
                    value="option4MicroPrice"
                    checked={part3Value === "option4MicroPrice"}
                    onChange={handlePart3Change}
                />
            </fieldset>
            <fieldset className='form-cart'>
                <legend>MANCHES - FRETTES INOX</legend>
                <label htmlFor='option1ManchePrice' className={selectedOption4 === "option1ManchePrice" ? "selected" : ""}>
                    <span>Erable ondé une pièce (821€)</span>
                </label>
                <input
                    type="radio"
                    id='option1ManchePrice'
                    value="option1ManchePrice"
                    checked={part4Value === "option1ManchePrice"}
                    onChange={handlePart4Change}
                />
                <label htmlFor='option2ManchePrice' className={selectedOption4 === "option2ManchePrice" ? "selected" : ""}>
                    <span>Ovangkol une pièce (768€)</span>
                </label>
                <input
                    type="radio"
                    id='option2ManchePrice'
                    value="option2ManchePrice"
                    checked={part4Value === "option2ManchePrice"}
                    onChange={handlePart4Change}
                />
                <label htmlFor='option3ManchePrice' className={selectedOption4 === "option3ManchePrice" ? "selected" : ""}>
                    <span>Autres bois avec touche rapportée (928€)</span>
                </label>
                <input
                    type="radio"
                    id='option3ManchePrice'
                    value="option3ManchePrice"
                    checked={part4Value === "option3ManchePrice"}
                    onChange={handlePart4Change}
                />
                <div className='manche-alu'>Full aluminium 800g</div>
                <label htmlFor='option4ManchePrice' className={selectedOption4 === "option4ManchePrice" ? "selected" : ""}>
                    <span>Brossé (1125€)</span>
                </label>
                <input
                    type="radio"
                    id='option4ManchePrice'
                    value="option4ManchePrice"
                    checked={part4Value === "option4ManchePrice"}
                    onChange={handlePart4Change}
                />
                <label htmlFor='option5ManchePrice' className={selectedOption4 === "option5ManchePrice" ? "selected" : ""}>
                    <span>Poli (1125€)</span>
                </label>
                <input
                    type="radio"
                    id='option5ManchePrice'
                    value="option5ManchePrice"
                    checked={part4Value === "option5ManchePrice"}
                    onChange={handlePart4Change}
                />
                <label htmlFor='option6ManchePrice' className={selectedOption4 === "option6ManchePrice" ? "selected" : ""}>
                    <span>Brossé vernis (1196€)</span>
                </label>
                <input
                    type="radio"
                    id='option6ManchePrice'
                    value="option6ManchePrice"
                    checked={part4Value === "option6ManchePrice"}
                    onChange={handlePart4Change}
                />
                <label htmlFor='option7ManchePrice' className={selectedOption4 === "option7ManchePrice" ? "selected" : ""}>
                    <span>Poli vernis (1196€)</span>
                </label>
                <input
                    type="radio"
                    id='option7ManchePrice'
                    value="option7ManchePrice"
                    checked={part4Value === "option7ManchePrice"}
                    onChange={handlePart4Change}
                />
                <div className='manche-alu'>Aluminium touche inox</div>
                <label htmlFor='option8ManchePrice' className={selectedOption4 === "option8ManchePrice" ? "selected" : ""}>
                    <span>Brossé ou poli (1470€)</span>
                </label>
                <input
                    type="radio"
                    id='option8ManchePrice'
                    value="option8ManchePrice"
                    checked={part4Value === "option8ManchePrice"}
                    onChange={handlePart4Change}
                />
                <label htmlFor='option9ManchePrice' className={selectedOption4 === "option9ManchePrice" ? "selected" : ""}>
                    <span>Brossé ou poli et vernis (1540€)</span>
                </label>
                <input
                    type="radio"
                    id='option9ManchePrice'
                    value="option9ManchePrice"
                    checked={part4Value === "option9ManchePrice"}
                    onChange={handlePart4Change}
                />
                <label htmlFor='option10ManchePrice' className={selectedOption4 === "option10ManchePrice" ? "selected" : ""}>
                    <span>Cerakote (1592€)</span>
                </label>
                <input
                    type="radio"
                    id='option10ManchePrice'
                    value="option10ManchePrice"
                    checked={part4Value === "option10ManchePrice"}
                    onChange={handlePart4Change}
                />
            </fieldset>
            <fieldset className='form-cart'>
                <legend>ETUIS</legend>
                <label htmlFor='option1EtuiPrice' className={selectedOption5 === "option1EtuiPrice" ? "selected" : ""}>
                    <span>Etui Hiscox Case (215€)</span>
                </label>
                <input
                    type="radio"
                    id='option1EtuiPrice'
                    value="option1EtuiPrice"
                    checked={part5Value === "option1EtuiPrice"}
                    onChange={handlePart5Change}
                />
            </fieldset>
            <fieldset className="form-cart contact">
                <legend>CONTACT</legend>
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
                    onChange={value => setPhoneNumber(value)}
                    defaultCountry="FR"
                    required
                />      {phoneNumber && (
                    <div>{isValid ? "" : "Le numéro de téléphone n'est pas valide."}</div>
                )}
                <textarea
                    id="message"
                    value={message}
                    placeholder="Message (facultatif)"
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
                        />  <label htmlFor="checkbox">J'ai lu et j'accepte <NavLink to="/confidentialite">les conditions générales d'utilisation </NavLink></label>

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
            </fieldset>
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
                {result && <p>Total : {result}€ TTC</p>}
                <button type="submit">Envoyer</button>
            </div>
        </form>
    );
};

export default QuoteForm;