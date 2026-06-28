import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { products } from "@/data/products";
import { type Product } from "@/data/products";
import type { RootState } from "../store";

// We add isFavorite ourselves — it's not in the data (may come from the DB later)
export type ProductItem = Product & { isFavorite: boolean };

export const initialState: ProductItem[] = products.map((product) => ({
    ...product,
    isFavorite: false,
}));

const ProductsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        // product id is a number, so payload is number
        toggleFavorite: (state, action: PayloadAction<number>) => {
            const product = state.find((p) => p.id === action.payload);
            if (product) product.isFavorite = !product.isFavorite;
        },
    },
});

export const { toggleFavorite } = ProductsSlice.actions;
export const selectProducts = (state: RootState) => state.products;
export const selectIsFavorite = (id: number) => (state: RootState) =>
    state.products.find((p) => p.id === id)?.isFavorite ?? false;

export default ProductsSlice.reducer;
