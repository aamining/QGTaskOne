 import React, {Component} from 'react';

 import { Container, Row, Col } from 'react-bootstrap';


export default class Search extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            
            
        }
    this.handleSearch = this.handleSearch.bind(this);
       
    }   
        
   handleSearch(event){
       const search = event.target.value
    //this.setState({search: event.target.value})
    this.props.searchCallback(search)
    
   }
    
    render(){         
        
        return (
            <div>
                <Container >
                        
                    <Row>
                        <Col xs lg="2"></Col>
                        <Col > 
                        
                        <input id="search" value={this.props.search} onChange ={this.handleSearch}  style={{borderColor:'Blue', width:'600px', borderStyle:'solid',borderRadius: '25px', marginTop: '10px', marginBottom: '10px'}} placeholder="Search in FAQs"></input>
                        </Col>
                        <Col xs lg="2"></Col>
                    </Row>  

                </Container>
            </div>   
        )
           
    } 
  
}


