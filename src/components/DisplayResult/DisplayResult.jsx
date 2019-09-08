import React, {Component} from 'react';
import './DisplayResult.styles.css'

class DisplayResult extends Component {


    render() {
        let {result} = this.props;
        
        return (
            <div className="result">
               
                <p>{result}</p>
            </div>
    )
        ;
    }
}


export default DisplayResult;

