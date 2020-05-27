import React from 'react';
import axios from 'axios';
import Meal from '../Meal/Meal'
import './Display.css';
import { Button } from 'react-bootstrap';

class Display extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            meals: ''
        }
    }

    //Takes user back to home page
    passBackHome = () => {
        this.props.handleInput(false);
    };

    //Handles user getting a new set of meals
    handleClick = () => {
        this.getLoadData();
    };

    //Handles initial component mounting
    componentDidMount() {
        this.getLoadData();
    };

    //Calls API to generate three meals
    getLoadData = () => {
        axios.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate", {
            "credentials": 'include',
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key":"7c5d80fdc1msh37c56aa01298fe6p135c56jsn79df1910ca9f" //Fine for public use
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

    //Sets up diplay container and calls the Meal component
    render() {
        const mealsArr = this.state.meals;
        return(
            mealsArr &&
            <table>
                <tbody>
                    <tr className="cont">
                        {mealsArr.map((meal, i) => 
                            <td className="meal-container" key={i}>
                                <Meal title={meal.title} id={meal.id}/>
                            </td>
                        )}
                    </tr>
                    <tr>
                        <td>
                            <br></br>
                            <br></br>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Button className="bottom-bar" variant="dark" type="button" onClick={this.handleClick}>Find more!</Button>
                            <Button className="bottom-bar" variant="dark" type="button" onClick={this.passBackHome}>Go Home!</Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Display;