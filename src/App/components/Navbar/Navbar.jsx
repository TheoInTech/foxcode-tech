import React from 'react';
import { withRouter } from 'react-router-dom';
import { Pane, TabNavigation, Tab } from 'evergreen-ui'
import Component from "@reach/component-component";
import './Navbar.scss';

const Navbar = () => {
    return (
        <Pane display="flex" flexWrap="wrap" justifyContent="flex-end" flexBasis="100%" className="main__navbar">
            <Component
                initialState={{
                    selectedIndex: 0,
                    tabs: [
                        {
                            link: '/',
                            label: 'Home'
                        },
                        {
                            link: '/about-us',
                            label: 'About Us'
                        },
                        {
                            link: '/projects',
                            label: 'Projects'
                        },
                        {
                            link: '/contact',
                            label: 'Contact'
                        }
                    ]
                }}
            >
                {({ state, setState }) => (
                    <TabNavigation className="main__navbar__tab">
                        {state.tabs.map((tab, index) => (
                            <Tab key={tab.label} id={tab.label} is="a" href={tab.link} isSelected={index === 0} onSelect={() => setState({ selectedIndex: index })} height={100}>
                                {tab.label}
                            </Tab>
                        ))}
                    </TabNavigation>
                )}
            </Component>
        </Pane>
    );
};

export default withRouter(Navbar);
