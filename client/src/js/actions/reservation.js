import { GET_RESERVATION_LOAD, GET_RESERVATION_SUCCESS, GET_RESERVATION_FAIL,POST_RESERVATION_FAIL, GET_RESERVATION,POST_RESERVATION } from "../constants/reservation"

import axios from "axios"


//Get all reservations
export const getReservations=()=>async(dispatch)=>{
    dispatch({type:GET_RESERVATION_LOAD})
    try {
        let result= await axios.get("/reservation")
        dispatch({type:GET_RESERVATION_SUCCESS,payload:result.data.result})
    } catch (error) {
        dispatch({type:GET_RESERVATION_FAIL,payload:error})
        
    }
}
//Get one reservation
export const getReservation=(id)=>async(dispatch)=>{
    
    try {
        let res=await axios.get(`/reservation/${id}`)
     
        dispatch({type:GET_RESERVATION,payload:res.data.result});
     } catch (err) {
        console.log(err)
}}

//Delete reservation
export const deleteReservation=(id)=>async(dispatch)=>{
  await axios
   .delete(`/reservation/${id}`)
    .then((res)=>dispatch(getReservations()))
    .catch((err)=>console.log(err))
}
//post reservation




export const postReservation=(reservation)=>async(dispatch)=>{
  
    try {
        const res=await axios.post("/reservation",reservation)
  
        dispatch({type:POST_RESERVATION,payload:res.data})
        dispatch(getReservations())
        console.log(res.data)
        
    } catch (error) {
        dispatch({type:POST_RESERVATION_FAIL,payload:error})
        console.log(error)
        
        
    }
}
//Edit reservation
export const editReservation=(id,reservation)=>async (dispatch)=>{
    try{ await axios
        .put(`/reservation/${id}`,reservation)
    dispatch(getReservations())}
   
   
    catch(err) {console.log(err)}
} 