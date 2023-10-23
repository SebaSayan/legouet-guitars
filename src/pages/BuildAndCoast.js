import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import QuoteForm from '../components/QuoteForm';

const BuildAndCoast = () => {
    return (
        <div className="body">
            <Header />
            <section className='online-quote'>
                <h2>Devis en ligne</h2>
                <QuoteForm />
            </section>
            <Footer />
        </div>
    );
};

export default BuildAndCoast;