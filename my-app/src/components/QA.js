import React from 'react';
import './QA.css';
import { Container, Row, Col } from 'react-bootstrap'

const QA = (prop) => (
   
<div className="flx">
        <Container>
            <Row>
              <Col>{prop.qa.answer}</Col>
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