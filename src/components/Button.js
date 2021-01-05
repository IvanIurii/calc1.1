import React, {Component} from 'react';
import '../App.css';

class ButtonComponent extends Component {

    render() {
        return (
            <div className="button">
                <button className="dubl-button" name="C" onClick={e => this.props.onClick(e.target.name)}>Clear</button>
                <button className="button-red" name="*" onClick={e => this.props.onClick(e.target.name)}>x</button>
                <button className="button-red" name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button>
                <br/>

                <button name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button className="button-red" name="-" onClick={e => this.props.onClick(e.target.name)}>-</button>
                <br/>
                <button name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button className="button-red" name="+" onClick={e => this.props.onClick(e.target.name)}>+</button>
                <br/>

                <button name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button className="button-red" name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
            </div>
        );
    }
}


export default ButtonComponent;