import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class Area extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
        this.callback = this.callback.bind(this);
    }

    callback(e) {

        const {value} = e.target
        this.props.areaCallback(value)

    }

    render() {

        return (
          <Container>



            <Row>
              <Col xs lg="3" />
              <Col xs lg="6">
                <select style={{ color: 'red', font: 'bold 14px/30px Georgia' }} value={this.props.value} onChange={this.callback}>
                  <option value="General questions">General Questions</option>
                  <option value="Fees">Fees</option>
                  <option value="Questionnaire to determine risk tolerance score">Questionnaire to determine risk tolerance score</option>
                  <option value="Your Investment Plan">Your Investment Plan</option>
                  <option value="Your account">Your account</option>
                  <option value="Creating an account">Creating an account</option>
                  <option value="Creating an account — SMSF and Trust account types">Creating an account — SMSF and Trust account types</option>
                  <option value="Creating an account — Residents of other countries">Creating an account — Residents of other countries</option>
                </select>

              </Col>
              <Col xs lg="3" />
            </Row>

          </Container>



        )
    }
}