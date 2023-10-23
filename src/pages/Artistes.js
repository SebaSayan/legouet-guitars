import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Artistes = () => {
    return (
        <div className="body">
            <Header />
            <section className='artistes'>
                <h1>Voici les artistes qui nous font confiance</h1>
            </section>
            <Footer />
        </div>
    );
};

export default Artistes;