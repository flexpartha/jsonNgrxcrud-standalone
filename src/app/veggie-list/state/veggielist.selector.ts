import { createFeatureSelector, createSelector } from '@ngrx/store';
//import { RouterStateUrl } from '../../store/';
//import { getCurrentRoutes } from '../../store/router/router.selector';
import { VeggieListState } from './veggielist.state';
import { Vegetable } from '../model/vegetable.interfaces';

export const VEGGIELIST_STATE_NAME = 'veggieList';
const getVeggieListState = createFeatureSelector<VeggieListState>(VEGGIELIST_STATE_NAME);

export const getVeggieList = createSelector(getVeggieListState, (state: VeggieListState) => {
  return state.veggieList;
});

export const getUserById = (id: string) => createSelector(
  getVeggieListState,
  (state: VeggieListState) => {
    return state.veggieList.find((veggie) => veggie.id === Number(id));
  }
);

// export const getVeggieById = createSelector(
//   getVeggieList,
//   getCurrentRoutes,
//   (veggieList, route: RouterStateUrl) => {
//     return veggieList
//       ? veggieList.find((veggie: Vegetable) => veggie.id == route.params['id'])
//       : null;
//   }
// );
