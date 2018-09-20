import { RECEIVED_DATA, REQUESTED_DATA} from './constants'
import axios from 'axios';

export const getDrinks = (searchTerm) => dispatch => {
    dispatch({ type: REQUESTED_DATA });

    axios.get (`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`) //change margarite to ${searchTerm}
    .then (res => {
        console.log(res.data);
        let api_drinks = res.data.drinks.map(drinks =>({
            drinkId: drinks.idDrink,
            drinkName: drinks.strDrink,
            drinkPic: drinks.strDrinkThumb,
            ingredient1: drinks.strIngredient1,
            ingredient2: drinks.strIngredient2,
            ingredient3: drinks.strIngredient3,
            ingredient4: drinks.strIngredient4,
            ingredient5: drinks.strIngredient5,
            ingredient6: drinks.strIngredient6,
            ingredient7: drinks.strIngredient7,
            ingredient8: drinks.strIngredient8,
            ingredient9: drinks.strIngredient9,
            ingredient10: drinks.strIngredient10,
            ingredient11: drinks.strIngredient11,
            ingredient12: drinks.strIngredient12,
            ingredient13: drinks.strIngredient13,
            ingredient14: drinks.strIngredient14,
            ingredient15: drinks.strIngredient15,
            ingredientMeasurement1: drinks.strMeasure1,
            ingredientMeasurement2: drinks.strMeasure2,
            ingredientMeasurement3: drinks.strMeasure3,
            ingredientMeasurement4: drinks.strMeasure4,
            ingredientMeasurement5: drinks.strMeasure5,
            ingredientMeasurement6: drinks.strMeasure6,
            ingredientMeasurement7: drinks.strMeasure7,
            ingredientMeasurement8: drinks.strMeasure8,
            ingredientMeasurement9: drinks.strMeasure9,
            ingredientMeasurement10: drinks.strMeasure10,
            ingredientMeasurement11: drinks.strMeasure11,
            ingredientMeasurement12: drinks.strMeasure12,
            ingredientMeasurement13: drinks.strMeasure13,
            ingredientMeasurement14: drinks.strMeasure14,
            ingredientMeasurement15: drinks.strMeasure15,
            instructions: drinks.strInstructions,
            glass: drinks.strGlass
        }))
        dispatch({ type: RECEIVED_DATA, payload: api_drinks })
    });
}