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

  handleInput(val) { 
    if(val === false) {
      this.setState({numCalories: ''});
    }
    this.setState({showRecipe: val});
  };

  handleChange(numCal) {
    const re = /^[0-9\b]+$/;
      if (numCal === '' || re.test(numCal)) {
        this.setState({numCalories: numCal});
        this.setState({showWarning: false});
      } else {
        this.setState({showWarning: true});
      };
  }

  render() {
    return(
      <div className="screen">
        {this.state.showRecipe ? 
          <Display numCalories={this.state.numCalories} handleInput={this.handleInput}/> : 
          <div className="home-container"> 
            <Home numCalories={this.state.numCalories} handleChange={this.handleChange} handleInput={this.handleInput}/>
            {this.state.showWarning ? (<div>Please only enter numbers.</div>) : null}
          </div>
        }
      </div>
    );
  }
}

export default App;
