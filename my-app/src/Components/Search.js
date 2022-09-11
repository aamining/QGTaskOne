import React, { Component } from 'react';

import { Container, Row, Col } from 'react-bootstrap';


export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {


        }
        this.handleSearch = this.handleSearch.bind(this);

    }

    handleSearch(event) {
        const search = event.target.value.substr(0, 20)
        let visibility = event.target.valueOne
        // this.setState({search: event.target.value})
        search.length === 0 ? visibility = "true" : visibility = "false"
        // console.log("From SEARCH search length is=",search.length)
        // console.log("From SEARCH viibility is=",visibility)

        this.props.searchCallback(search, visibility)

    }

    render() {

        return (
          <div>
            <Container>

              <Row>
                <Col xs="1" lg="2" />
                <Col xs="10" lg="8">

                  <input id="search" value={this.props.search} valueOne={this.props.visibility} onChange={this.handleSearch} style={{ borderColor: 'Blue', width: '600px', borderStyle: 'solid', borderRadius: '25px', marginTop: '10px', marginBottom: '10px' }} placeholder="Search in FAQs" />
                </Col>
                <Col xs="1" lg="2" />
              </Row>

            </Container>
          </div>
        )

    }

}


