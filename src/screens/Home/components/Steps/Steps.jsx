import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
// import Image from 'react-bootstrap/Image';
import './Steps.scss';

const Steps = () => {
    return (
        <section className="steps">
            <Container fluid>
                <Row>
                    <Col xs="12" className="steps__statement">
                        <h3 className="section-title">Steps</h3>
                        <h2 className="title">
                            So how do we start?
                        </h2>
                        <p className="subtitle">
                            It's quick and easy. Just tell us what you want!
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Steps;
