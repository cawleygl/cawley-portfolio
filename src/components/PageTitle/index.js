import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap';

import "./style.css"

const pageTitle = (props) => {
    return (
        <Jumbotron className="jumbotron">
            <Container>
                <h1 className="title">{props.title}</h1>
                <p className="subtitle">{props.subtitle}</p>
            </Container>
        </Jumbotron>

    );
}

export default pageTitle
