import React from 'react';
import axios from 'axios';
import './Meal.css';
import { Button } from 'react-bootstrap';

class Meal extends React.Component {

    handleClick = () => {
        axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${this.props.id}/information`, {
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key":"7c5d80fdc1msh37c56aa01298fe6p135c56jsn79df1910ca9f"
            }
        })
        .then((res)=>{
            if(res.data) {
                window.open(res.data.sourceUrl, '_blank');
            }
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    render() {
        const url = this.props.mealData.image;
        console.log(url);
        return(
            <span>
                <h1>
                    {this.props.mealData.title}
                </h1>
                <div>
                    <img className="image" alt="" src={`https://spoonacular.com/recipeImages/${url}`}></img>
                </div>
                <Button variant="outline-dark" onClick={this.handleClick}>Recipe</Button>
            </span>
        );
    }
}

export default Meal;