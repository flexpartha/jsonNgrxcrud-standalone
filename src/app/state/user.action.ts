import { createAction, props } from '@ngrx/store';
import { User } from '../model/user.interface';

export const ADD_USER_ACTION = '[ADDUSER page] add user';

export const addUser = createAction(ADD_USER_ACTION, props<{ user: User }>());

export const UPDATE_USER_ACTION = '[USER page] update user';
export const UPDATE_USER_SUCCESS = '[USER page] upde user success';

export const DELETE_USER_ACTION = '[USER page] delete user';
export const DELETE_USER_SUCCESS = '[USER page] delete user success';

export const updateUsers = createAction(
  UPDATE_USER_ACTION,
  props<{ user: User }>()
);
export const updateUsersSuccess = createAction(
  UPDATE_USER_SUCCESS,
  props<{ user: User }>()
);

export const deleteUser = createAction(
  DELETE_USER_ACTION,
  props<{ id: number }>()
);

export const deleteUserSuccess = createAction(
  DELETE_USER_SUCCESS,
  props<{ id: number }>()
);

export const LOAD_USERS = '[USER page] load user';
export const LOAD_USERS_SUCCESS = '[USER page] load user success';

export const loadUsers = createAction(LOAD_USERS);
export const loadUsersSuccess = createAction(
  LOAD_USERS_SUCCESS,
  props<{ user: User[] }>()
);
