// import React, { useEffect, useState } from 'react'
// import { useAppContext } from '../../utils/AppContext'
import "./style.css"
import PageTitle from '../../components/PageTitle'
import { Button, ButtonGroup, Container, Form, Row, } from "react-bootstrap"

import Resume from '../../Assets/Grant Cawley - Resume.pdf'

const ContactPage = () => {
    return (
        <Container>
            <PageTitle title="Contact" subtitle="Get in touch with me through the links below!"></PageTitle>
            {/* <Row className="form">
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control as="textarea" rows={1} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.Message">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                </Button>
                </Form>
            </Row> */}
            <Row>
                <ButtonGroup vertical>
                    <Button size="lg" href="https://www.linkedin.com/in/grant-cawley-89249415b" variant="primary">Linkedin</Button>
                    <Button size="lg" href="https://github.com/cawleygl" variant="danger">GitHub</Button>
                    <Button size="lg" href="mailto:grantlcawley@gmail.com" variant="warning">Email</Button>
                    <Button size="lg" href={Resume} download variant="success">Resume</Button>
                </ButtonGroup>

            </Row>
        </Container>
    )
}

export default ContactPage
