import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../types";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4500/api",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], string>({
      query: () => `/product/all`,
    }),
    getProductById: builder.query<IProduct, string>({
      query: (id) => `/product/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = pokemonApi;