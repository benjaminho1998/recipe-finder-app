import React from 'react';
import './App.css';
import Recipe from './Recipe';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'showRecipe': false
    };
  }

  render() {
    return(
      <div>
        {this.state.showRecipe ? 
          <Recipe /> :
          <form>
            <label>Enter a calorie amount to which the meals will add up to for the day:</label>
            <br></br>
            <input type="text"></input>
          </form>
        }
      </div>
    );
  }
}

export default App;
