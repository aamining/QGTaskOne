import React from 'react';
import './QA.css';


function QA (props){
    
    return(
        <div>
        
        <h1>Question: {props.qa.question}</h1>
        <h3>Answer: {props.qa.answer}</h3>


        
        </div>

    )
}

export default QA;