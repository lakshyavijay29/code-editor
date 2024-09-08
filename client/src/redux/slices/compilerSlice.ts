import { javascript } from "@codemirror/lang-javascript";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CompilerSliceStateType{
    html: string
    css: string
    javascript: string
    currentLanguage: "html" | "css" | "javascript";
}

const initialState: CompilerSliceStateType  = {
    html: "",
    css: "",
    javascript: "",
    currentLanguage: "html"
}


const compilerSlice = createSlice({
    name: "compilerSlice",
    initialState,
    reducers: {
        updateCurrentLanguage: (state, action: PayloadAction<CompilerSliceStateType["currentLanguage"]>) => { // pair of state and action to update the global values 
            state.currentLanguage = action.payload;
        },
    },
})

export default compilerSlice.reducer;
export const {updateCurrentLanguage} = compilerSlice.actions;