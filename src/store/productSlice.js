import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    loading: false,
    error: "",
    productsPerPage: 3,
    currentPage: 1
};

export const getProducts = createAsyncThunk('products/getproducts',
    async function (_, { rejectWithValue }) {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            if (!response.ok) {
                throw new Error("Could not fetch products.");
            }
            const fetchData = await response.json();
            return fetchData;

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        onNavigatePrev: (state) => {
            state.currentPage--;
        },
        onNavigateNext: (state) => {
            state.currentPage++;
        },
        onClickCurrentPage: (state, action) => { 
            state.currentPage = action.payload;
        },
    },
    extraReducers:
        (builder) => {
            builder.addCase(getProducts.pending, (state) => {
                state.loading = true;
            })

            builder.addCase(getProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
                state.error = "";
            })

            builder.addCase(getProducts.rejected, (state, action) => {
                state.loading = false;
                state.products = [];
                state.error = action.error.message;
                // console.log(action.error.message)
            })
        }
});

export const productActions = productSlice.actions;

export default productSlice;