import axios from 'axios';
import React, { useState } from 'react';


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
    const [isChecked, setIsChecked] = useState(false);
    const [errorForm, setErrorForm] = useState({});
    const [sendMail, setSendMail] = useState("");
    const [message, setMessage] = useState("");
    const [result, setResult] = useState('');
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

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
        optionIPrice: "245",
        optionJPrice: "375",
        optionKPrice: "325",
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

        if (message.length < 10) {
            isValid = false;
            errors.message = "Le message doit contenir au moins 10 caractères";
        }
        if (!isChecked) {
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
        try {
            const response = await axios.post(
                "https://api.sendinblue.com/v3/smtp/email",
                {
                    sender: { name, email },
                    to: [{ email: "contact@creawebdev.fr" }],
                    subject: "Message du formulaire CreaWebDev",
                    htmlContent: message,
                },
                {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "api-key": process.env.REACT_APP_SENDINGBLUE_EMAIL,
                    },
                }
            );
            console.log(response);
            setName("");
            setEmail("");
            setMessage("");
            setErrorForm({});
            setIsChecked(false);
            setSendMail("Votre message a été envoyé avec succès !");
        } catch (error) {
            console.error(error);
            setErrorForm({});
            setIsChecked(false);
            setSendMail("Une erreur est survenue lors de l'envoi de votre message.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='form-cart'>
                <h3>Classe Corps</h3>
                <label className={selectedOption1 === "option1Price" ? "selected" : ""}>
                    Corps aluminium vernis mat ou brillant avec motif usinage apparent (1368€)
                    <input
                        type="radio"
                        value="option1Price"
                        checked={part1Value === "option1Price"}
                        onChange={handlePart1Change}
                    />
                </label>
                <label className={selectedOption1 === "option2Price" ? "selected" : ""}>
                    Corps aluminium peinture et vernis selon gamme RAL Design (1656€)
                    <input
                        type="radio"
                        value="option2Price"
                        checked={part1Value === "option2Price"}
                        onChange={handlePart1Change}
                    />
                </label>
                <label className={selectedOption1 === "option3Price" ? "selected" : ""}>
                    Corps aluminium vernis coloré avec motif usinage apparent (1656€)
                    <input
                        type="radio"
                        value="option3Price"
                        checked={part1Value === "option3Price"}
                        onChange={handlePart1Change}
                    />
                </label>
                <label className={selectedOption1 === "option4Price" ? "selected" : ""} >
                    Corps aluminium traitement Cerakote (1656€)
                    <input
                        type="radio"
                        value="option4Price"
                        checked={part1Value === "option4Price"}
                        onChange={handlePart1Change}
                    />
                </label>
                <label className={selectedOption1 === "option5Price" ? "selected" : ""}>
                    Corps titane vernis (6120€)
                    <input
                        type="radio"
                        value="option5Price"
                        checked={part1Value === "option5Price"}
                        onChange={handlePart1Change}
                    />
                </label>
                <label className={selectedOption1 === "option6Price" ? "selected" : ""}>
                    Corps titane traitement Cerakote (6120€)
                    <input
                        type="radio"
                        value="option6Price"
                        checked={part1Value === "option6Price"}
                        onChange={handlePart1Change}
                    />
                </label>
            </div>
            <div className='form-cart'>
                <h3>Classe ACCASTILLAGE ET VIBRATOS</h3>
                <label className={selectedOption2 === "optionAPrice" ? "selected" : ""}>
                    Tune o matic laiton (108€)
                    <input
                        type="radio"
                        value="optionAPrice"
                        checked={part2Value === "optionAPrice"}
                        onChange={handlePart2Change}
                    />
                </label>
                <label className={selectedOption2 === "optionBPrice" ? "selected" : ""}>
                    Tune o matic aluminium (87€)
                    <input
                        type="radio"
                        value="optionBPrice"
                        checked={part2Value === "optionBPrice"}
                        onChange={handlePart2Change}
                    />
                </label>
                <label className={selectedOption2 === "optionCPrice" ? "selected" : ""}>
                    Tune o matic acier inox (202€)
                    <input
                        type="radio"
                        value="optionCPrice"
                        checked={part2Value === "optionCPrice"}
                        onChange={handlePart2Change}
                    />
                </label>
                <label className={selectedOption2 === "optionDPrice" ? "selected" : ""}>
                    Tune o matic titane (360€)
                    <input
                        type="radio"
                        value="optionDPrice"
                        checked={part2Value === "optionDPrice"}
                        onChange={handlePart2Change}
                    />
                </label>
                <label className={selectedOption2 === "optionEPrice" ? "selected" : ""}>
                    Cordier inox pontet aluminium (94€)
                    <input
                        type="radio"
                        value="optionEPrice"
                        checked={part2Value === "optionEPrice"}
                        onChange={handlePart2Change}
                    />
                </label>
                <label className={selectedOption2 === "optionFPrice" ? "selected" : ""}>
                    Cordier inox pontet laiton (102€)
                    <input
                        type="radio"
                        value="optionFPrice"
                        checked={part2Value === "optionFPrice"}
                        onChange={handlePart2Change}
                    />
                </label>
                <label className={selectedOption2 === "optionGPrice" ? "selected" : ""}>
                    Cordier inox pontet inox (144€)
                    <input
                        type="radio"
                        value="optionGPrice"
                        checked={part2Value === "optionGPrice"}
                        onChange={handlePart2Change}
                    />
                </label>
                <label className={selectedOption2 === "optionHPrice" ? "selected" : ""}>
                    Cordier inox pontet titane (245€)
                    <input
                        type="radio"
                        value="optionHPrice"
                        checked={part2Value === "optionHPrice"}
                        onChange={handlePart2Change}
                    />
                </label>
                <label className={selectedOption2 === "optionIPrice" ? "selected" : ""}>
                    Floyd rose non fine tuner (245€)
                    <input
                        type="radio"
                        value="optionIPrice"
                        checked={part2Value === "optionIPrice"}
                        onChange={handlePart2Change}
                    />
                </label>
                <label className={selectedOption2 === "optionJPrice" ? "selected" : ""}>
                    Floyd rose (375€)
                    <input
                        type="radio"
                        value="optionJPrice"
                        checked={part2Value === "optionJPrice"}
                        onChange={handlePart2Change}
                    />
                </label>
                <label className={selectedOption2 === "optionKPrice" ? "selected" : ""}>
                    Vegatrem (325€)
                    <input
                        type="radio"
                        value="optionKPrice"
                        checked={part2Value === "optionKPrice"}
                        onChange={handlePart2Change}
                    />
                </label>
                <label className={selectedOption2 === "optionLPrice" ? "selected" : ""}>
                    Schaller Vintage Tremolo C (218€)
                    <input
                        type="radio"
                        value="optionLPrice"
                        checked={part2Value === "optionLPrice"}
                        onChange={handlePart2Change}
                    />
                </label>
            </div>
            <div className='form-cart'>
                <h3>Classe MICROS</h3>
                <label className={selectedOption3 === "option1MicroPrice" ? "selected" : ""}>
                    Deux simples (type Telecaster au choix) (231€)
                    <input
                        type="radio"
                        value="option1MicroPrice"
                        checked={part3Value === "option1MicroPrice"}
                        onChange={handlePart3Change}
                    />
                </label>
                <label className={selectedOption3 === "option2MicroPrice" ? "selected" : ""}>
                    Trois simples (type Stratocaster au choix) (346€)
                    <input
                        type="radio"
                        value="option2MicroPrice"
                        checked={part3Value === "option2MicroPrice"}
                        onChange={handlePart3Change}
                    />
                </label>
                <label className={selectedOption3 === "option3MicroPrice" ? "selected" : ""}>
                    Deux doubles (humbucker au choix) (317€)
                    <input
                        type="radio"
                        value="option3MicroPrice"
                        checked={part3Value === "option3MicroPrice"}
                        onChange={handlePart3Change}
                    />
                </label>
                <label className={selectedOption3 === "option4MicroPrice" ? "selected" : ""}>
                    Deux simples et un double (au choix) (391€)
                    <input
                        type="radio"
                        value="option4MicroPrice"
                        checked={part3Value === "option4MicroPrice"}
                        onChange={handlePart3Change}
                    />
                </label>
            </div>
            <div className='form-cart'>
                <h3>Classe MANCHES - FRETTES INOX</h3>
                <label className={selectedOption4 === "option1ManchePrice" ? "selected" : ""}>
                    Erable ondé une pièce (821€)
                    <input
                        type="radio"
                        value="option1ManchePrice"
                        checked={part4Value === "option1ManchePrice"}
                        onChange={handlePart4Change}
                    />
                </label>
                <label className={selectedOption4 === "option2ManchePrice" ? "selected" : ""}>
                    Ovangkol une pièce (768€)
                    <input
                        type="radio"
                        value="option2ManchePrice"
                        checked={part4Value === "option2ManchePrice"}
                        onChange={handlePart4Change}
                    />
                </label>
                <label className={selectedOption4 === "option3ManchePrice" ? "selected" : ""}>
                    Autres bois avec touche rapportée (928€)
                    <input
                        type="radio"
                        value="option3ManchePrice"
                        checked={part4Value === "option3ManchePrice"}
                        onChange={handlePart4Change}
                    />
                </label>
                <label className={selectedOption4 === "option4ManchePrice" ? "selected" : ""}>
                    Aluminium light weight brossé (1125€)
                    <input
                        type="radio"
                        value="option4ManchePrice"
                        checked={part4Value === "option4ManchePrice"}
                        onChange={handlePart4Change}
                    />
                </label>
                <label className={selectedOption4 === "option5ManchePrice" ? "selected" : ""}>
                    Aluminium light weight poli (1125€)
                    <input
                        type="radio"
                        value="option5ManchePrice"
                        checked={part4Value === "option5ManchePrice"}
                        onChange={handlePart4Change}
                    />
                </label>
                <label className={selectedOption4 === "option6ManchePrice" ? "selected" : ""}>
                    Aluminium light weight brossé vernis (1196€)
                    <input
                        type="radio"
                        value="option6ManchePrice"
                        checked={part4Value === "option6ManchePrice"}
                        onChange={handlePart4Change}
                    />
                </label>
                <label className={selectedOption4 === "option7ManchePrice" ? "selected" : ""}>
                    Aluminium light weight poli vernis (1196€)
                    <input
                        type="radio"
                        value="option7ManchePrice"
                        checked={part4Value === "option7ManchePrice"}
                        onChange={handlePart4Change}
                    />
                </label>
                <label className={selectedOption4 === "option8ManchePrice" ? "selected" : ""}>
                    INFINITE alu/inox brossé ou poli (1470€)
                    <input
                        type="radio"
                        value="option8ManchePrice"
                        checked={part4Value === "option8ManchePrice"}
                        onChange={handlePart4Change}
                    />
                </label>
                <label className={selectedOption4 === "option9ManchePrice" ? "selected" : ""}>
                    INFINITE alu/inox brossé ou poli et vernis (1540€)
                    <input
                        type="radio"
                        value="option9ManchePrice"
                        checked={part4Value === "option9ManchePrice"}
                        onChange={handlePart4Change}
                    />
                </label>
                <label className={selectedOption4 === "option10ManchePrice" ? "selected" : ""}>
                    INFINITE alu/inox Cerakote (1592€)
                    <input
                        type="radio"
                        value="option10ManchePrice"
                        checked={part4Value === "option10ManchePrice"}
                        onChange={handlePart4Change}
                    />
                </label>
            </div>
            <div className='form-cart'>
                <h3>Classe ETUIS</h3>
                <label className={selectedOption5 === "option1EtuiPrice" ? "selected" : ""}>
                    Etui Hiscox Case (215€)
                    <input
                        type="radio"
                        value="option1EtuiPrice"
                        checked={part5Value === "option1EtuiPrice"}
                        onChange={handlePart5Change}
                    />
                </label>
            </div>
            <div className="form-cart contact">
                <input
                    type="text"
                    id="name"
                    value={name}
                    placeholder="Nom"
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    id="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <textarea
                    id="message"
                    value={message}
                    placeholder="Message"
                    onChange={(e) => setMessage(e.target.value)}
                />
                <input
                    type="checkbox"
                    id="checkbox"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    title="Cochez cette case pour prouver que vous n'êtes pas un robot"
                />
            </div>
            <div className="bottom-form">
                <button type="submit">Envoyer</button>
                {result && <p>Résultat : {result}€</p>}
            </div>
        </form>
    );
};

export default QuoteForm;