import { Routes } from "@angular/router";
import { VeggieShellComponentComponent } from "./veggie-shell-component/veggie-shell-component.component";
import { VEGGIE_LIST_FEATURE_KEY } from "./state/veggielist.state";
import { veggieListReducer } from "./state/veggielist.reducer";
import { VeggieListComponent } from "./veggie-list/veggie-list.component";
import { AddVegieComponent } from "./add-vegie/add-vegie.component";
import { EditvegieComponent } from "./editvegie/editvegie.component";
import { provideState } from "@ngrx/store";
import { provideEffects } from "@ngrx/effects";

export const veggieRoutes: Routes = [
  {
    path: '',
    component: VeggieShellComponentComponent,
    providers: [
      provideState(VEGGIE_LIST_FEATURE_KEY, veggieListReducer),
      //provideEffects(VeggielistEffects)
    ],
    children: [
      { path: '', component: VeggieListComponent },
      { path: 'add', component: AddVegieComponent },
      { path: 'edit/:id', component: EditvegieComponent }
    ]
  }
];