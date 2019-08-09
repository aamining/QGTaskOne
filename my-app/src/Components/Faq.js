import React, {Component} from 'react';
import { Container,Jumbotron,Button } from 'react-bootstrap';




 export default class Faq extends Component {
    
        
     render(){    
            
       return (
         
        <Jumbotron fluid>
            <Container>
            <h1>{this.props.faq.question}</h1>
            <p> {this.props.faq.answer} </p>
            <Button href="/"> Back to FAQ(s) page </Button>
            </Container>
            
         </Jumbotron>

            
        )
   }
 }
