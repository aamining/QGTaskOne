import React, {Component} from 'react';

import { Container, Row, Col} from 'react-bootstrap';



export default class QA extends Component {


    sendData = () => {
        this.props.triger({url:this.props.qa.url});
    }

        render(){
            return (
            <Container>
                <Row>
                    <Col xs lg="1"></Col>
                        <Col> 
                            <ul>
                                <a href={this.props.qa.url} onClick={this.sendData}>
                                        <li>{this.props.qa.questionkey}</li>
                                </a>
                            </ul>
                        </Col>
                    <Col xs lg="1"></Col>
                </Row>  
            </Container> 
        ) 
    }
}
// const QA = (props) => (
    
//     <Container>
//     <Row>
//         <Col xs lg="1"></Col>
//             <Col> 
//                 <ul>
//                     <a href={props.qa.url} onClick={sendData}>
//                             <li>{props.qa.questionkey}</li>
//                     </a>
//                 </ul>
//             </Col>
//         <Col xs lg="1"></Col>
//     </Row>  
// </Container> 
    

// );
// export default QA;

