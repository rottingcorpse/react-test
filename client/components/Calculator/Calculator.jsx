import React, { Component } from 'react';
import History from 'components/History/History';

class CalculatorComponent extends Component {
  constructor(props) {
      super(props)
      this.state = {
          operand1: 1,
          operand2: 2,
          operator: 'prime',
          result: null,
          history: []
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  isPrime(num) {
    if(num < 3 && num > 1) return true;
    for (let i = 2; i < num; i++) {
        if(num%i==0) return false;
    }
    return true;
  }

  getMaxPrime(min, max) {
    let primes = [];
   
    for ( let i = parseInt(min); i <= parseInt(max); i++ ) {
        if (this.isPrime(i)) primes.push(i);
    }
    return Math.max(...primes);
 }

  handleChange(event) {
      let stateCopy = this.state;
      stateCopy[event.target.id] = event.target.value;
      this.setState({stateCopy})
  }


  handleSubmit(event) {
      event.preventDefault();
      let stateCopy = this.state;

      if (this.state.operator === 'prime') {
          stateCopy.result = this.getMaxPrime(stateCopy.operand1, stateCopy.operand2);
          
      } else {
          stateCopy.result = eval( stateCopy.operand1 + stateCopy.operator + stateCopy.operand2 );
      }

      stateCopy.history.push(stateCopy);

      this.setState({stateCopy});

    
  }

  render() {
    return(
        <section>
        <form onSubmit={this.handleSubmit}>
            <div className="cell">
                <label htmlFor="operand1">Operand 1: </label>
                <input type="text" id="operand1" value={this.state.operand1} onChange={this.handleChange} />
            </div>
            <div className="cell">
                <label htmlFor="operand2">Operand 2: </label>
                <input type="text" id="operand2" value={this.state.operand2} onChange={this.handleChange} />
            </div>
            <div className="cell">
                <label htmlFor="operator">Operator: </label>
                <select id="operator" value={this.state.operator} onChange={this.handleChange}>
                    <option value="+">Add</option>
                    <option value="/">Divide</option>
                    <option value="%">Modulus</option>
                    <option value="prime">Highest Prime</option>
                </select>
            </div>
            <div className="cell">
                <input type="submit" value="Calculate" id="submit" />
            </div>
            <div className="cell">
                <label htmlFor="result">Result: </label>
                <input type="text" id="result" value={this.state.result} readOnly />
            </div>
        </form>
        <History calculations={this.state.history}/>
        </section>
    );
  }
}

export default CalculatorComponent;
