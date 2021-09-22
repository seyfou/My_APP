import {LOAD_USER, REGISTER_USER, LOGIN_USER, LOGOUT_USER, CURRENT_USER,GET_USER_FAIL,GET_USER_SUCCESS} from "../constants/user";
import axios from "axios";

export const registerUser=(user,history) => async (dispatch)=> {
  dispatch({ type:LOAD_USER});
  try {
    const result= await axios.post("/user/register", user); //=> {user, msg, token}
    dispatch({type:REGISTER_USER, payload:result.data});
    history.push("/");
  } catch (error) {
    const {errors}= error.response.data;
    console.log(error)
    if (Array.isArray(errors)){
      errors.forEach((err)=>alert(err.msg));
    // dispatch({type:FAIL_USER, payload:error.response.data});
  }
  }
};

export const loginUser=(user,history) => async (dispatch)=> {
  dispatch({type:LOAD_USER});
  try {
    const result= await axios.post("/user/login", user); //=> {user, msg, token}
    dispatch({type:LOGIN_USER, payload:result.data});
    history.push("/");
  } catch (error) {
    const {errors, msg}= error.response.data;
    if (Array.isArray(errors)){
      errors.forEach((err)=>alert(err.msg));
    // dispatch({type:FAIL_USER, payload:error.response.data});
  }
  if(msg){
    alert(msg);
  }
 };
};


export const current=()=> async dispatch=>{
  dispatch({type:LOAD_USER});
  const options={
    headers:{
      authorization:localStorage.getItem("token")
    }
  }
  try {
    let result= await axios.get("/user/current",options); // return current user
    dispatch({type:CURRENT_USER, payload:result.data.user})
  } catch (error) {
    
  }
}

export const logout=()=>{
  return {
    type:LOGOUT_USER
  };
}

export const getUsers=()=>async(dispatch)=>{
  dispatch({type:LOAD_USER})
  try {
      let result= await axios.get("/user")
      dispatch({type:GET_USER_SUCCESS,payload:result.data.result})
  } catch (error) {
      dispatch({type:GET_USER_FAIL,payload:error})

  }
}
//Delete user
export const deleteOneUser=(id)=>async(dispatch)=>{
  await axios
   .delete(`/user/${id}`)
    .then((res)=>dispatch(getUsers()))
    .catch((err)=>console.log(err))
}


//editUser
export const editUser=(id,user)=> (dispatch)=>{
  try{axios.put(`/user/${id}`,user)
dispatch(current())}
 
 
  catch(err) {console.log(err)}
}