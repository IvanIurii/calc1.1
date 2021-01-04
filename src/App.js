import React, {Component} from 'react';
import './App.css';
import './App';
import Button from './components/Button'
import Resoult from './components/Result'

class App extends Component {
    constructor() {
        super();
        this.state = {
            result: ""
        }
    }

    onClick = button => {

        if (button === "=") {
            this.calculate()
        } else if (button === "C") {
            this.reset()
        } else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {
        var checkResult = ''
        if (this.state.result.includes('--')) {
            checkResult = this.state.result.replace('--', '+')
        } else {
            checkResult = this.state.result
        }

        try {
            this.setState({
                result: (eval(checkResult) || "") + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>Calculator 1.1</h1>
                    <Resoult result={this.state.result}/>
                    <Button onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;