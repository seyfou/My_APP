import {LOAD_USER, REGISTER_USER, LOGIN_USER, LOGOUT_USER, FAIL_USER, CURRENT_USER,GET_USER_SUCCESS,GET_USER_FAIL} from "../constants/user";

const initialstate= {
    users:[],
  user:null,
  loaduser: false,
  errors:null,
  isAuth: false,
};

export const userReducer = (state=initialstate, {type,payload})=>{
switch (type) {
    case REGISTER_USER:
       localStorage.setItem("token", payload.token);
       return  {...state, loaduser:false, user:payload.user, isAuth:true};

    case LOGIN_USER:
        localStorage.setItem("token", payload.token);
        return  {...state, loaduser:false, user:payload.user, isAuth:true};
    case LOAD_USER:
        return {...state, loaduser:true};
        case GET_USER_SUCCESS:
            return {...state,users:payload,loaduser:false}
        case GET_USER_FAIL:
            return {...state,errors:payload,loaduser:false}

    case CURRENT_USER:
        return {...state, loaduser:false, isAuth:true, user:payload};

    case FAIL_USER:
        return {...state, loaduser:false, errors:payload};

    case LOGOUT_USER:
        localStorage.removeItem("token");
        return {user:null,loaduser: false, errors:null, isAuth: false,};

    default:
      return state;
}
};