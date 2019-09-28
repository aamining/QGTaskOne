import React, { Component } from 'react';
import { Container, Jumbotron, Button } from 'react-bootstrap';




export default class Faq extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.callback = this.callback.bind(this);
    }

    callback(newUrl) {


        this.props.faqCallback(newUrl)

    }

    render() {

        return (

          <Jumbotron fluid>
            <Container>
              <h1>{this.props.faq.question}</h1>
              <p> 
                {' '}
                {this.props.faq.answer}
                {' '}
              </p>
              <Button onClick={this.callback}> Back to FAQ(s) page </Button>
            </Container>
          </Jumbotron>


        )
    }
}
