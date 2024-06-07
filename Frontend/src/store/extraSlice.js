import {createSlice } from "@reduxjs/toolkit";


const extraSlice = createSlice({
    name : 'extra',
    initialState:[],
    reducers: {
        addToExtra: (state,action) =>{
            state.push(action.payload);
        },
         removeFromextra: (state,action) =>{
          return  state.filter(itemId => itemId !==action.payload);
       },
    }
});

export const extraActions = extraSlice.actions;

export default extraSlice;