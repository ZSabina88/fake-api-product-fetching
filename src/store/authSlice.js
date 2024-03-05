import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    user: "",
    error: "",
    msg: "",
    token: ""
};

export const signUpUser = createAsyncThunk('user/signupuser',
    async function (body, { rejectWithValue }) {
        try {
            const url = 'http://api.valantis.store:40000';
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "X-Auth": authToString,
                },
                body: { action: 'get_ids' }
            });
            if (!response.ok) {
                throw new Error("Could not fetch products.");
            }
            if (error.status === 401) {
                throw new Error("You are not authorised.");
            }
            
            const fetchData = await response.json();
            return fetchData;

        } catch (error) {
            console.log(error.status);
            return rejectWithValue(error.message);
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
//     extraReducers:
//         (builder) => {
//             builder.addCase(getProducts.pending, (state) => {
//                 state.loading = true;
//             })

//             builder.addCase(getProducts.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.products = action.payload;
//                 state.error = "";
//             })

//             builder.addCase(getProducts.rejected, (state, action) => {
//                 state.loading = false;
//                 state.products = [];
//                 state.error = action.error.message;
//             })
//         }
})

export default userSlice;