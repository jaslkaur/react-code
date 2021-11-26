import {createSlice} from '@reduxjs/toolkit';

const initialCounterState = {
    counter:0,
    showCounter:false
};

const counterSlice = createSlice({
name:'Counter',
initialState:initialCounterState,
reducers:{
    increment(state,action){
state.counter += action.payload
    },
    toggleCounter(state){
state.showCounter = !state.showCounter
    }
}
});

export const counterActions = counterSlice.actions;

const counterReducer = counterSlice.reducer

export default counterReducer;