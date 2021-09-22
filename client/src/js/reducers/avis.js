import { GET_AVIS_FAIL, GET_AVIS_LOAD, GET_AVIS_SUCCESS,GET_AVIS,POST_AVIS} from "../constants/avis";
//initial state

const initialstate={
   
    loadAvis:false,
    errors:null,
    avis:{},
    aviss:[]
};

export const avisReducer=(state=initialstate,{type,payload})=>{
    switch(type){
        case GET_AVIS_LOAD: 
        return {...state,loadAvis:true}
        case GET_AVIS_SUCCESS:
            return {...state,aviss:payload,loadAvis:false}
        case GET_AVIS_FAIL:
            return {...state,errors:payload,loadAvis:false}

        case GET_AVIS:
            return {...state,avis:payload}
            case POST_AVIS:
            
                return  {...state, loadAvis:false, avis:payload};

        default: return state
    }
    
}

