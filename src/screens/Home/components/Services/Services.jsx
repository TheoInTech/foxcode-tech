import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import './Services.scss';

const Services = () => {
    return (
        <section className="services">
            <Container fluid>
                <Row className="justify-content-center">
                    <Col lg={4} sm={12}>
                        <Card className="services__card">
                            <Card.Body className="services__card__body">
                                <Image src="https://via.placeholder.com/166x150" alt="Web Development" />
                                <h3 className="services__card__body__title">Website Development</h3>
                                <p className="services__card__body__description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis porro eos consequuntur tempora ratione.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} sm={12}>
                        <Card className="services__card">
                            <Card.Body className="services__card__body">
                                <Image src="https://via.placeholder.com/166x150" alt="Logo &amp; CreativesDesign" />
                                <h3 className="services__card__body__title">Logo &amp; Creatives Design</h3>
                                <p className="services__card__body__description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis porro eos consequuntur tempora ratione.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} sm={12}>
                        <Card className="services__card">
                            <Card.Body className="services__card__body">
                                <Image src="https://via.placeholder.com/166x150" alt="Digital Marketing" />
                                <h3 className="services__card__body__title">Digital Marketing</h3>
                                <p className="services__card__body__description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis porro eos consequuntur tempora ratione.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Services;
