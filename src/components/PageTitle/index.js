import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap';

import "./style.css"

const pageTitle = ({title, subtitle}) => {
    return (
        <Jumbotron className="jumbotron">
            <Container>
                <h1 className="title">{title}</h1>
                <p className="subtitle">{subtitle}</p>
            </Container>
        </Jumbotron>
    );
}

export default pageTitle
