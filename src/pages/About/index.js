// import React, { useEffect, useState } from 'react'
// import { useAppContext } from '../../utils/AppContext'
import { Col, Container, Image, Row } from 'react-bootstrap';
import "./style.css"
import PageTitle from '../../components/PageTitle'

import ProfilePic from '../../Assets/ProfilePic.jpg'

const AboutPage = () => {
  return (
    <Container>
      <PageTitle title="About Me" subtitle=""></PageTitle>
      <Row>
        <Col sm={7} md={5} lg={4} >
          <Row>
            <Image height={200} src={ProfilePic} alt="Grant Cawley" thumbnail />
          </Row>
          {/* <Row>
                            <ButtonGroup>
                                <Button size="sm" href="https://www.linkedin.com/in/grant-cawley-89249415b" variant="danger">Linkedin</Button>
                                <Button size="sm" href="https://github.com/cawleygl" variant="danger">GitHub</Button>
                                <Button size="sm" href="mailto:grantlcawley@gmail.com" variant="danger">Email</Button>
                                <Button size="sm" href={Resume} download variant="danger">Resume</Button>
                            </ButtonGroup>
                        </Row> */}
        </Col>
        <Col className="about">
          <p>My name is Grant Cawley, and I am a Full-Stack Software Developer currently located in Charlotte, North Carolina, with a certificate in Full-Stack Web Development from Washington University Coding Boot Camp. I am currently employed by Capgemini in Charlotte as a Software Engineer in their Next-Generation Talent program. I previously worked for Hopdrive in Richmond Virginia as a Junior Frontend Developer: a web development role utilizing React, Javascript, GraphQL, MUI, Node.js, REST APIs, and other technologies. I graduated from Saint Louis University in the Spring of 2018 with a Bachelor of Science degree in Psychology and Spanish Language and Literature. I have completed a number of coding projects through the Washington University Coding Boot Camp program, included in this portfolio.</p>
        </Col>
      </Row>
    </Container>
  )
}

export default AboutPage
