import React from 'react';
import axios from 'axios';
import Meal from '../Meal/Meal'

class Recipe extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            meals: ''
        }

        this.hi = "hi";
    }

    //TODO: implement get recipe by ID api call

    handleClick = () => {
        this.getLoadData();
    }

    componentDidMount() {
        this.getLoadData();
    };

    getLoadData = () => {
        axios.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate", {
            "credentials": 'include',
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": "7c5d80fdc1msh37c56aa01298fe6p135c56jsn79df1910ca9f"
            },
            "params": {
                "targetCalories": this.props.numCalories,
                "timeFrame": "day"
            }
        }).then((response) => {
            this.setState({meals: response.data.meals});
        })
        .catch((error) => {
            console.log(error)
        })
    };

    render() {
        const mealsArr = this.state.meals;
        if(mealsArr) {
            return(
                <div>
                    {mealsArr.map((meal, i) => 
                        <div key={i}>
                            <Meal mealData={meal}/>
                        </div>
                    )}
                        <button type="button" onClick={this.handleClick}>Find more!</button>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Recipe;