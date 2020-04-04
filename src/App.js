import React from 'react';
import './App.css';
import Recipe from './Recipe';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'showRecipe': false,
      'numCalories': '',
      'showWarning': false
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleInput() { 
    this.setState({'showRecipe': true});
  };

  handleChange(e) {
    const re = /^[0-9\b]+$/;
      if (e.target.value === '' || re.test(e.target.value)) {
        this.setState({'numCalories': e.target.value});
        this.setState({'showWarning': false});
      } else {
        this.setState({'showWarning': true});
      };
  }

  render() {
    return(
      <div>
        {this.state.showRecipe ? 
          <Recipe numCalories={this.state.numCalories}/> :
          <form onSubmit={this.handleInput}>
            <label>Enter a calorie amount to which the meals will add up to for the day:</label>
            <br></br>
            <input type="text" onChange={this.handleChange} value={this.state.numCalories}></input>
            <button type="button" onClick={this.handleInput}>Go!</button>
            {this.state.showWarning ? (<div>Please only enter numbers.</div>) : null}
          </form>
        }
      </div>
    );
  }
}

export default App;
