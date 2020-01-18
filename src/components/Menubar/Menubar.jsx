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
                label: 'Home'
            },
            {
                link: '/plans',
                label: 'Plans'
            },
            {
                link: '/faq',
                label: 'FAQ'
            },
            {
                link: '/contact',
                label: 'Contact Us'
            }
        ]
    }

    render() {
        return (
            <Navbar bg="white" expand="lg" fixed="top">
                <Navbar.Brand href="/"><Image src="/logo.png" width="90" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end flex-1" defaultActiveKey="/">
                        {
                            this.navs.map(nav => 
                                <Nav.Item>
                                    <Nav.Link href={nav.link}>{nav.label}</Nav.Link>
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
