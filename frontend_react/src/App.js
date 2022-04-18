import React from 'react';
import { About, Footer, Header, Skills, Estudios, Portfolio } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {

    return (
        <div className='app'>
            <Navbar />
            <Header />
            <About />
            <Portfolio />
            <Skills />
            <Estudios />
            <Footer />
        </div>    
    );
}

export default App;

