import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
    value: number;
}

const initialState: AppState = {
    value: 0,
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        setValue: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        },
    },
});

export const { increment, decrement, setValue } = appSlice.actions;
export default appSlice.reducer;
