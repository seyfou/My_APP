import { GET_CATEGORY_FAIL, GET_CATEGORY_LOAD, GET_CATEGORY_SUCCESS,GET_CATEGORY,POST_CATEGORY } from "../constants/category";
//initial state

const initialstate={
    categories:[],
    loadCategory:false,
    errors:null,
    category:{}
};

export const categoryReducer=(state=initialstate,{type,payload})=>{
    switch(type){
        case GET_CATEGORY_LOAD: 
        return {...state,loadCategory:true}
        case GET_CATEGORY_SUCCESS:
            return {...state,categories:payload,loadCategory:false}
        case GET_CATEGORY_FAIL:
            return {...state,errors:payload,loadCategory:false}

        case GET_CATEGORY:
            return {...state,category:payload}
            case POST_CATEGORY:
            
                return  {...state, loadCategory:false, category:payload};

        default: return state
    }
    
}

