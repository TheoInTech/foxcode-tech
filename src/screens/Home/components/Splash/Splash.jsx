import React, { Component, Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import FCToast from '../../../../components/FCToast';
import FCButton from '../../../../components/FCButton';
import emailjs from 'emailjs-com';
import { faThumbsUp, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import './Splash.scss';

class Splash extends Component {
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
        
        emailjs.send('smtp_server', 'template-home-page', { 
            contact: form.elements.contact.value,
            date: new Date(),
            page: 'Splash'
        }, 'user_5bruZPr5cuoqyBYpIWpAY')
            .then(response => {
                this.setState({ showToast: true, success: true })
                form.elements.contact.value = '';
            }, error => {
                this.setState({ showToast: true, success: false })
            }
        );
    }

    render() {
        const { showToast, success } = this.state;
        return (
            <Fragment>
                {
                    success === true ?
                        <FCToast icon={faThumbsUp} title="Thank you!" message="If you don't hear from us in the next 24 hours, please send us a message at info@foxcode.tech" show={showToast} />
                        : <FCToast icon={faExclamationTriangle} title="Sorry!" message="Something went wrong. Please try again." show={showToast} />
                }
                <section className="splash">
                    <Container fluid>
                        <Row className="align-items-center">
                            <Col lg="6" xs="12" className="splash__statement">
                                <h1 className="splash__statement__title">Trust us.<br/>You <span className="text-emphasis">definitely</span><br/> need a website.</h1>
                                <p className="subtitle">Revenue-driven one's. Not just some Facebook page. *ugh*</p>
                                <Form className="splash__statement__form" onSubmit={this.getAppointment}>
                                    <Form.Row>
                                        <Col lg="7" sm="12">
                                            <Form.Control type="text" name="contact" placeholder="Email address / Phone number" className="splash__statement__form__input" />
                                        </Col>
                                        <Col lg="5" sm="12">
                                            <FCButton type="submit" className="splash__statement__form__button">Get appointment</FCButton>
                                        </Col>
                                    </Form.Row>
                                </Form>
                            </Col>
                            <Col lg="6" xs="12" className="splash__image">
                                <Image src="/images/splash.svg" width="100%" />
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Fragment>
        );
    };
};

export default Splash;
