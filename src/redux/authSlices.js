import { createSlice } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const initialState = {
  ACCESS_TOKEN: cookies.get("ACCESS-TOKEN") || "",
  REFRESH_TOKEN: cookies.get("REFRESH-TOKEN") || "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials(state, action) {
      const { ACCESS_TOKEN, REFRESH_TOKEN } = action.payload;
      state.ACCESS_TOKEN = ACCESS_TOKEN;
      state.REFRESH_TOKEN = REFRESH_TOKEN;
    },
    async logOut(state) {
      await cookies.remove("ACCESS-TOKEN");
      await cookies.remove("REFRESH-TOKEN");
      state.ACCESS_TOKEN = null;
      state.REFRESH_TOKEN = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;
