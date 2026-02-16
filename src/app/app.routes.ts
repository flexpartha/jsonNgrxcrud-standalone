import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';
import { veggieListReducer } from './veggie-list/state/veggielist.reducer';
import { VEGGIE_LIST_FEATURE_KEY } from './veggie-list/state/veggielist.state';
import { veggieRoutes } from './veggie-list/veggie.routes';

export const routes: Routes = [
    {
        path:'', redirectTo:'/userList', pathMatch:'full'
    },
    {
        path: 'userList',
        loadChildren: ()=> import('./user/user.routes').then(mod =>mod.userRoutes),
    },
    {
        path:'adduser',
        loadChildren: () => import('./adduser/add.routes').then(mod => mod.addUserRoutes)
    },
    {
        path:'edituser',
        loadChildren: () => import('./edituser/edit.routes').then(mod => mod.editUserRoutes)
    },
    {
        path : 'veggies',
        loadChildren: () => import('./veggie-list/veggie.routes').then(mod => mod.veggieRoutes)
    }
];
