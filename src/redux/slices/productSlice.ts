import { createSlice } from "@reduxjs/toolkit";
import { products } from "@/data/products";
import { type Product } from "@/data/products";
import type { RootState } from "../store";

export type ProductItem = Product;

export const initialState: ProductItem[] = products.map((product) => ({
    ...product
}));

console.log(initialState);

const ProductsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {

    }
})

export const selectProducts = (state: RootState) => state.products;

export default ProductsSlice.reducer;