import React from 'react';

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

    render() {
        return(
            <form onSubmit={this.passClickBack}>
                <label>Enter a calorie amount to which the meals will add up to for the day:</label>
                <br></br>
                <input type="text" onChange={this.passNumCalBack} value={this.props.numCalories}></input>
                <button type="button" onClick={this.passClickBack}>Go!</button>
            </form>
        );
    }
}

export default Home;