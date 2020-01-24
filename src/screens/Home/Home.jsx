import React from 'react';
import Menubar from '../../components/Menubar';
import Splash from './components/Splash';
import Services from './components/Services';
import About from './components/About';
import Steps from './components/Steps';
import NumericData from './components/NumericData';
import Pricing from './components/Pricing';
import Footer from '../../components/Footer';
import './Home.scss';

const Home = () => {
    return (
        <main className="main">
            <Menubar />
            <Splash />
            <About />
            <Services />
            <Steps />
            <NumericData />
            <Pricing />
            <Footer />
        </main>
    );
};

export default Home;
