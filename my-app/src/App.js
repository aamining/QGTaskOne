
import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
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

