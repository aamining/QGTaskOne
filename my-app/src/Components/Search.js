 import React, {Component} from 'react';

 import { Container, Row, Col } from 'react-bootstrap';


export default class Search extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            search:''
            
        }
    this.handleSearch = this.handleSearch.bind(this);
       
    }   
        
   handleSearch(event){
    this.setState({search: event.target.value.substr(0,20)})
    this.props.searchCallback(this.state.search)
    
   }
    
    render(){         
        
        return (
            <div>
                <Container >
                        
                    <Row>
                        <Col xs lg="2"></Col>
                        <Col > 
                        
                        <input id="search" value={this.state.search} onChange ={this.handleSearch}  style={{borderColor:'Blue', width:'600px', borderStyle:'solid',borderRadius: '25px', marginTop: '10px', marginBottom: '10px'}} placeholder="Search in FAQs"></input>
                        </Col>
                        <Col xs lg="2"></Col>
                    </Row>  

                </Container>
            </div>   
        )
           
    } 
  
}


