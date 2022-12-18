import { createReducer } from "@reduxjs/toolkit";
import {
    ADD_INGREDIENT,
    REMOVE_INGREDIENT,
    SET_INGREDIENTS,
    FETCH_INGREDIENTS_FAILED,
} from "../constants/BurgerConstants";

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
    building: false,
}

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
}

// const BurgerReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_INGREDIENT:
//             return {
//                 ...state,
//                 ingredients: {
//                     ...state.ingredients,
//                     [action.payload]: state.ingredients[action.payload] + 1,
//                 },
//                 totalPrice: state.totalPrice + INGREDIENT_PRICES[action.payload],
//             };
//         case REMOVE_INGREDIENT:
//             return {
//                 ...state,
//                 ingredients: {
//                     ...state.ingredients,
//                     [action.payload]: state.ingredients[action.payload] - 1,
//                 },
//                 totalPrice: state.totalPrice - INGREDIENT_PRICES[action.payload],
//             };
//         case SET_INGREDIENTS:
//             return {
//                 ...state,
//                 ingredients: action.payload,
//                 totalPrice: 4,
//             };
//         case FETCH_INGREDIENTS_FAILED:
//             return {
//                 ...state,
//                 ingredients: null,
//                 totalPrice: 4,
//             };
//         default:
//             return state;
//     }
// }

const BurgerReducer = createReducer(initialState, (builder)=> {
    builder
        .addCase(ADD_INGREDIENT, (state, action) => {
            state.ingredients[action.payload] = state.ingredients[action.payload] + 1;
            state.totalPrice = state.totalPrice + INGREDIENT_PRICES[action.payload];
            state.building = true;
        })
        .addCase(REMOVE_INGREDIENT, (state, action) => {
            state.ingredients[action.payload] = state.ingredients[action.payload] - 1;
            state.totalPrice = state.totalPrice - INGREDIENT_PRICES[action.payload];
            state.building = true;
        })
        .addCase(SET_INGREDIENTS, (state, action) => {
            state.ingredients = action.payload;
            state.totalPrice = 4;
            state.error = false;
            state.building = false;

        })
        .addCase(FETCH_INGREDIENTS_FAILED, (state, _) => {
            state.ingredients = null;
            state.totalPrice = 4;
            state.error = true;
        })
        .addDefaultCase((state, _) => {
            return state;
        })
})

export default BurgerReducer;
