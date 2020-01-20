import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menubar from '../../components/Menubar';
import Footer from '../../components/Footer';
import './Terms.scss';

const Terms = () => {
    return (
        <Fragment>
            <Menubar active="/terms" />
            <main className="main">
                <section className="terms" id="terms">
                    <Container fluid>
                        <Row>
                            <Col xs="12" className="terms__header">
                                <h2 className="title">
                                    Terms &amp; Conditions
                                </h2>
                                <ul className="breadcrumbs">
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                    <li>
                                        Terms &amp; Conditions
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

export default Terms;
