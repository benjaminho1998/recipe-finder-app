import React from 'react';
import axios from 'axios';
import './Meal.css';
import { Button } from 'react-bootstrap';

const key = process.env.REACT_APP_SPOON_KEY;

class Meal extends React.Component {
    constructor(props) {
        super(props);

        this.url = '';
        this.state = {
            img: ''
        }
    }

    //Handles when user clicks on Recipe button
    handleClick = () => {
        window.open(this.url, '_blank');
    }

    //This is needed to call another API to load the images and recipe links for the three meals
    componentDidMount() {
        this.getMealData();
    }

    //Used to load images and recipe links for the three meals when user presses Find More!
    componentDidUpdate(prevProps) {
        if(this.props.title !== prevProps.title) {
            this.getMealData();
        }
    }

    //Another API call to load images and recipe links
    getMealData = () => {
        axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${this.props.id}/information`, {
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key":"7c5d80fdc1msh37c56aa01298fe6p135c56jsn79df1910ca9f"
            }
        })
        .then((res) => {
            if(res.data) {
                this.url = res.data.sourceUrl;
                this.setState({img: res.data.image});
            }
        })
        .catch((error) => {
            console.log(error)
        })
    }

    //Renders each of the three meals
    render() {
        return(
            <span>
                <h1 className="title">
                    {this.props.title}
                </h1>
                <div>
                    <img className="image" alt="" src={this.state.img}></img>
                </div>
                <br></br>
                <Button variant="outline-dark" onClick={this.handleClick}>Recipe</Button>
            </span>
        );
    }
}

export default Meal;