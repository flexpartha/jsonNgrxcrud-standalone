import { Routes } from '@angular/router';

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
    }
];
