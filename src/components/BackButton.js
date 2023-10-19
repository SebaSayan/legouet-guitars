import React from 'react';

const BackButton = () => {
    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <button className='back-button' onClick={handleGoBack}>Retour en arrière</button>
    );
};

export default BackButton;