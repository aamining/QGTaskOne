import React from 'react';
import './QA.css';
import { Container, Row, Col} from 'react-bootstrap'

const QA = (prop) => (

<div>

        <Container>
            <Row>
              <Col>{prop.qa.questionkey}</Col>
              <Col>{prop.qa.section}</Col>
            </Row>
          </Container>
    </div>
    // <div>
    // {document.getElementById('left').innerHTML = prop.qa.answer}
    
    // {document.getElementById('right').innerHTML = prop.qa.section}
    // </div>

);
export default QA;