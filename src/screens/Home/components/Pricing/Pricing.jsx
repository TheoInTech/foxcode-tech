import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
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
                label: 'Marketing Subscription',
                price: 2500
            },
            {
                id: 9,
                label: 'Custom Email Address',
                price: 250
            },
            {
                id: 10,
                label: 'Website Updates',
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
            }
        ];

        this.state = {
            price: 1500,
            perDay: 50
        }
    }

    onToggle(toggle, addedPrice) {
        const { price } = this.state;
        const newPrice = toggle === true ? (price + addedPrice) : (price - addedPrice);
        this.setState({
            price: newPrice,
            perDay: Math.ceil(newPrice / 30)
        });
    }

    render() {
        const { price, perDay } = this.state;

        return (
            <section className="pricing">
                <Container fluid>
                    <Row>
                        <Col xs="12" className="pricing__statement">
                            <h3 className="section-title">Pricing</h3>
                            <h2 className="title">
                                Use what you just need. Zero complexity.
                            </h2>
                            <p className="subtitle">
                                You don't have to pay for stuff you won't use. Your website, your rules!<br/>
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
                                            return <Col lg="6" xs="6" className="pricing__addons__switch">
                                                        <Form.Check 
                                                            type="switch"
                                                            id={`switch-${addon.id}`}
                                                            label={addon.label}
                                                            onClick={event => this.onToggle(event.target.checked, addon.price)}
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
                                    <h3 className="pricing__summary__card__body__title">Monthly Payment</h3>
                                    <h3 className="pricing__summary__card__body__cost">&#8369;{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
                                    <p className="pricing__summary__card__body__description">
                                        That's only <span className="text-emphasis">&#8369;{perDay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span> per day!
                                    </p>
                                    <p className="pricing__summary__card__body__disclaimer">
                                        * subject to a 12-month contract<br/>
                                        * can be paid per month, in 3/6/9 months or in full
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg="12" xs="12" className="pricing__inclusions">
                            <Card className="pricing__inclusions__card">
                                <Card.Body className="pricing__inclusions__card__body">
                                    <Row>
                                        <Col lg="6" xs="12">
                                            <h3 className="pricing__inclusions__card__body__title">What's included in the base package?</h3>
                                            <ul className="list-unstyled list-check pricing__inclusions__card__body__list">
                                                <li>
                                                    <FontAwesomeIcon icon={faCheck} /><span>Website hosting and security</span>
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faCheck} /><span>5 static website pages</span>
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
                                        <Col lg="6" xs="12">
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
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
};

export default Pricing;
