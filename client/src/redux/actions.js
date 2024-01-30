import axios from "axios";
import { ADD_USERS, GET_USERS } from "./actionTypes";

export const getusers = () => async (dispatch) => {
  try {
    const res = await axios.get("/getall");
    // console.log(res);
    dispatch({ type: GET_USERS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const addusers = (newuser) =>async(dispatch)=>{
  try {
    const res = await axios.post("/add", newuser);
    dispatch({type:ADD_USERS, payload: res.data});
  } catch (error) {
    console.log(error)
  }
}
