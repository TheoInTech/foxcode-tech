import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';
import './About.scss';

const About = () => {
    return (
        <section className="about" id="about-us">
            <Container fluid>
                <Row>
                    <Col lg="6" xs="12" className="about__statement">
                        <h3 className="section-title">About Fox Code</h3>
                        <h2 className="title">
                            We'll develop your websites <span className="text-emphasis">intelligently.</span> Why?<br/>
                            Because this is what your business needs.<br/>
                        </h2>
                        <p className="subtitle">
                            Here at <span className="text-emphasis">Fox Code</span>, we understand the challenges that come with your business.
                        </p>
                        <p className="subtitle">
                            We're here to help.
                        </p>
                        <p className="subtitle">
                            Don't waste money building a page or website that won't generate money.<br/>
                            Talk to us now!
                        </p>
                    </Col>
                    <Col lg="6" xs="12" className="about__image no-margin-padding">
                        <Image src="/images/about.png" width="100%" alt="About BG" title="About BG" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
