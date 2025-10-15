import {createStore} from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice'

// const intialState = {count:0};

// function counterReducer(state= intialState,action){

//     switch(action.type) {
//         case 'INCREMENT':
//             return{count: state.count + 1}
//          case 'DECREMENT':
//             return{count: state.count - 1}
//         default:
//             return state;
//     }

// }

// const store = createStore(counterReducer);

const store = configureStore({
    reducer: {counter: counterReducer}
});

export default store;