import React from 'react';
import './App.css';
import Recipe from './components/Display/Recipe';
import Home from './components/Home/Home';

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

  handleInput(val) { 
    this.setState({'showRecipe': val});
  };

  handleChange(numCal) {
    const re = /^[0-9\b]+$/;
      if (numCal === '' || re.test(numCal)) {
        this.setState({'numCalories': numCal});
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
          <div> 
            <Home numCalories={this.state.numCalories} handleChange={this.handleChange} handleInput={this.handleInput}/>
            {this.state.showWarning ? (<div>Please only enter numbers.</div>) : null}
          </div>
        }
      </div>
    );
  }
}

export default App;
