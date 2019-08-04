import React, {Component} from 'react';
//import {pageOne} from '../Components/pageOne';
import { Container, Row, Col } from 'react-bootstrap';


export default class QA extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            newUrl:""
        }
        this.changeUrl = this.changeUrl.bind(this);
    }
    
    changeUrl(e){
        e.preventDefault();
        this.setState({newUrl:this.props.qa.url})
             
    }

        render(){         
            console.log("newUrl=", this.state.newUrl)
            return (
                
            
            <Container>
                <Row>
                    <Col xs lg="1"></Col>
                        <Col > 
                            <ul>
                                  
                             <button  style={{border:'none'}} onClick={this.changeUrl}>{this.props.qa.questionkey}</button>
                                
                            </ul>
                        </Col>
                    <Col xs lg="1"></Col>
                </Row>  
            </Container> 
            
        ) 
    }
}


