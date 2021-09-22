import { GET_CARD_FAIL, GET_CARD_LOAD, GET_CARD_SUCCESS,GET_CARD,POST_CARD} from "../constants/card";
//initial state

const initialstate={
   
    loadCard:false,
    errors:null,
    card:{},
    cards:[]
};

export const cardReducer=(state=initialstate,{type,payload})=>{
    switch(type){
        case GET_CARD_LOAD: 
        return {...state,loadCard:true}
        case GET_CARD_SUCCESS:
            return {...state,cards:payload,loadCard:false}
        case GET_CARD_FAIL:
            return {...state,errors:payload,loadCard:false}

        case GET_CARD:
            return {...state,card:payload}
            case POST_CARD:
            
                return  {...state, loadCard:false, card:payload};

        default: return state
    }
    
}

