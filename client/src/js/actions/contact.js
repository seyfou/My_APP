import { GET_CONTACT_LOAD, GET_CONTACT_SUCCESS, GET_CONTACT_FAIL, GET_CONTACT,POST_CONTACT,POST_CONTACT_FAIL} from "../constants/contact"

import axios from "axios"

//Get all contact
export const getContacts=()=>async(dispatch)=>{
    dispatch({type:GET_CONTACT_LOAD})
    try {
        let result= await axios.get("/contact")
        dispatch({type:GET_CONTACT_SUCCESS,payload:result.data.result})
    } catch (error) {
        dispatch({type:GET_CONTACT_FAIL,payload:error})
        
    }
}
//Get one Contact
export const getContact=(id)=>async(dispatch)=>{
    
    try {
        let res=await axios.get(`/contact/${id}`)
     
        dispatch({type:GET_CONTACT,payload:res.data.result});
     } catch (err) {
        console.log(err)
}}

//Delete contact
export const deleteContact=(id)=>async(dispatch)=>{
   await axios.delete(`/contact/${id}`)
    .then((res)=>dispatch(getContact()))
    .catch((err)=>console.log(err))
}

//Add contact
export const postContact=(contact)=>async(dispatch)=>{
    try {
        const res=await axios.post("/contact",contact)
      
        dispatch({type:POST_CONTACT,payload:res.data})
        console.log(res.data)
      
    } catch (error) {
        dispatch({type:POST_CONTACT_FAIL,payload:error})
        console.log(error) 
    }
  
}






