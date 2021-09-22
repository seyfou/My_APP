import { GET_RESERVATION_LOAD, GET_RESERVATION_SUCCESS,POST_RESERVATION_FAIL,GET_RESERVATION_FAIL,GET_RESERVATION,POST_RESERVATION } from "../constants/reservation"

//initial state

const initialstate={
    reservations:[],
    loadReservation:false,
    errors:null,
    reservation:{}
};

export const reservationReducer=(state=initialstate,{type,payload})=>{
    switch(type){
        case GET_RESERVATION_LOAD: 
        return {...state,loadReservation:true}
        case GET_RESERVATION_SUCCESS:
            return {...state,reservations:payload,loadReservation:false}
        case GET_RESERVATION_FAIL:
            return {...state,errors:payload,loadReservation:false}
        case POST_RESERVATION_FAIL:
                return {...state,errors:payload,loadReservation:false}

        case GET_RESERVATION:
            return {...state,reservation:payload}
        case POST_RESERVATION:
            
            return  {...state, loadReservation:false, reservation:payload};
          

        default: return state
    }
    
}

