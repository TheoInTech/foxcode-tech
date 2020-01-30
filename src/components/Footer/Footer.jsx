import React from 'react';
import { withRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="footer__top">
                <Container className="footer__top">
                    <Row>
                        <Col lg="3" sm="12" className="footer__top__info">
                            <div className="footer__top__info__logo">
                                <a href="/" title="home"><Image src="/logo.png" alt="Fox Code Tech Solutions" title="Fox Code Tech Solutions" width="80" /></a>
                            </div>
                            <div className="footer__top__info__content">
                                <div className="footer__top__info__content__item">
                                    <span>Office Location</span>
                                    <p>Balagtas, Bulacan 3016, Philippines</p>
                                </div>
                                <div className="footer__top__info__content__item">
                                    <span>Business Phone</span>
                                    <p>
                                        (+63) 917-507-3906 / (044) 797-8380
                                    </p>
                                </div>
                                <div className="footer__top__info__content__item">
                                    <span>Support E-mail</span>
                                    <p>
                                        info@foxcode.tech
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg="4" sm="12">
                            <div className="footer__top__info__title">
                                <h4>Services</h4>
                            </div>
                            <div className="footer__top__info__content">
                                <div className="footer__top__info__content__item media">
                                    <div className="footer__top__info__content__item media__image">
                                        <Image src="/images/web-development.svg" alt="Web Development" title="Web Development" width="100%" />
                                    </div>
                                    <div className="footer__top__info__content__item media__title">
                                        <h5><a href="#services" title="services">Web Development</a></h5>
                                        <p>Drive more customers to your business and let the world know about it.</p>
                                    </div>
                                </div>
                                <div className="footer__top__info__content__item media">
                                    <div className="footer__top__info__content__item media__image">
                                        <Image src="/images/logo-design.svg" alt="Logo Design" title="Logo Design" width="100%" />
                                    </div>
                                    <div className="footer__top__info__content__item media__title">
                                        <h5><a href="#services" title="services">Logo &amp; Creatives Design</a></h5>
                                        <p>Showcase your brand with the help of our creative designers.</p>
                                    </div>
                                </div>
                                <div className="footer__top__info__content__item media">
                                    <div className="footer__top__info__content__item media__image">
                                        <Image src="/images/marketing.svg" alt="Digital Marketing" title="Digital Marketing" width="100%" />
                                    </div>
                                    <div className="footer__top__info__content__item media__title">
                                        <h5><a href="#services" title="services">Digital Marketing</a></h5>
                                        <p>Advertise your services and products with our professional digital marketers.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg="2" sm="12">
                            <div className="footer__top__info__title">
                                <h4>Quick Links</h4>
                            </div>
                            <div className="footer__top__info__content">
                                <div className="footer__top__info__content__item media">
                                    <div className="footer__top__info__content__item media__title">
                                        <h5><a href="#services" title="services">&#9658;&nbsp; Services</a></h5>
                                    </div>
                                </div>
                                <div className="footer__top__info__content__item media">
                                    <div className="footer__top__info__content__item media__title">
                                        <h5><a href="#about-us"title="about">&#9658;&nbsp; About Us</a></h5>
                                    </div>
                                </div>
                                <div className="footer__top__info__content__item media">
                                    <div className="footer__top__info__content__item media__title">
                                        <h5><a href="#steps"title="steps">&#9658;&nbsp; Steps</a></h5>
                                    </div>
                                </div>
                                <div className="footer__top__info__content__item media">
                                    <div className="footer__top__info__content__item media__title">
                                        <h5><a href="/faq" title="faq">&#9658;&nbsp; FAQ</a></h5>
                                    </div>
                                </div>
                                <div className="footer__top__info__content__item media">
                                    <div className="footer__top__info__content__item media__title">
                                        <h5><a href="/contact" title="contact">&#9658;&nbsp; Contact Us</a></h5>
                                    </div>
                                </div>
                                <div className="footer__top__info__content__item media">
                                    <div className="footer__top__info__content__item media__title">
                                        <h5><a href="/privacy" title="privacy">&#9658;&nbsp; Privacy Policy</a></h5>
                                    </div>
                                </div>
                                <div className="footer__top__info__content__item media">
                                    <div className="footer__top__info__content__item media__title">
                                        <h5><a href="/terms" title="terms">&#9658;&nbsp; Terms &amp; Conditions</a></h5>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg="3" sm="12">
                            <div className="footer__top__info__title">
                                <h4>Follow us</h4>
                            </div>
                            <div className="footer__top__info__content">
                                <a href="https://www.facebook.com/foxcode.tech" title="facebook" target="__blank" className="footer__top__info__content__social">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm16 7h-1.923c-.616 0-1.077.252-1.077.889v1.111h3l-.239 3h-2.761v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"/></svg>
                                </a>
                                <a href="https://www.linkedin.com/company/foxcode-tech" title="linkedin" target="__blank" className="footer__top__info__content__social">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="footer__bottom">
                <Container>
                    <Row>
                        <Col lg="12" sm="12">
                            <span className="footer__bottom__copyright">
                                Fox Code Tech Solutions &#9400; Copyright {new Date().getFullYear()}. All rights reserved.
                            </span>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
};

export default withRouter(Footer);
