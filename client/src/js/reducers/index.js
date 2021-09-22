import {combineReducers} from "redux";
import {userReducer} from "./user";
import {cardReducer} from "./card"
import {categoryReducer} from "./category"
import {reservationReducer} from "./reservation"
import {editResReducer} from "./editRes"
import {avisReducer} from "./avis"
import {contactReducer} from "./contact"
export const rootReducer = combineReducers({userReducer,categoryReducer,cardReducer,reservationReducer,editResReducer,avisReducer,contactReducer});