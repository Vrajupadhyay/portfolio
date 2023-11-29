import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { toast } from "react-hot-toast";

import axiosInstance from "../../Helper/axiosInstance";

const initialState = {
    TechStackData: []
}

export const getAllTechStack = createAsyncThunk("/techstack", async () => {
    try {
        const response = axiosInstance.get("/glimpsesList.php");
        toast.promise(response, {
            loading: "loading Tech Stack data...",
            success: "Tech Stack loaded successfully",
            error: "Failed to get the Tech Stack",
        });

        // console.log("Tech Stack data: ", response.data);
        return (await response).data;
    } catch(error) {
        toast.error(error?.response?.data?.message);
    }
}); 

const TechSlice = createSlice({
    name: "techstack",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllTechStack.fulfilled, (state, action) => {
            if(action.payload) {
                state.TechStackData = [...action.payload];
            }
        })
    }
});

export default TechSlice.reducer;