import { createSlice } from "@reduxjs/toolkit";

interface IproductSlice {
  products: object[];
}

const initState: IproductSlice = {
  products: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState: initState,
  reducers: {},
});

export default productSlice.reducer;
