import React, {Component} from 'react';

import './ButtonComponent.styles.css'

class ButtonComponent extends Component {

    handleClick=(e) =>{

        this.props.onClick(e.target.name)
    }

    render() {
        return (
            <div className="button">
                <button name="C" onClick={this.handleClick}>C</button>
                <button name="DEL" onClick={this.handleClick}>DEL</button>
                <button name="/" onClick={this.handleClick}>/</button>
                <button name="*" onClick={this.handleClick}>*</button><br/>


                <button name="7" onClick={this.handleClick}>7</button>
                <button name="8" onClick={this.handleClick}>8</button>
                <button name="9" onClick={this.handleClick}>9</button>
                <button name="-" onClick={this.handleClick}>-</button><br/>


                <button name="4" onClick={this.handleClick}>4</button>
                <button name="5" onClick={this.handleClick}>5</button>
                <button name="6" onClick={this.handleClick}>6</button>
                <button name="+" onClick={this.handleClick}>+</button><br/>

                <button name="1" onClick={this.handleClick}>1</button>
                <button name="2" onClick={this.handleClick}>2</button>
                <button name="3" onClick={this.handleClick}>3</button>
                <button name="." onClick={this.handleClick}>.</button><br/>


                <button className= 'zerobutton' name="0" onClick={this.handleClick}>0</button>
                <button className= 'zerobutton' name="=" onClick={this.handleClick}>=</button>
               <br/>
            </div>
        );
    }
}


export default ButtonComponent;