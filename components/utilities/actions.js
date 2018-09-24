import { RECEIVED_DATA, REQUESTED_DATA, SAVE_DRINK, DELETE_DRINK } from './constants'
import axios from 'axios';

// helper function (could go into another file)
const cleanData = drink => {
    let ingredient = 'strIngredient'
    let measure = 'strMeasure'
    let ingredients = []
    for (var i = 1; i < 16; i++) {
        let good = true;
        let measurement = drink[measure + i];

        if (measurement.split().indexOf("\n") !== -1 || measurement === "") {
            good = false;
        }

        if (drink[ingredient + i]) {
            ingredients.push({
                ingredient: drink[ingredient + i],
                measurement: good ? measurement : null
            })
        }
    }
    return ingredients;
}


export const getDrinks = (searchTerm) => dispatch => {
    dispatch({ type: REQUESTED_DATA });

    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`) //change margarite to ${searchTerm}
        .then(res => {
            console.log(res.data);
            let api_drinks = res.data.drinks.map(drink => ({
                drinkId: drink.idDrink,
                drinkName: drink.strDrink,
                drinkPic: drink.strDrinkThumb,
                glass: drink.strGlass,
                instructions: drink.strInstructions,
                ingredients: cleanData(drink)
            }))
            dispatch({ type: RECEIVED_DATA, payload: api_drinks })
        });
}

export const saveDrink = drink => ({
    type: SAVE_DRINK,
    payload: drink
})

export const deleteDrink = drink => ({
    type: DELETE_DRINK,
    payload:drink
})
