import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "./queries/product";
import userReducer from "./reducers/user.reducer";
import { userApi } from "./queries/user";

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    'user': userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([pokemonApi.middleware, userApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
