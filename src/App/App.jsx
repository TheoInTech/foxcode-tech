import React from 'react';
import { Pane } from 'evergreen-ui';
import Navbar from './components/Navbar';
import './App.scss';

const App = () => {
    return (
        <main className="main">
            <Pane>
                <Navbar />
            </Pane>
        </main>
    );
};

export default App;
