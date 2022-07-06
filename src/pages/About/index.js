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
        <Col sm={4}>
          <Row>
            <Image height={200} src={ProfilePic} alt="Grant Cawley" thumbnail />
          </Row>
        </Col>
        <Col className="about">
          <h4 className="question">So who is Grant Cawley?</h4>
          <p> - My name is Grant Cawley, and I am a Full-Stack Software Developer currently located in Charlotte, North Carolina! I received a certificate in Full-Stack Web Development from Washington University Coding Boot Camp, and I am currently employed by Capgemini in Charlotte as a Software Engineer in their Next-Generation Talent program.</p>
          <h4 className="question">Hi Grant, What kind of education have you received?</h4>
          <p> - I graduated from Saint Louis University in the Spring of 2018 with a Bachelors of Science degree in Psychology and Spanish Language and Literature. After that, I took the aforementioned bootcamp in Full-Stack Web Development and learned technologies including HTML5, CSS3, Javascript, JQuery, Bootstrap, Node.js, Express.js MySQL, MongoDB, & React.</p>
          <h4 className="question">Good to know! What's your employment history?</h4>
          <p> - Before going into tech, I worked in a Market Operations position for Varsity Tutors in St. Louis, Missouri. Once I received my bootcamp certificate I worked for HopDrive in Richmond Virginia as a full-time Junior Frontend Developer. This role utilized technologies I had learned in the course like React, Javascript, Node.js, and REST APIs, as well as technologies new to me like GraphQL and Material UI. I'm now working for Capgemini and learning Java 8 and Spring.</p>
          <h4 className="question">Wow, that's great! What are you looking for in a future position?</h4>
          <p> - I am excited to continue in tech! I'm hoping to use some of the skills I've gained in these positions and opportunities, and learn new technologies and software development practices. I've really enjoyed optimizing user experience in the applications I've worked on, so I hope to have the freedom and ability to do that in my next position, whether I'm working on internal or client-facing tools.</p>
          <h4 className="question">One more question, what's in your portfolio here?</h4>
          <p> - This portfolio is mostly assignments I completed through the Washington University Coding Boot Camp program, and also includes pet projects I have started since. I hope you like them!</p>
        </Col>
      </Row>
    </Container>
  )
}

export default AboutPage
