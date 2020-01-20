import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menubar from '../../components/Menubar';
import Footer from '../../components/Footer';
import './Privacy.scss';

const Privacy = () => {
    return (
        <Fragment>
            <Menubar active="/privacy" />
            <main className="main">
                <section className="privacy" id="privacy">
                    <Container fluid>
                        <Row>
                            <Col xs="12" className="privacy__header">
                                <h2 className="title">
                                    Privacy Policy
                                </h2>
                                <ul className="breadcrumbs">
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                    <li>
                                        Privacy Policy
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

export default Privacy;
