import React from 'react'
import { Card, Button, ButtonGroup } from 'react-bootstrap';

import "./style.css"

const card = ({ asset, title, desc, tech, appLink, repoLink }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={asset} />
      <Card.Body>
        <Card.Title as="div">{title}</Card.Title>
        <Card.Subtitle as="div">{tech}</Card.Subtitle>
        <Card.Text>{desc}</Card.Text>
        <ButtonGroup>
          <Button size="sm" href={appLink} variant="danger">Application</Button>
          <Button size="sm" href={repoLink} variant="danger">Repository</Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
}

export default card
