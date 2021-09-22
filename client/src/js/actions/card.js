import { GET_CARD_LOAD, GET_CARD_SUCCESS, GET_CARD_FAIL, GET_CARD,POST_CARD,POST_CARD_FAIL} from "../constants/card"

import axios from "axios"

//Get all cards
export const getCards=()=>async(dispatch)=>{
    dispatch({type:GET_CARD_LOAD})
    try {
        let result= await axios.get("/card")
        dispatch({type:GET_CARD_SUCCESS,payload:result.data.result})
    } catch (error) {
        dispatch({type:GET_CARD_FAIL,payload:error})
        
    }
}
//Get one card
export const getCard=(id)=>async(dispatch)=>{
    
    try {
        let res=await axios.get(`/card/${id}`)
     
        dispatch({type:GET_CARD,payload:res.data.result});
     } catch (err) {
        console.log(err)
}}

//Delete Card
export const deleteCard=(id)=>async(dispatch)=>{
   await axios.delete(`/card/${id}`)
    .then((res)=>dispatch(getCards()))
    .catch((err)=>console.log(err))
}

//Add Card
export const postCard=(card)=>async(dispatch)=>{
    try {
        const res=await axios.post("/card",card)
      
        dispatch({type:POST_CARD,payload:res.data})
        dispatch(getCards())
    } catch (error) {
        dispatch({type:POST_CARD_FAIL,payload:error})
        console.log(error) 
    }
  
}







//Edit Card
/* export const editContact=(id,user)=> (dispatch)=>{
    axios.put(`/api/contact/${id}`,user)
    .then((res)=>dispatch(getContacts()))
    .catch((err)=>console.log(err))
}  */