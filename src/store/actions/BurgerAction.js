import instance from "../../axios-orders";
import {
    ADD_INGREDIENT,
    REMOVE_INGREDIENT,
    SET_INGREDIENTS,
    FETCH_INGREDIENTS_FAILED,

} from "../../store/constants/BurgerConstants";

export const addIngredient = (type) => (dispatch) => {
    dispatch({ type: ADD_INGREDIENT, payload: type });
}

export const removeIngredient = (type) => (dispatch) => {
    dispatch({ type: REMOVE_INGREDIENT, payload: type });
}

export const setIngredients = (ingredients) => (dispatch) => {
    instance.get("/ingredients.json").then((response) => {
        dispatch({ type: SET_INGREDIENTS, payload: response.data });
    }).catch((error) => {
        dispatch({ type: FETCH_INGREDIENTS_FAILED });
    });
}

