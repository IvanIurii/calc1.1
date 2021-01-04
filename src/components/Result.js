import React, {Component} from 'react';

class ResultComponent extends Component {


    render() {
        let {result} = this.props;
        if (result) {
            return (
                <div className="result">
                    <p>{result}</p>
                </div>
            );
        }
        return (
            <div className="result">
                <p className="input-null">0</p>
            </div>
        );
    }
}


export default ResultComponent;