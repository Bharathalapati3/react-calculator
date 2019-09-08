import React, { Component } from 'react';
import './App.css';
import DisplayResult from './components/DisplayResult/DisplayResult';
import ButtonComponent from "./components/ButtonComponent/ButtonComponent";

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: "",
        }
    }

    click = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.clear()
        }
        else if(button === "DEL"){
            this.backspace()
        }

        else {

          let temp = this.state.result + button;

          if((this.state.result.includes('-',this.state.result.length-1) && temp.includes('-',temp.length-1))
               || (this.state.result.includes('-',this.state.result.length-1) && temp.includes('+',temp.length-1))
               || (this.state.result.includes('-' ,this.state.result.length-1) && temp.includes('*',temp.length-1))
               || (this.state.result.includes('-' ,this.state.result.length-1) && temp.includes('/',temp.length-1))
               || (this.state.result.includes('+',this.state.result.length-1) && temp.includes('-',temp.length-1))
               || (this.state.result.includes('+',this.state.result.length-1) && temp.includes('+',temp.length-1))
               || (this.state.result.includes('+' ,this.state.result.length-1) && temp.includes('*',temp.length-1))
               || (this.state.result.includes('+' ,this.state.result.length-1) && temp.includes('/',temp.length-1))
               || (this.state.result.includes('*',this.state.result.length-1) && temp.includes('-',temp.length-1))
               || (this.state.result.includes('*',this.state.result.length-1) && temp.includes('+',temp.length-1))
               || (this.state.result.includes('*' ,this.state.result.length-1) && temp.includes('*',temp.length-1))
               || (this.state.result.includes('*' ,this.state.result.length-1) && temp.includes('/',temp.length-1))
               || (this.state.result.includes('/',this.state.result.length-1) && temp.includes('-',temp.length-1))
               || (this.state.result.includes('/',this.state.result.length-1) && temp.includes('+',temp.length-1))
               || (this.state.result.includes('/' ,this.state.result.length-1) && temp.includes('*',temp.length-1))
               || (this.state.result.includes('/' ,this.state.result.length-1) && temp.includes('/',temp.length-1))
              
              )
          {
            temp = temp.slice(0, -1);
            this.setState({
              result: temp
          })
        }
          else
          
          { this.setState({
            result: this.state.result + button
        })}
           
        }
    };


    calculate = () => {
        var checkResult = this.state.result;  
        let length = checkResult.length -1;
        if(checkResult.includes('-',length) || checkResult.includes('+',length) ||
        checkResult.includes('*',length) || checkResult.includes('/',length) )
        {
            checkResult = this.state.result.slice(0, -1)
        }

        else {
            checkResult = this.state.result
        }
            console.log(this.state.result.length);
        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(checkResult) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    clear = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>Simple Calculator</h1>
                    <div className= 'border'>
                    <DisplayResult result={this.state.result}/>
                    <ButtonComponent onClick={this.click}/>
                    </div>
                   
                </div>
            </div>
        );
    }
}

export default App;
