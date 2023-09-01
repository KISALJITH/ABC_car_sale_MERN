import React, { useState } from 'react';
import Helmet from '../../components/Helmet/Helmet';
import { Container, Accordion, AccordionItem, AccordionHeader, AccordionBody, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommonSection from '../../components/UI/CommonSection';

const Messages = () => {
    const [open, setOpen] = useState('1');

    const toggle = (id) => {
        if (open === id) {
            setOpen('');
        } else {
            setOpen(id);
        }
    };

    return (
        <Helmet title='Admin'>
            <CommonSection title='Messages' />
            <section>
                <Container>
                    <div>
                        <Accordion open={open} toggle={toggle}>
                            <AccordionItem>
                                <AccordionHeader targetId="1">L.J.S.Liyanaarachchi</AccordionHeader>
                                <AccordionBody accordionId="1">
                                    I want to sell my car. It's a Audi A1. It is in good condition.
                                    <Row>
                                      <Col>
                                        <Link>liyanaarachchi@gmail.com</Link>
                                      </Col>
                                      <Col>
                                        <button className='owner_btn'><i class="ri-reply-line"></i>  Reply </button>
                                      </Col>
                                    </Row>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionHeader targetId="2">K.L.Kithsiribandara</AccordionHeader>
                                <AccordionBody accordionId="2">
                                    I want to sell my car. It's a Audi A1. It is in good condition.
                                    <Row>
                                      <Col>
                                        <Link>kithsiri@gmail.com</Link>
                                      </Col>
                                      <Col>
                                        <button className='owner_btn'><i class="ri-reply-line"></i>  Reply </button>
                                      </Col>
                                    </Row>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionHeader targetId="3">J.M.C.Jayalal</AccordionHeader>
                                <AccordionBody accordionId="3">
                                    I want to sell my car. It's a Audi A1. It is in good condition.
                                    <Row>
                                      <Col>
                                        <Link>jayalal@gmail.com</Link>
                                      </Col>
                                      <Col>
                                        <button className='owner_btn'><i class="ri-reply-line"></i>  Reply </button>
                                      </Col>
                                    </Row>
                                </AccordionBody>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </Container>
            </section>
        </Helmet>
    );
};

export default Messages;
