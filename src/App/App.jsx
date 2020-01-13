import React from 'react';
import { Pane } from 'evergreen-ui';
import Navbar from './components/Navbar';
import './App.scss';

const App = () => {
    return (
        <main className="main">
            <Pane
                display="flex"
                flexWrap="wrap"
                background="orangeTint"
                justifyContent="center"
                height="100vh"    
            >
                <Navbar />
            </Pane>
        </main>
    );
};

export default App;
