import React from 'react';
import './App.css';
import Display from './components/Display/Display';
import Home from './components/Home/Home';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showRecipe: false,
      numCalories: '',
      showWarning: false
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  //Handles input received from Home component
  handleInput(val) { 
    if(val === false) {
      this.setState({numCalories: ''});
    }
    this.setState({showRecipe: val});
  };

  //Updates input state and warning state
  handleChange(numCal) {
    const re = /^[0-9\b]+$/;
      if (numCal === '' || re.test(numCal)) {
        this.setState({
          numCalories: numCal,
          showWarning: false
        });
      } else {
        this.setState({showWarning: true});
      };
  }

  //Conditionally renders Home and Display components
  render() {
    return(
      <div className="screen color">
        {this.state.showRecipe ? 
          <Display numCalories={this.state.numCalories} handleInput={this.handleInput}/> : 
          <div className="home-container"> 
            <Home numCalories={this.state.numCalories} handleChange={this.handleChange} handleInput={this.handleInput}/>
            {this.state.showWarning && <div>Please only enter numbers.</div>}
          </div>
        }
      </div>
    );
  }
}

export default App;
