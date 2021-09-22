import { GET_AVIS_LOAD, GET_AVIS_SUCCESS, GET_AVIS_FAIL, GET_AVIS,POST_AVIS,POST_AVIS_FAIL} from "../constants/avis"

import axios from "axios"

//Get all avis
export const getAviss=()=>async(dispatch)=>{
    dispatch({type:GET_AVIS_LOAD})
    try {
        let result= await axios.get("/avis")
        dispatch({type:GET_AVIS_SUCCESS,payload:result.data.result})
    } catch (error) {
        dispatch({type:GET_AVIS_FAIL,payload:error})
        
    }
}
//Get one Avis
export const getAvis=(id)=>async(dispatch)=>{
    
    try {
        let res=await axios.get(`/avis/${id}`)
     
        dispatch({type:GET_AVIS,payload:res.data.result});
     } catch (err) {
        console.log(err)
}}

//Delete avis
export const deleteAvis=(id)=>async(dispatch)=>{
   await axios.delete(`/avis/${id}`)
    .then((res)=>dispatch(getAviss()))
    .catch((err)=>console.log(err))
}

//Add avis
export const postAvis=(avis)=>async(dispatch)=>{
    try {
        const res=await axios.post("/avis",avis)
      
        dispatch({type:POST_AVIS,payload:res.data})
        dispatch(getAviss())
    } catch (error) {
        dispatch({type:POST_AVIS_FAIL,payload:error})
        console.log(error) 
    }
  
}






