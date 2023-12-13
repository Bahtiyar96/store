import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types";

interface IUserSlice {
  userData?: IUser | null;
}

const initState: IUserSlice = {};

const userSlice = createSlice({
  name: "user",
  initialState: initState,
  reducers: {
    signOut(store) {
      store.userData = null;
    },
    signIn(store, action: PayloadAction<IUser>) {
      store.userData = action.payload;
    },
  },
});

export const { signIn, signOut } = userSlice.actions;
export default userSlice.reducer;
