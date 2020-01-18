import React from 'react';
import { Pane, Heading  } from 'evergreen-ui';

const Temp = () => {
    return (
        <main className="main">
            <Pane 
                display="flex"
                flexWrap="wrap"
                background="orangeTint"
                alignItems="center"
                justifyContent="center"
                height="100vh"
            >
                <Pane display="flex" flexWrap="wrap" alignItems="center" justifyContent="center" textAlign="center" maxWidth={600} flexBasis="100%" margin={16}>
                    <img src="/logo.png" alt="logo" />
                    <Heading size={900} marginTop={8}>The fox is heading your way...</Heading>
                </Pane>
            </Pane>
        </main>
    );
};

export default Temp;
