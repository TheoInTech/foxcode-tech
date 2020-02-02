import React, { Component, Fragment } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import FCButton from "../../../../components/FCButton";
import FCToast from "../../../../components/FCToast";
import emailjs from "emailjs-com";
import {
  faThumbsUp,
  faExclamationTriangle
} from "@fortawesome/free-solid-svg-icons";

import "./Services.scss";

class Services extends Component {
  constructor(props) {
    super(props);

    this.services = [
      {
        img: "/images/web-development.svg",
        title: "Website Development",
        description:
          "Drive more customers to your business and let the world know about how great your products and services are."
      },
      {
        img: "/images/logo-design.svg",
        title: "Logo & Creatives Design",
        description:
          "Showcase your brand and never worry about producing outdated design trends."
      },
      {
        img: "/images/marketing.svg",
        title: "Digital Marketing",
        description:
          "Advertise your services and products with our professional digital marketers."
      },
      {
        img: "/images/technical-consultation.svg",
        title: "Consultation",
        description:
          "Practical analysis of technical and/or marketing techniques that will optimize value, productivity and efficiency."
      },
      {
        img: "/images/seo.svg",
        title: "SEO & API Integration",
        description:
          "Be on top of search engine results and integrate those to analytical data reporting."
      }
    ];

    this.state = {
      showToast: false,
      success: false
    };

    this.getAppointment = this.getAppointment.bind(this);
  }

  getAppointment(event) {
    event.preventDefault();
    const form = event.target;

    emailjs
      .send(
        "smtp_server",
        "template-home-page",
        {
          contact: form.elements.serviceContact.value,
          date: new Date(),
          page: "Splash"
        },
        "user_5bruZPr5cuoqyBYpIWpAY"
      )
      .then(
        response => {
          this.setState({ showToast: true, success: true });
          form.elements.serviceContact.value = "";
        },
        error => {
          this.setState({ showToast: true, success: false });
        }
      );
  }

  render() {
    const { showToast, success } = this.state;
    return (
      <Fragment>
        {success === true ? (
          <FCToast
            icon={faThumbsUp}
            title="Thank you!"
            message="If you don't hear from us in the next 24 hours, please send us a message at info@foxcode.tech"
            show={showToast}
          />
        ) : (
          <FCToast
            icon={faExclamationTriangle}
            title="Sorry!"
            message="Something went wrong. Please try again."
            show={showToast}
          />
        )}
        <section className="services" id="services">
          <Container fluid>
            <Row className="justify-content-center">
              {this.services.map((service, i) => {
                return (
                  <Col lg={4} sm={12} key={`service-${i}`}>
                    <Card className="services__card" onClick>
                      <Card.Body className="services__card__body">
                        <div className="services__card__body__image">
                          <Image
                            src={service.img}
                            alt={service.title}
                            title={service.title}
                            width="220"
                          />
                        </div>
                        <h3 className="services__card__body__title">
                          {service.title}
                        </h3>
                        <p className="services__card__body__description">
                          {service.description}
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
            <Row className="justify-content-center services__statement">
              <Col lg="6" xs="12">
                <Form
                  onSubmit={this.getAppointment}
                  data-netlify="true"
                  name="formServices"
                  id="formServices"
                  method="POST"
                  enctype="application/x-www-form-urlencoded"
                  netlify-recaptcha
                >
                  <Form.Row>
                    <Col lg="8" sm="12">
                      <Form.Control
                        type="text"
                        name="serviceContact"
                        placeholder="Email address / Phone number"
                        className="services__statement__form__input"
                        required
                      />
                    </Col>
                    <Col lg="4" sm="12">
                      <FCButton
                        type="submit"
                        name="serviceButton"
                        className="services__statement__button"
                      >
                        Get Quote
                      </FCButton>
                    </Col>
                  </Form.Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </section>
      </Fragment>
    );
  }
}

export default Services;
