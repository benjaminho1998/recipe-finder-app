import React from 'react';
import axios from 'axios';

class Recipe extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            img: ''
        }
    }

    componentDidMount() {
        axios.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate", {
            "credentials": 'include',
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": "7c5d80fdc1msh37c56aa01298fe6p135c56jsn79df1910ca9f"
            },
            "params": {
                "targetCalories": "2000",
                "timeFrame": "day"
            }
        }).then((response)=>{
            console.log(response)
            this.setState({img: response.data.meals[0].image})
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    render() {
        const url = this.state.img
        return(
            <div>
                <img alt="" src={`https://spoonacular.com/recipeImages/${url}`}></img>
            </div>
        );
    }
}

export default Recipe;