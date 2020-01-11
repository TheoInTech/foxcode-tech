import React from 'react';
import { withRouter } from 'react-router-dom';
import { TabNavigation, Tab } from 'evergreen-ui'

const Navbar = () => {
    const links = [
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
    ];

    return (
        <TabNavigation>
            {links.map((tab, index) => (
                <Tab key={`menu-${tab.label}`} is="a" href={tab.link} id={tab} isSelected={index === 0}>
                    {tab.label}
                </Tab>
            ))}
        </TabNavigation>
    );
};

export default withRouter(Navbar);
