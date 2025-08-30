//import { authUserReducer } from "../authuser/authenticationState/auth.reducer";
//import { AUTH_STATE_NAME } from "../authuser/authenticationState/auth.selector";
//import { authUserState } from "../authuser/authenticationState/auth.state";
import { userReducer } from "../state/user.reducer";
import { USER_STATE_NAME } from "../state/user.selector";
import { userState } from "../state/user.state";

export interface AppState{
    [USER_STATE_NAME]: userState,
    //[AUTH_STATE_NAME]: authUserState;
}

export const AppReducer ={
    [USER_STATE_NAME]: userReducer,
    //[AUTH_STATE_NAME]: authUserReducer
}