import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import QA from './Components/QA';
import Faq from './Components/Faq';
import data from './data/data.json';



class App extends Component {

  constructor(props) {
    super(props);
      this.state = {
        qas: [], 
        value:'General questions' ,
        newUrl:"/"
      }  
    this.handleChange = this.handleChange.bind(this);
    this.changeUrl = this.changeUrl.bind(this);
    

  }

  componentDidMount () {
    this.setState({qas: data});
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({value: event.target.value});
    
  }

  changeUrl(url){
   
    this.setState({newUrl:url})
    
  }

 
    
  render() {
      
    console.log("value=",this.state.value)
      const filterqas= this.state.qas.filter((qa)=>{return qa.section===this.state.value});
        console.log("filterqas=",filterqas)
      
      console.log("newUrl=", this.state.newUrl)

      const filterfaq= this.state.qas.filter((faq)=>{return faq.url===this.state.newUrl});
      console.log("this is filterfaq=",filterfaq)
    
    
      return (
       <div className="App">
      
      
        <Router>
          <div>
              {
                this.state.newUrl ==="/" ?
              
    
              <label style={{color:'red'}}>
               Question Area:
                <select value={this.state.value} onChange={this.handleChange}>
                  <option value="General questions">General Questions</option>
                  <option value="Fees">Fees</option>
                  <option value="Questionnaire to determine risk tolerance score">Questionnaire to determine risk tolerance score</option>
                  <option value="Your Investment Plan">Your Investment Plan</option>
                  <option value="Your account">Your account</option>
                  <option value="Creating an account">Creating an account</option>
                  <option value="Creating an account — SMSF and Trust account types">Creating an account — SMSF and Trust account types</option>
                  <option value="Creating an account — Residents of other countries">Creating an account — Residents of other countries</option>
                </select>
              </label>
           
              :null

              }
              {
                this.state.newUrl ==="/" ? <Route path = "/" render={() => filterqas.map((qa) => (<QA  key={qa.id} qa={qa} qaCallback = {this.changeUrl}/>))}/> :null

              }
              {
                this.state.newUrl !=="/" ? <Route path = "/" render = {() => filterfaq.map((faq)=>(<Faq  key={faq.id} faq={faq} />) )}/> : null
              }
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

