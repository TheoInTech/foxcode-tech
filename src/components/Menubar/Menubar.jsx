import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image'
import './Menubar.scss';

class Menubar extends Component {
    constructor(props) {
        super(props);
        this.props = props;

        this.navs = [
            {
                link: '/',
                label: 'Home',
                title: 'home'
            },
            {
                link: '/#pricing',
                label: 'Pricing',
                title: 'pricing'
            },
            {
                link: '/faq',
                label: 'FAQ',
                title: 'faq'
            },
            {
                link: '/contact',
                label: 'Contact Us',
                title: 'contact'
            }
        ]
    }

    render() {
        const { active } = this.props;

        return (
            <Navbar bg="white" expand="lg" fixed="top">
                <Navbar.Brand href="/" title="home"><Image src="/logo.png" width="90" alt="Fox Code Tech Solutions" title="Fox Code Tech Solutions"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end flex-1" defaultActiveKey="/" activeKey={active}>
                        {
                            this.navs.map((nav, i) => 
                                <Nav.Item key={`nav-${i}`}>
                                    <Nav.Link href={nav.link} title={nav.title}>{nav.label}</Nav.Link>
                                </Nav.Item>
                            )
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
};

export default withRouter(Menubar);
