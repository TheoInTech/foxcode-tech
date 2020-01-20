import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menubar from '../../components/Menubar';
import Footer from '../../components/Footer';
import './Faq.scss';

const Faq = () => {
    return (
        <Fragment>
            <Menubar active="/faq" />
            <main className="main">
                <section className="faq" id="faq">
                    <Container fluid>
                        <Row>
                            <Col xs="12" className="faq__header">
                                <h2 className="title">
                                    Frequently Asked Questions
                                </h2>
                                <ul className="breadcrumbs">
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                    <li>
                                        FAQ
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

export default Faq;
