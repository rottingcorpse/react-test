import React, { Component } from 'react';

class HistoryComponent extends Component {
    render() {
        return (
            <section>
                <h1>History</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Operand 1</th>
                            <th>Operand 2</th>
                            <th>Operator</th>
                            <th>Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.calculations.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.operand1}</td>
                                    <td>{item.operand2}</td>
                                    <td>{item.operator}</td>
                                    <td>{item.result}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </section>
        );
    }
}

HistoryComponent.defaultProps = {
    calculations: []
};

export default HistoryComponent;
