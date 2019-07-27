import React from 'react';
import './QA.css';
import { Container, Row, Col} from 'react-bootstrap'

const QA = (prop) => (

<div>

        <Container>
       
            <Row>
            <Col xs lg="2"></Col>
            <Col> <a href={prop.qa.url}>  {prop.qa.questionkey} </a></Col>
            <Col xs lg="2"></Col>
            </Row>
          </Container>
    </div>
    

);
export default QA;