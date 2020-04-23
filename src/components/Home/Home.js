import React from 'react';
import './Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.passNumCalBack = this.passNumCalBack.bind(this);
        this.passClickBack = this.passClickBack.bind(this);
    }

    passNumCalBack(e) {
        this.props.handleChange(e.target.value);
    };

    passClickBack() {
        this.props.handleInput(true);
    };

    //TODO: Create the lock feature

    render() {
        return(
            <form onSubmit={this.passClickBack}>
                <label className="label">Enter daily calorie goal:</label>
                <br></br>
                <input className="input" type="text" onChange={this.passNumCalBack} value={this.props.numCalories} placeholder="Ex: 2000"></input>
            </form>
        );
    }
}

export default Home;