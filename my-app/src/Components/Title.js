import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

 export default class Title extends Component {
    
    constructor(props) {
        super(props);
        this.state={
             
        }
        
    }

    
     render(){    
            
       return (
        <Container >
                    
        <Row>
            <Col xs lg="3"></Col>
                <Col xs lg="6">
                <label style={{color:'red', font:'bold 25px/30px Georgia, serif', paddingTop:'20px'}}>
                    Frequently Asked Questions (FAQs)
                </label>
                </Col>
            <Col xs lg="3"></Col>
        </Row>
                
        
        
    </Container>
        

            
        )
   }
 }