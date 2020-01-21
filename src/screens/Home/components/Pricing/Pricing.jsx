import React, { Component, Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import FCButton from '../../../../components/FCButton';
import FCToast from '../../../../components/FCToast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faThumbsUp, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import emailjs from 'emailjs-com';
import './Pricing.scss';

class Pricing extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.addons = [
            {
                id: 1,
                label: 'Logo Design',
                price: 250
            },
            {
                id: 2,
                label: 'Messenger Chat Feature',
                price: 200
            },
            {
                id: 3,
                label: 'Gallery Page',
                price: 450
            },
            {
                id: 4,
                label: 'Contact Form',
                price: 450
            },
            {
                id: 5,
                label: 'Social Media Integration',
                price: 200
            },
            {
                id: 6,
                label: 'Google Maps Integration',
                price: 650
            },
            {
                id: 7,
                label: 'Domain Name',
                price: 300
            },
            {
                id: 8,
                label: 'Online Traffic & Marketing',
                price: 2500
            },
            {
                id: 9,
                label: 'Custom Email Address',
                price: 250
            },
            {
                id: 10,
                label: 'Website Updates & Changes',
                price: 250
            },
            {
                id: 11,
                label: 'eCommerce Functionality',
                price: 1500
            },
            {
                id: 12,
                label: 'Admin Panel',
                price: 1500
            },
            {
                id: 13,
                label: 'Monthly Analytics and Reports',
                price: 800
            }
        ];

        this.state = {
            price: 1500,
            perDay: 50,
            addons: [],
            showToast: false,
            success: false
        };

        this.getAppointment = this.getAppointment.bind(this);
    }

    onToggle(toggle, addedPrice, label) {
        const { price, addons } = this.state;
        let newPrice = toggle === true ? (price + addedPrice) : (price - addedPrice);
        
        if (toggle === true) {
            addons.push(label);
            newPrice = price + addedPrice;
        } else {
            addons.splice(addons.indexOf(label), 1);
            newPrice = price - addedPrice;
        }

        this.setState({
            price: newPrice,
            perDay: Math.ceil(newPrice / 30),
            addons
        });
    }

    getAppointment(event) {
        event.preventDefault();
        const form = event.target;
        const { price, perDay, addons } = this.state;
        
        emailjs.send('smtp_server', 'template-home-page', { 
            contact: form.elements.contact.value,
            date: new Date(),
            page: 'Pricing',
            monthly: `PHP ${price}`,
            daily: `PHP ${perDay}`,
            addons
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
        const { perDay, showToast, success } = this.state;

        return (
            <Fragment>
                {
                    success === true ?
                        <FCToast icon={faThumbsUp} title="Thank you!" message="If you don't hear from us in the next 24 hours, please send us a message at info@foxcode.tech" show={showToast} />
                        : <FCToast icon={faExclamationTriangle} title="Sorry!" message="Something went wrong. Please try again." show={showToast} />
                }
                <section className="pricing" id="pricing">
                    <Container fluid>
                        <Row>
                            <Col xs="12" className="pricing__statement">
                                <h3 className="section-title">Pricing</h3>
                                <h2 className="title">
                                    Use what you just need. Zero complexity.
                                </h2>
                                <p className="subtitle">
                                    You don't have to pay for stuff you won't use.<br/>Your website, your rules!
                                </p>
                            </Col>
                        </Row>
                        <Row className="pricing__content">
                            <Col lg="8" xs="12" className="pricing__content__title">
                                Toggle the features and services you need
                            </Col>
                            <Col lg="8" xs="12" className="pricing__addons">
                                <Form>
                                    <Form.Row>
                                        {
                                            this.addons.map(addon => {
                                                return <Col lg="6" xs="6" className="pricing__addons__switch" key={`addon-${addon.id}`}>
                                                            <Form.Check 
                                                                type="switch"
                                                                id={`switch-${addon.id}`}
                                                                label={addon.label}
                                                                name={addon.label}
                                                                onClick={event => this.onToggle(event.target.checked, addon.price, event.target.name)}
                                                            />
                                                        </Col>
                                            })
                                        }
                                    </Form.Row>
                                </Form>
                            </Col>
                            <Col lg="4" xs="12" className="pricing__summary">
                                <Card className="pricing__summary__card">
                                    <Card.Body className="pricing__summary__card__body">
                                        <h3 className="pricing__summary__card__body__title">
                                            Get your website for as low as
                                        </h3>
                                        <h3 className="pricing__summary__card__body__cost">
                                            &#8369;{perDay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                            <span className="pricing__summary__card__body__description"> / day</span>
                                        </h3>
                                        <p className="pricing__summary__card__body__disclaimer">
                                            * subject to a 12-month contract<br/>
                                            * can be paid monthly, every 3 / 6 months or full payment
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg="12" xs="12" className="pricing__inclusions">
                                <Card className="pricing__inclusions__card">
                                    <Card.Body className="pricing__inclusions__card__body">
                                        <Row>
                                            <Col lg="6" xs="12" className="pricing__inclusions__card__body__includes">
                                                <h3 className="pricing__inclusions__card__body__title">What's included in the starting package?</h3>
                                                <ul className="list-unstyled list-check pricing__inclusions__card__body__list">
                                                    <li>
                                                        <FontAwesomeIcon icon={faCheck} /><span>Website hosting and security</span>
                                                    </li>
                                                    <li>
                                                        <FontAwesomeIcon icon={faCheck} />
                                                        <span>Maintenance and support</span>
                                                    </li>
                                                    <li>
                                                        <FontAwesomeIcon icon={faCheck} /><span>5 static website pages</span>
                                                    </li>
                                                    <li>
                                                        <FontAwesomeIcon icon={faCheck} /><span>Search engine optimization</span>
                                                    </li>
                                                    <li>
                                                        <FontAwesomeIcon icon={faCheck} /><span>Branding upload</span>
                                                    </li>
                                                    <li>
                                                        <FontAwesomeIcon icon={faCheck} /><span>Thousands of design options</span>
                                                    </li>
                                                    <li>
                                                        <FontAwesomeIcon icon={faCheck} /><span>Mobile responsiveness</span>
                                                    </li>
                                                </ul>
                                            </Col>
                                            <Col lg="6" xs="12" className="pricing__inclusions__card__body__business">
                                                <h3 className="pricing__inclusions__card__body__title">Business approach -</h3>
                                                <p className="pricing__inclusions__card__body__description">
                                                    Our experts follow the business strategy to grow up your business and engage more customers to your door.
                                                </p>
                                                <ul className="list-unstyled list-check pricing__inclusions__card__body__list">
                                                    <li>
                                                        <FontAwesomeIcon icon={faCheck} />
                                                        <span>Expertise in digital marketing</span>
                                                    </li>
                                                    <li>
                                                        <FontAwesomeIcon icon={faCheck} />
                                                        <span>Detailed research of the business environment</span>
                                                    </li>
                                                    <li>
                                                        <FontAwesomeIcon icon={faCheck} />
                                                        <span>Opportunity research and growth</span>
                                                    </li>
                                                </ul>
                                                <Form className="splash__statement__form" onSubmit={this.getAppointment} data-netlify="true">
                                                    <Form.Row>
                                                        <Col lg="7" sm="12">
                                                            <Form.Control type="text" name="contact" placeholder="Email address / Phone number" className="splash__statement__form__input" required />
                                                        </Col>
                                                        <Col lg="5" sm="12">
                                                            <FCButton type="submit" className="splash__statement__form__button">Get appointment</FCButton>
                                                        </Col>
                                                    </Form.Row>
                                                </Form>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Fragment>
        );
    }
};

export default Pricing;
