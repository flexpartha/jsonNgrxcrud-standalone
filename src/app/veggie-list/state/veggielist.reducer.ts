import { Action, createReducer, on } from "@ngrx/store";
import { initialState, VeggieListState } from "./veggielist.state";
import { addVeggieSuccess, deleteVeggieSuccess, loadVeggieListSuccess, updateVeggieSuccess } from "./veggielist.action";
import { Vegetable } from "../model/vegetable.interfaces";

const _veggieListReducer = createReducer(
    initialState,
      on(addVeggieSuccess, (state, action) => {
        const addVeggie = { ...action.veggie };
        return {
          ...state,
          veggieList: [...state.veggieList, addVeggie],
        };
      }),
      on(updateVeggieSuccess, (state, action) => {
          const updatedVeggie = state.veggieList.map((veggie: Vegetable) => {
            return action.veggie.id === veggie.id ? action.veggie : veggie;
          });
          return {
            ...state,
            veggieList: updatedVeggie,
          };
        }),
        on(deleteVeggieSuccess, (state, { id }) => {
          console.log('Deleted veggie with id:', id);
          //let deleteUser = {...action.user};
          //console.log(deleteUser);
          const updateddeletedVeggie = state.veggieList.filter((veggie) => {
            return veggie.id != id;
          });
          return {
            ...state,
            veggieList: updateddeletedVeggie,
          };
        }),
        on(loadVeggieListSuccess, (state, action) => {
          return {
            ...state,
            veggieList: action.veggieList,
          };
        })
)

export function veggieListReducer(state: VeggieListState | undefined, action: Action) {
    return _veggieListReducer(state, action);
}