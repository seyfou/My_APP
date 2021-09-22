import {TOOGLE_FALSE,TOOGLE_TRUE} from '../constants/editUser';

export const toggleTrue=()=>{
    return {
        type:TOOGLE_TRUE
    }
};

export const toggleFalse=()=>{
    return {
        type:TOOGLE_FALSE
    }
};