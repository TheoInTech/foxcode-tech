import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';
import './Steps.scss';

const Steps = () => {
    return (
        <section className="steps" id="steps">
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
                <Row className="steps__process">
                    <Col lg="3" xs="12" className="steps__process__wrapper">
                        <div className="steps__process__image">
                            <Image src="/images/step-01.svg" alt="Planning" title="Planning" width="250" />
                        </div>
                        <h3 className="steps__process__title">Planning</h3>
                        <p className="steps__process__description">
                            Help us understand your business, ideas and goals.
                        </p>
                    </Col>
                    <Col lg="3" xs="12" className="steps__process__wrapper">
                        <div className="steps__process__image">
                            <Image src="/images/step-02.svg" alt="Development" title="Development" width="250" />
                        </div>
                        <h3 className="steps__process__title">Development</h3>
                        <p className="steps__process__description">
                            We will start putting your amazing ideas into reality.
                        </p>
                    </Col>
                    <Col lg="3" xs="12" className="steps__process__wrapper">
                        <div className="steps__process__image">
                            <Image src="/images/step-03.svg" alt="Consultation" title="Consultation" width="250" />
                        </div>
                        <h3 className="steps__process__title">Consultation</h3>
                        <p className="steps__process__description">
                            You will be able to check our work before going live. If everything is okay, we will deploy it at once.
                        </p>
                    </Col>
                    <Col lg="3" xs="12" className="steps__process__wrapper">
                        <div className="steps__process__image">
                            <Image src="/images/step-04.svg" alt="Marketing" title="Marketing" width="250" />
                        </div>
                        <h3 className="steps__process__title">Marketing</h3>
                        <p className="steps__process__description">
                            The rest is up to us. If you subscribed to our marketing, we will drive traffic to your website.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Steps;
