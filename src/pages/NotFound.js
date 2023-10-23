import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound = () => {
    return (
        <div className="body">
            <Header />
            <section className='error404'>
                <h1>Erreur 404</h1>
                <p>Cette page n'existe pas</p>
            </section>
            <Footer />
        </div>
    );
};

export default NotFound;