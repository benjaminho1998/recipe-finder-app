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

    passBackHome = () => {
        this.props.handleInput(false);
    };

    handleClick = () => {
        this.getLoadData();
    };

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
            console.log(this.state.meals);
        })
        .catch((error) => {
            console.log(error)
        })
    };

    render() {
        const mealsArr = this.state.meals;
        if(mealsArr) {
            return(
                <table>
                    <tbody>
                        <tr className="cont">
                            {mealsArr.map((meal, i) => 
                                <td className="meal-container" key={i}>
                                    <Meal mealData={meal} id={meal.id}/>
                                </td>
                            )}
                        </tr>
                        <br></br>
                        <br></br>
                        <tr>
                            <Button className="bottom-bar" variant="outline-dark" type="button" onClick={this.handleClick}>Find more!</Button>
                            <Button className="bottom-bar" variant="outline-dark" type="button" onClick={this.passBackHome}>Go Home!</Button>
                        </tr>
                    </tbody>
                </table>
            );
        } else {
            return null;
        }
    }
}

export default Display;