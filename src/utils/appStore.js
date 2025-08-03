import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../utils/userSlice"
import movieSlice from "../utils/movieSlice"
const appStore= configureStore({reducer:{
user:userSlice,
movie:movieSlice,
}})
export default appStore