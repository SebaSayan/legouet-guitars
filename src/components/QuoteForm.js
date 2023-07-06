import React, { useState } from 'react';


const QuoteForm = () => {
    const [part1Value, setPart1Value] = useState('');
    const [part2Value, setPart2Value] = useState('');
    const [part3Value, setPart3Value] = useState('');
    const [part4Value, setPart4Value] = useState('');
    const [part5Value, setPart5Value] = useState('');
    const [result, setResult] = useState('');


    const handlePart1Change = (event) => {
        const selectedValue = event.target.value;
        setPart1Value(selectedValue);
        calculateResult(selectedValue, part2Value, part3Value, part4Value, part5Value);
    };

    const handlePart2Change = (event) => {
        const selectedValue = event.target.value;
        setPart2Value(selectedValue);
        calculateResult(part1Value, selectedValue, part3Value, part4Value, part5Value);
    };

    const handlePart3Change = (event) => {
        const selectedValue = event.target.value;
        setPart3Value(selectedValue);
        calculateResult(part1Value, part2Value, selectedValue, part4Value, part5Value);
    };

    const handlePart4Change = (event) => {
        const selectedValue = event.target.value;
        setPart4Value(selectedValue);
        calculateResult(part1Value, part2Value, part3Value, selectedValue, part5Value);
    };

    const handlePart5Change = (event) => {
        const selectedValue = event.target.value;
        setPart5Value(selectedValue);
        calculateResult(part1Value, part2Value, part3Value, part4Value, selectedValue);
    };

    const calculateResult = (part1, part2, part3, part4, part5) => {
        let calculatedResult = '';

        if (part1 === 'option1' && part2 === 'optionA' && part3 === 'optionX') {
            calculatedResult = 'Résultat 1';
        } else if (part1 === 'option2' && part2 === 'optionB' && part4 === 'optionY' && part5 === 'optionZ') {
            calculatedResult = 'Résultat 2';
        } else {
            calculatedResult = '0';
        }

        setResult(calculatedResult);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h3>Classe Corps</h3>
                <label>
                    Corps aluminium vernis mat ou brillant avec motif usinage apparent (1368€)
                    <input
                        type="radio"
                        value="option1"
                        checked={part1Value === "option1"}
                        onChange={handlePart1Change}
                    />
                </label>
                <label>
                    Option 2:
                    <input
                        type="radio"
                        value="option2"
                        checked={part1Value === "option2"}
                        onChange={handlePart1Change}
                    />
                </label>
                <label>
                    Option 3:
                    <input
                        type="radio"
                        value="option3"
                        checked={part1Value === 'option3'}
                        onChange={handlePart1Change}
                    />
                </label>
                <label>
                    Option 4:
                    <input
                        type="radio"
                        value="option4"
                        checked={part1Value === 'option4'}
                        onChange={handlePart1Change}
                    />
                </label>
                <label>
                    Option 5:
                    <input
                        type="radio"
                        value="option5"
                        checked={part1Value === 'option5'}
                        onChange={handlePart1Change}
                    />
                </label>
                <label>
                    Option 6:
                    <input
                        type="radio"
                        value="option6"
                        checked={part1Value === 'option6'}
                        onChange={handlePart1Change}
                    />
                </label>
            </div>
            <div>
                <h3>Classe ACCASTILLAGE ET VIBRATOS</h3>
                <label>
                    Tune o matic laiton (108€)
                    <input
                        type="radio"
                        value="optionA"
                        checked={part2Value === "optionB"}
                        onChange={handlePart2Change}
                    />
                </label>
                <label>
                    Option B:
                    <input
                        type="radio"
                        value="optionB"
                        checked={part2Value === 'optionB'}
                        onChange={handlePart2Change}
                    />
                </label>
                <label>
                    Option B:
                    <input
                        type="radio"
                        value="optionC"
                        checked={part2Value === 'optionC'}
                        onChange={handlePart2Change}
                    />
                </label>
                <label>
                    Option B:
                    <input
                        type="radio"
                        value="optionD"
                        checked={part2Value === 'optionD'}
                        onChange={handlePart2Change}
                    />
                </label>
                <label>
                    Option B:
                    <input
                        type="radio"
                        value="optionE"
                        checked={part2Value === 'optionE'}
                        onChange={handlePart2Change}
                    />
                </label>
                <label>
                    Option B:
                    <input
                        type="radio"
                        value="optionF"
                        checked={part2Value === 'optionF'}
                        onChange={handlePart2Change}
                    />
                </label>
                <label>
                    Option B:
                    <input
                        type="radio"
                        value="optionG"
                        checked={part2Value === 'optionG'}
                        onChange={handlePart2Change}
                    />
                </label>
                <label>
                    Option B:
                    <input
                        type="radio"
                        value="optionH"
                        checked={part2Value === 'optionH'}
                        onChange={handlePart2Change}
                    />
                </label>
                <label>
                    Option B:
                    <input
                        type="radio"
                        value="optionI"
                        checked={part2Value === 'optionI'}
                        onChange={handlePart2Change}
                    />
                </label>
                <label>
                    Option B:
                    <input
                        type="radio"
                        value="optionJ"
                        checked={part2Value === 'optionJ'}
                        onChange={handlePart2Change}
                    />
                </label>
                <label>
                    Option B:
                    <input
                        type="radio"
                        value="optionK"
                        checked={part2Value === 'optionK'}
                        onChange={handlePart2Change}
                    />
                </label>
                <label>
                    Option B:
                    <input
                        type="radio"
                        value="optionL"
                        checked={part2Value === 'optionL'}
                        onChange={handlePart2Change}
                    />
                </label>
            </div>
            <div>
                <h3>Classe MICROS</h3>
                <label>
                    Option 1:
                    <input
                        type="radio"
                        value="option1"
                        checked={part3Value === 'option1'}
                        onChange={handlePart3Change}
                    />
                </label>
                <label>
                    Option 2:
                    <input
                        type="radio"
                        value="option2"
                        checked={part3Value === 'option2'}
                        onChange={handlePart3Change}
                    />
                </label>
                <label>
                    Option 3:
                    <input
                        type="radio"
                        value="option3"
                        checked={part3Value === 'option3'}
                        onChange={handlePart3Change}
                    />
                </label>
                <label>
                    Option 4:
                    <input
                        type="radio"
                        value="option4"
                        checked={part3Value === 'option4'}
                        onChange={handlePart3Change}
                    />
                </label>
            </div>
            <div>
                <h3>Classe MANCHES - FRETTES INOX</h3>
                <label>
                    Option 1:
                    <input
                        type="radio"
                        value="option1"
                        checked={part4Value === 'option1'}
                        onChange={handlePart4Change}
                    />
                </label>
                <label>
                    Option 1:
                    <input
                        type="radio"
                        value="option1"
                        checked={part4Value === 'option1'}
                        onChange={handlePart4Change}
                    />
                </label>
                <label>
                    Option 1:
                    <input
                        type="radio"
                        value="option1"
                        checked={part4Value === 'option1'}
                        onChange={handlePart4Change}
                    />
                </label>
                <label>
                    Option 1:
                    <input
                        type="radio"
                        value="option1"
                        checked={part4Value === 'option1'}
                        onChange={handlePart1Change}
                    />
                </label>
                <label>
                    Option 1:
                    <input
                        type="radio"
                        value="option1"
                        checked={part4Value === 'option1'}
                        onChange={handlePart1Change}
                    />
                </label>
                <label>
                    Option 1:
                    <input
                        type="radio"
                        value="option1"
                        checked={part4Value === 'option1'}
                        onChange={handlePart1Change}
                    />
                </label>
                <label>
                    Option 1:
                    <input
                        type="radio"
                        value="option1"
                        checked={part4Value === 'option1'}
                        onChange={handlePart4Change}
                    />
                </label>
                <label>
                    Option 1:
                    <input
                        type="radio"
                        value="option1"
                        checked={part4Value === 'option1'}
                        onChange={handlePart4Change}
                    />
                </label>
                <label>
                    Option 1:
                    <input
                        type="radio"
                        value="option1"
                        checked={part4Value === 'option1'}
                        onChange={handlePart4Change}
                    />
                </label>
                <label>
                    Option 1:
                    <input
                        type="radio"
                        value="option1"
                        checked={part4Value === 'option1'}
                        onChange={handlePart4Change}
                    />
                </label>
            </div>
            <div>
                <h3>Classe ETUIS</h3>
                <label>
                    Option 1:
                    <input
                        type="radio"
                        value="option1"
                        checked={part5Value === 'option1'}
                        onChange={handlePart5Change}
                    />
                </label>
            </div>
            <button type="submit">Envoyer</button>
            {result && <p>Résultat : {result}€</p>}
        </form>
    );
};

export default QuoteForm;