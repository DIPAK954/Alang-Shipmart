import {configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./bagSlice";
import extraSlice from "./extraSlice";

const myntraStore = configureStore({
    reducer:{
        items:itemsSlice.reducer,
        fetchStatus:fetchStatusSlice.reducer,
        bag:bagSlice.reducer,
        extra:extraSlice.reducer
    }
});

export default myntraStore;
