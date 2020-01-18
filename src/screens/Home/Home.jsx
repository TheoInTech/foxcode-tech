import React from 'react';
import Menubar from '../../components/Menubar';
import Splash from './components/Splash';
import Services from './components/Services';
import About from './components/About';
import './Home.scss';

const Home = () => {
    return (
        <main className="main">
            <Menubar />
            <Splash />
            <Services />
            <About />
        </main>
    );
};

export default Home;
