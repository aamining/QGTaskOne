import React, { Component } from 'react';
import './QA.css'
import { Container, Row, Col } from 'react-bootstrap';


export default class QA extends Component {

    constructor(props) {
        super(props);
        this.state = {


        }
        this.callback = this.callback.bind(this);
    }

    callback(event) {

        event.preventDefault();
        const {url} = this.props.qa
        this.props.qaCallback(url)

    }


    render() {

        return (

          <Container>

            <Row>
              <Col xs="1" lg="1" />
              <Col className="qa">
                <ul>
                  <a href={this.props.qa.url} style={{ border: 'none' }} onClick={this.callback}>{this.props.qa.questionkey}</a>
                </ul>
              </Col>
              <Col xs="1" lg="1" />
            </Row>
          </Container>

        )

    }

}


