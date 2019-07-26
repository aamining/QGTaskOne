
import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {DropdownButton,Dropdown } from 'react-bootstrap'

import QA from './components/QA';

import './App.css';


import data from './data/data.json';


class App extends Component {

  constructor(props) {
    super(props);
      this.state = {
        qas: []      
      }  
  }

  componentDidMount () {
    this.setState({qas: data});
  }
  
  render() {
    
    return (
      


      <div className="App">
      <div className="flx">
    <DropdownButton id="faqs" title="Frequently Asked Questions (FAQs)" >
    <Dropdown.Item eventKey="1">General Questions</Dropdown.Item>
    <Dropdown.Item eventKey="2">Fees</Dropdown.Item>
    <Dropdown.Item eventKey="3">Questionnaire to determine risk tolerance score</Dropdown.Item>
    <Dropdown.Item eventKey="2">Your Investment Plan</Dropdown.Item>
    <Dropdown.Item eventKey="2">Your account</Dropdown.Item>
    <Dropdown.Item eventKey="2">Creating an account</Dropdown.Item>
    <Dropdown.Item eventKey="2">Creating an account — SMSF and Trust account types</Dropdown.Item>
    <Dropdown.Item eventKey="2">Creating an account — Residents of other countries</Dropdown.Item>
    <Dropdown.Item eventKey="2">Adding funds</Dropdown.Item>
    <Dropdown.Item eventKey="2">Multiple portfolios</Dropdown.Item>
    <Dropdown.Item eventKey="2">Taxes</Dropdown.Item>

    </DropdownButton>
    
    </div>
      
        <Router>
          <div>
              {
                <Route path = "/" render={() => this.state.qas.map((qa) => (<QA key={qa.id} qa={qa}/>))}/> 
              }

          </div>
        </Router>
      </div>
    );
  }
}

export default App;

