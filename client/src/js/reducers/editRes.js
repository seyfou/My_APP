
import {TOOGLE_FALSE,TOOGLE_TRUE} from '../constants/editRes'

const initialstate={
    edit:false
}
export const editResReducer=(state=initialstate,{type})=>{
    switch (type) {
        case TOOGLE_TRUE:return {...state,edit:true}
        case TOOGLE_FALSE: return {...state,edit:false}
            
    default:return state
    }
}