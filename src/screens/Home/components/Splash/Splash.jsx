import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import FCButton from '../../../../components/FCButton';
import './Splash.scss';

const Splash = () => {
    return (
        <section className="splash">
            <Container fluid>
                <Row>
                    <Col lg="6" xs="12" className="splash__statement">
                        <h1 className="splash__statement__title">Trust us.<br/>You <span className="text-emphasis">definitely</span><br/> need a website.</h1>
                        <p className="subtitle">Not just some Facebook page. *ugh*</p>
                        <Form className="splash__statement__form">
                            <Form.Row>
                                <Col lg="7" sm="12">
                                    <Form.Control type="text" placeholder="Email address / Phone number" className="splash__statement__form__input" />
                                </Col>
                                <Col lg="5" sm="12" className="no-margin-padding">
                                    <FCButton type="submit" onClick={() => alert('Submitted!')} className="splash__statement__form__button">Get appointment</FCButton>
                                </Col>
                            </Form.Row>
                        </Form>
                    </Col>
                    <Col lg="6" xs="12" className="splash__image">
                        <Image src="/images/splash.png" width="100%" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Splash;
