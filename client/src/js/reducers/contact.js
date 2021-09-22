import { GET_CONTACT_FAIL, GET_CONTACT_LOAD, GET_CONTACT_SUCCESS,GET_CONTACT,POST_CONTACT} from "../constants/contact";
//initial state

const initialstate={
   
    loadContact:false,
    errors:null,
    contact:{},
    contacts:[]
};

export const contactReducer=(state=initialstate,{type,payload})=>{
    switch(type){
        case GET_CONTACT_LOAD: 
        return {...state,loadContact:true}
        case GET_CONTACT_SUCCESS:
            return {...state,contacts:payload,loadContact:false}
        case GET_CONTACT_FAIL:
            return {...state,errors:payload,loadContact:false}

        case GET_CONTACT:
            return {...state,contact:payload}
            case POST_CONTACT:
            
                return  {...state, loadContact:false, contact:payload};

        default: return state
    }
    
}

