import React, { Component, Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Menubar from '../../components/Menubar';
import Footer from '../../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap, faPhoneVolume, faEnvelopeOpenText, faDoorOpen, faThumbsUp, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import FCButton from '../../components/FCButton';
import FCToast from '../../components/FCToast';
import emailjs from 'emailjs-com';
import './Contact.scss';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showToast: false,
            success: false
        };

        this.getAppointment = this.getAppointment.bind(this);
    }

    getAppointment(event) {
        event.preventDefault();
        const form = event.target;
        
        emailjs.send('smtp_server', 'template-contact-page', { 
            name: form.elements.name.value,
            email: form.elements.email.value,
            business: form.elements.business.value,
            contact: form.elements.contact.value,
            message: form.elements.message.value,
            date: new Date(),
            page: 'Contact'
        }, 'user_5bruZPr5cuoqyBYpIWpAY')
            .then(response => {
                this.setState({ showToast: true, success: true })
                form.elements.name.value = '';
                form.elements.email.value = '';
                form.elements.business.value = '';
                form.elements.contact.value = '';
                form.elements.message.value = '';
            }, error => {
                this.setState({ showToast: true, success: false })
            }
        );
    }

    render() {
        const { showToast, success } = this.state;
        return (
            <Fragment>
                <Menubar active="/contact" />
                {
                    success === true ?
                        <FCToast icon={faThumbsUp} title="Thank you!" message="If you don't hear from us in the next 24 hours, please send us a message at info@foxcode.tech" show={showToast} />
                        : <FCToast icon={faExclamationTriangle} title="Sorry!" message="Something went wrong. Please try again." show={showToast} />
                }
                <main className="main">
                    <section className="contact" id="contact">
                        <Container fluid>
                            <Row className="contact__header">
                                <Col lg="12" sm="12">
                                    <h2 className="title">
                                        Contact Us
                                    </h2>
                                    <ul className="breadcrumbs">
                                        <li>
                                            <a href="/">Home</a>
                                        </li>
                                        <li>
                                            Contact Us
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                            <Row className="contact__body">
                                <Col lg="4" sm="12" className="info">
                                    <div className="contact__body__title">
                                        <h3>
                                            Contact Info
                                        </h3>
                                        <p>Looking for awesome? See us now!</p>
                                    </div>
                                    <ul className="contact__body__info">
                                        <li>
                                            <div className="contact__body__info__icon">
                                                <FontAwesomeIcon icon={faMap} />
                                            </div>
                                            <div className="contact__body__info__title">
                                                <h4>Office Location</h4>
                                                <p>Drive more customers to your business and let the world know about it.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contact__body__info__icon">
                                                <FontAwesomeIcon icon={faPhoneVolume} />
                                            </div>
                                            <div className="contact__body__info__title">
                                                <h4>Business Phone</h4>
                                                <p>
                                                    (+63) 917-507-3906<br/>
                                                    (044) 797-8380
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contact__body__info__icon">
                                                <FontAwesomeIcon icon={faEnvelopeOpenText} />
                                            </div>
                                            <div className="contact__body__info__title">
                                                <h4>Business Email</h4>
                                                <p>
                                                    info@foxcode.tech<br/>
                                                    foxcode.tech@gmail.com
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contact__body__info__icon">
                                                <FontAwesomeIcon icon={faDoorOpen} />
                                            </div>
                                            <div className="contact__body__info__title">
                                                <h4>Office Hours</h4>
                                                <p>
                                                    Call or Email us 24/7
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </Col>
                                <Col lg="8" sm="12" className="message">
                                    <div className="contact__body__title">
                                        <h3>
                                            Send Us Message
                                        </h3>
                                        <p>So busy setting up your business? You can leave us a message instead.</p>
                                    </div>
                                    <div className="contact__body__form">
                                        <Form onSubmit={this.getAppointment}>
                                            <Form.Row>
                                                <Col lg="6" sm="12">
                                                    <Form.Control type="text" name="name" placeholder="Name" className="contact__body__form__input" required />
                                                </Col>
                                                <Col lg="6" sm="12">
                                                    <Form.Control type="email" name="email" placeholder="Email Address" className="contact__body__form__input" required />
                                                </Col>
                                                <Col lg="6" sm="12">
                                                    <Form.Control type="text" name="business" placeholder="Business / Company Name" className="contact__body__form__input" required />
                                                </Col>
                                                <Col lg="6" sm="12">
                                                    <Form.Control type="text" name="contact" placeholder="Contact Number" className="contact__body__form__input" required />
                                                </Col>
                                                <Col lg="12" sm="12">
                                                    <Form.Control as="textarea" name="message" placeholder="Message" className="contact__body__form__input textarea" rows="6" resizable={false} required />
                                                </Col>
                                                <Col lg="12" sm="12">
                                                    <FCButton type="submit" className="contact__body__form__button">Send message</FCButton>
                                                </Col>
                                            </Form.Row>
                                        </Form>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </main>
                <Footer />
            </Fragment>
        );
    };
};

export default Contact;
