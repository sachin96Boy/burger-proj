
import { configureStore } from '@reduxjs/toolkit';
import burgerReducer from './store/reducers/BurgerReducer';


const store = configureStore({
    reducer: {
        burger: burgerReducer,
    }
});

export default store;