import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menubar from '../../components/Menubar';
import Footer from '../../components/Footer';
import './Contact.scss';

const Contact = () => {
    return (
        <Fragment>
            <Menubar active="/contact" />
            <main className="main">
                <section className="contact" id="contact">
                    <Container fluid>
                        <Row>
                            <Col xs="12" className="contact__header">
                                <h2 className="title">
                                    Contact Us
                                </h2>
                                <ul className="breadcrumbs">
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                    <li>
                                        Contact Us
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
            <Footer />
        </Fragment>
    );
};

export default Contact;
