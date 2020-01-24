import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import './Services.scss';

const Services = () => {
    return (
        <section className="services" id="services">
            <Container fluid>
                <Row className="justify-content-center">
                    <Col lg={4} sm={12}>
                        <Card className="services__card">
                            <Card.Body className="services__card__body">
                                <div className="services__card__body__image">
                                    <Image src="/images/web-development.svg" alt="Web Development" width="220" />
                                </div>
                                <h3 className="services__card__body__title">Website Development</h3>
                                <p className="services__card__body__description">
                                    Drive more customers to your business and let the world know about it.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} sm={12}>
                        <Card className="services__card">
                            <Card.Body className="services__card__body">
                                <div className="services__card__body__image">
                                    <Image src="/images/logo-design.svg" alt="Logo &amp; CreativesDesign" width="220" />
                                </div>
                                <h3 className="services__card__body__title">Logo &amp; Creatives Design</h3>
                                <p className="services__card__body__description">
                                    Showcase your brand with the help of our creative designers.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} sm={12}>
                        <Card className="services__card">
                            <Card.Body className="services__card__body">
                                <div className="services__card__body__image">
                                    <Image src="/images/marketing.svg" alt="Digital Marketing" width="220" />
                                </div>
                                <h3 className="services__card__body__title">Digital Marketing</h3>
                                <p className="services__card__body__description">
                                    Advertise your services and products with our professional digital marketers.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" className="services__statement">
                        <h3 className="section-title">And many more!</h3>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Services;
