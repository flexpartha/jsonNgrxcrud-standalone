import { createAction, props } from "@ngrx/store";
import { Vegetable } from "../model/vegetable.interfaces";


export const addVeggieAction = '[Veggie List] Add Veggie';
export const addVeggieSuccessAction = '[Veggie List] Add Veggie Success';
export const updateVeggieAction = '[Veggie List] Update Veggie';
export const updateVeggieSuccessAction = '[Veggie List] Update Veggie Success';
export const deleteVeggieAction = '[Veggie List] Delete Veggie';
export const deleteVeggieSuccessAction = '[Veggie List] Delete Veggie Success';

export const loadVeggieListAction = '[Veggie List] Load Veggie List';
export const loadVeggieListSuccessAction = '[Veggie List] Load Veggie List Success';

export const addVeggie = createAction(addVeggieAction, props<{ veggie: Vegetable }>());
export const addVeggieSuccess = createAction(addVeggieSuccessAction, props<{ veggie: Vegetable }>());

export const updateVeggie = createAction(updateVeggieAction, props<{ veggie: Vegetable }>());
export const updateVeggieSuccess = createAction(updateVeggieSuccessAction, props<{ veggie: Vegetable }>());

export const deleteVeggie = createAction(deleteVeggieAction, props<{ id: number }>());
export const deleteVeggieSuccess = createAction(deleteVeggieSuccessAction, props<{ id: number }>());

export const loadVeggieList = createAction(loadVeggieListAction);
export const loadVeggieListSuccess = createAction(loadVeggieListSuccessAction, props<{ veggieList: Vegetable[] }>());