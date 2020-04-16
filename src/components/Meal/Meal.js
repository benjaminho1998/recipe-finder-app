import React from 'react';

class Meal extends React.Component {

    handleClick = () => {
        
    }

    render() {
        const url = this.props.mealData.image;
        return(
            <div>
                <h1>
                    {this.props.mealData.title}
                </h1>
                <div>
                    <img alt="" src={`https://spoonacular.com/recipeImages/${url}`}></img>
                </div>
                <button onClick={this.handleClick}>Recipe</button>
            </div>
        );
    }
}

export default Meal;