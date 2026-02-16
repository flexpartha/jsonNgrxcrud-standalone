import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Vegetable } from '../model/vegetable.interfaces';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
//import { setloadingSpinner } from '../../store/shared/shared.action';
import { getVeggieList } from '../state/veggielist.selector';
import { loadVeggieList } from '../state/veggielist.action';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-veggie-list',
  standalone : true,
  imports: [NgIf,NgFor, AsyncPipe],
  templateUrl: './veggie-list.component.html',
  styleUrls: ['./veggie-list.component.css']
})
export class VeggieListComponent implements OnInit {

  veggieList$: Observable<Vegetable[]> = of([]);

  constructor(private store:Store<AppState>, private router: Router) {
    //this.store.dispatch(setloadingSpinner({ status: true }));
    this.veggieList$ = this.store.select(getVeggieList);
   }

  ngOnInit(): void {
    this.store.dispatch(loadVeggieList())
  }

  navigateAddveggie() {
    this.router.navigate(['/veggies/add']);
  }

  selectedVeggie(id: number) {
    this.router.navigate(['/veggies/edit', id]);
  }
}
