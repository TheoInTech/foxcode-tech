import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Menubar from '../../components/Menubar';
import Footer from '../../components/Footer';
import Button from 'react-bootstrap/Button';
import './Faq.scss';

const Faq = () => {
    const qa = [
        {
            q: 'What makes Fox Code Tech Solutions different from other website development companies?',
            a: 'First of all, we DO work intelligently and straightforward to help you get started with your online presence. No flowery words and marketing strategies to get you on board. Also, our business model is subscribtion-based. You can just rent out your custom website with us and we\'ll handle the rest. No pressure and stress. Instead of buying your custom website, handle maintenance, stress about hosting, making it to the top search, marketing, analytics and everything!'
        },
        {
            q: 'How much does a new website cost?',
            a: 'There’s not one single answer to this question. A website design is quoted based on the needs of each individual project. Every website is unique and requires different components; we design and develop custom websites specifically for your small business. We’ll ask a lot of questions, assess your needs, and give you a quote based on that assessment. Our base price starts at only P1,500 per month and may go up to P10,000 with all the addon features to boost your business to the highest peak possible - Sky is the limit!'
        },
        {
            q: 'How long will it take to get a new website?',
            a: 'On average, we shoot for a seven (7) to fifteen (15) day turnaround, but the pace of any project is set by each client. How much input you can provide during the initial stages, your availability with feedback, how soon the content is ready – all this affects the speed of completion. The functionality needs may also play a role – more complex sites will take more time to develop.'
        },
        {
            q: 'Do I have to be around to work with you?',
            a: 'Nope! We work with clients all over the world. Our whole team works remotely, allowing us to find the absolute best team for our business.'
        },
        {
            q: 'Will I be able to update the site myself when it’s finished?',
            a: 'We don\'t want you to do the hassle things. Just subscribe to our website updates addon and we\'ll take it from there. We also have monthly maintenance if there are issues encoutered or bug fixes that needs to be solved. Terms and conditions apply.'
        },
        {
            q: 'Will my website be mobile-friendly?',
            a: 'Absolutely! Having a mobile-friendly website is more important than ever! We work hard to ensure your website looks great on a variety of devices.'
        },
        {
            q: 'When and how do I pay?',
            a: 'We are subscription-based. We offer a variety of payment options, varying from a one-time payment for a whole year, monthly basis, and every three (3) or six (6) months. We understand that this is a big investment and want to help you budget for the expense in whatever way possible. We accept cash, remittances, up-front payment, and bank transfers via BDO and BPI.'
        },
        {
            q: 'I\'m on a strict budget. Do you have any low cost options?',
            a: 'A custom website can be a big investment and not all small businesses have the budget for you. We offer a budget package which will help get you online with a nice looking website fast. Remember, our base package starts at only P50 per day!'
        },
        {
            q: 'What if I need help on my site down the road?',
            a: 'We are only an email away! We’re here to help you as much or as little as you need, and we won’t disappear once the site is launched. We’ve been doing this for 5 years, so we aren’t going anywhere anytime soon.'
        }
    ];
    return (
        <Fragment>
            <Menubar active="/faq" />
            <main className="main">
                <section className="faq" id="faq">
                    <Container fluid>
                        <Row>
                            <Col xs="12" className="faq__header">
                                <h2 className="title">
                                    Frequently Asked Questions
                                </h2>
                                <ul className="breadcrumbs">
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                    <li>
                                        FAQ
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12" className="faq__body">
                                <Accordion defaultActiveKey={0}>
                                    {
                                        qa.map((row, i) => {
                                            return (
                                                <Card key={`qa-${i}`} className="faq__body__card">
                                                    <Accordion.Toggle as={Button} variant="link" eventKey={i} className="faq__body__button">
                                                        <Card.Header>
                                                            {row.q}
                                                        </Card.Header>
                                                    </Accordion.Toggle>
                                                    <Accordion.Collapse eventKey={i}  className="faq__body__content">
                                                        <Card.Body>{row.a}</Card.Body>
                                                    </Accordion.Collapse>
                                                </Card>
                                            )
                                        })
                                    }
                                </Accordion>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
            <Footer />
        </Fragment>
    );
};

export default Faq;
