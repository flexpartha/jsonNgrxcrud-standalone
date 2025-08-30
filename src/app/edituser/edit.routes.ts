import { Routes } from "@angular/router";
import { EditUserComponent } from "./edit-user/edit-user.component";

export const editUserRoutes:Routes = [
  {
    path: '', children:[
      {
        path: ":id", component:EditUserComponent
      }
    ]
  }
  ]