import { PayloadAction, createSlice } from "@reduxjs/toolkit";
type User={
  name:string
  password:string
}
type InitialState={
  user:User|null
  isLogin:boolean
}
const initialState:InitialState = {
  user:null,
  isLogin:false
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action:PayloadAction<User>) => {
      state.user=action.payload;
      state.isLogin=true;
    },
    setLogOut: (state, action:PayloadAction<null>) => {
      state.user=action.payload;
      state.isLogin=false;
    },
   
  },
});

export const { setLogin, setLogOut } = authSlice.actions;

export default authSlice.reducer;