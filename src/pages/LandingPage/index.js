// import React, { useEffect, useState } from 'react'
// import { useAppContext } from '../../utils/AppContext'
import { Col, Container, Image, Row } from 'react-bootstrap';
import "./style.css"
import PageTitle from '../../components/PageTitle'

import ProfilePic from '../../Assets/ProfilePic.jpg'

const LandingPage = () => {
  return (
    <Container>
      <PageTitle title="Landing Page" subtitle="Welcome to Grant Cawley's Project Portfolio!"></PageTitle>
    </Container>
  )
}

export default LandingPage
