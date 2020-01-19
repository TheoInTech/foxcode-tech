import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
// import Image from 'react-bootstrap/Image';
import './NumericData.scss';

const NumericData = () => {
    return (
        <section className="numeric-data">
            <Container fluid>
                <Row>
                    <Col lg="3" sm="6">
                        <div className="numeric-data__counter">
                            <h2 className="numeric-data__counter__count">
                                <span>5</span>
                            </h2>
                            <p className="numeric-data__counter__description">Years of experience</p>
                        </div>
                    </Col>
                    <Col lg="3" sm="6">
                        <div className="numeric-data__counter">
                            <h2 className="numeric-data__counter__count">
                                <span>4</span>
                            </h2>
                            <p className="numeric-data__counter__description">Happy Clients</p>
                        </div>
                    </Col>
                    <Col lg="3" sm="6">
                        <div className="numeric-data__counter">
                            <h2 className="numeric-data__counter__count">
                                <span>10+</span>
                            </h2>
                            <p className="numeric-data__counter__description">Projects Done</p>
                        </div>
                    </Col>
                    <Col lg="3" sm="6">
                        <div className="numeric-data__counter">
                            <h2 className="numeric-data__counter__count">
                                <span>10+</span>
                            </h2>
                            <p className="numeric-data__counter__description">Designs Made</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default NumericData;
