import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import QA from './Components/QA';
import Faq from './Components/Faq';
import Area from './Components/Area';
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

  handleChange(value) {
    
    this.setState({value: value});
    
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
                this.state.newUrl ==="/" ? <Area areaCallback = {this.handleChange}/> :null
              }
              {
                this.state.newUrl ==="/" ? <Route path = "/" render={() => filterqas.map((qa) => (<QA  key={qa.id} qa={qa} qaCallback = {this.changeUrl}/>))}/> :null

              }
              {
                this.state.newUrl !=="/" ? <Route path = "/"  render = {() => filterfaq.map((faq)=>(<Faq  key={faq.id} faq={faq} />) )}/> : null
              }
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

