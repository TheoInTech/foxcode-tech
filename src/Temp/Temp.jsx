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
                <Pane display="flex" flexWrap="wrap" alignItems="center" justifyContent="center" width="100%" maxWidth={600} flexBasis="100%">
                    <img src="/logo.png" alt="logo" />
                    <Heading size={900} marginTop={24}>The fox is heading your way...</Heading>
                </Pane>
            </Pane>
        </main>
    );
};

export default Temp;
