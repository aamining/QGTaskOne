import React, {Component} from 'react';

import { Container, Row, Col } from 'react-bootstrap';


export default class QA extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            
            
        }
        this.callback = this.callback.bind(this);
    }
    
    callback(event){
        
        event.preventDefault();
        const url = this.props.qa.url
        this.props.qaCallback(url)
        
    }
    

    render(){         
        
        return (
            
                <Container >
                    <Row>
                        <Col xs lg="1"></Col>
                            <Col > 
                                <ul>
                                   <li> 
                                <a href={this.props.qa.url} style={{border:'none'}} onClick={this.callback} >{this.props.qa.questionkey}</a>
                                    </li>
                                </ul>
                            </Col>
                        <Col xs lg="1"></Col>
                    </Row>  
                </Container>
            
        )
           
    } 
  
}


