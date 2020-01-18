import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';
import './About.scss';

const About = () => {
    return (
        <section className="about">
            <Container fluid>
                <Row>
                    <Col lg="6" xs="12" className="about__statement">
                        <h3 className="section-title">About Fox Code</h3>
                        <h2 className="title">
                            Developing your websites <span className="text-emphasis">intelligently.</span> Why?<br/>
                            Because this is how we make a living.<br/>
                        </h2>
                        <p className="subtitle">
                            Here at <span className="text-emphasis">Fox Code</span>, we understand your needs and how hard it is to start your website, acquire customers and finally earn money.
                        </p>
                        <p className="subtitle">
                            That's the reason why we're here!
                        </p>
                        <p className="subtitle">
                            Why develop a fully customized website from scratch when you can <span className="text-emphasis">rent</span> yours now?
                        </p>
                    </Col>
                    <Col lg="6" xs="12" className="splash__image">
                        <Image src="/images/splash.png" width="100%" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
