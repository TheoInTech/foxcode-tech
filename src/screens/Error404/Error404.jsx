import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './Error404.scss';

const Error404 = () => {
    return (
        <main className="main">
            <section className="error404">
                <Container fluid>
                    <Row className="error-wrapper">
                        <Col lg="12">
                            <Image src="/logo.png" alt="Fox Code Tech Solutions" className="logo"/>
                            <h1 className="description">
                                Oh no! Are you lost, little foxy?<br />
                                Let me guide you <a href="/" className="text-emphasis">back home</a>
                            </h1>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    );
};

export default Error404;
